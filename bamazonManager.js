var mysql = require("mysql");
var inquirer = require("inquirer");
var updatedInventory =[];
var addedProduct=[];
var lowInvArray =[];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sophia01*",
  database: "bamazondb"
});


connection.connect(function(err){
  if(err) throw err;
  console.log("Connected as id: " + connection.threadId);
   console.log('MANAGERS VIEW');
  
  managerView();

  //connection.end();
});




function managerView(){
        
                    const inquirer = require('inquirer');


					const requireLetterAndNumber = value => {
					  if (/\w/.test(value) && /\d/.test(value)) {
					    return true;
					  }
					  return 'Password need to have at least a letter and a number';
					};


     var  Manager = [
       
       {   
       	type: 'password',
	    message: 'Enter a masked password',
	    name: 'password2',
	    mask: '*',
	    validate: requireLetterAndNumber
        },
        {
            type:'list',
			name:'View',
			message:'What would you like to view?',
			choices: [
			'View Products for sale',
			'View Low Inventory',
			'Add To Inventory',
			'Add New Product'
		    ]
        }
      ];
      inquirer.prompt(Manager).then(function(answer) {

      switch (answer.View) {

			   case "View Products for sale":
			    sale();
			    break;

			  case "View Low Inventory":
			    lowInv();
			    break;

			  case "Add To Inventory":
			    addInv();
			    //confirm();

			    break;

			  case "Add New Product":
			    newProd();
			    break;
			}
});

}


function update() {
  connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
  var managerAdd = [
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
          },
          message: "Add To Inventory"
        },
        {
          name: "Units",
          type: "input",
          message: "How many units of the Product will you like to add?",
         // validate: validateInput,
          filter: Number
        }
      ];
      inquirer.prompt(managerAdd).then(function(answer) {
          updatedInventory.push(answer);
        
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === answer.choice) {
            chosenItem = res[i];
          }
        }

         var newQuant = (chosenItem.stock_quantity+parseInt(answer.Units));
           //console.log(newQuant);
          var updateQueryStr = 'UPDATE products SET stock_quantity = ' + newQuant + ' WHERE id = ' + chosenItem.id;
           console.log( updateQueryStr);

          // Update the inventory
          connection.query(updateQueryStr, function(err, answers) {
            if (err) throw err;

            console.log('Added to Inventory successfully!');
            console.log("\n---------------------------------------------------------------------\n");
    

         })
                  connection.end();

     });
});
}









function sale() {
  connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
  for(var i = 0; i< res.length; i++){
    console.log("Item No : " + res[i].id);
    console.log("Product Name :" + res[i].product_name);
    console.log("Department :" + res[i].department_name);
    console.log("Price :" + res[i].price);}
    
    connection.end();

  }); 

}

function lowInv() {
	connection.query('SELECT * FROM Products WHERE stock_quantity < 350', function(err, res){
    if (err) throw err;


       console.log('Items With Low Inventory');
       console.log(res);

      connection.end();

  }); 
}

function addInv() {
  connection.query('SELECT * FROM Products WHERE stock_quantity < 350', function(err, res){
    if (err) throw err;

        //for (var i = 0; i< res.length; i++){
        if (res.length !== 0) {
     
          var managerAdd = [
            {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
          },
          message: "Add To Inventory"
        },
        {
          name: "Units",
          type: "input",
          message: "How many units of the Product will you like to add?",
         // validate: validateInput,
          filter: Number
        }
      ];
      inquirer.prompt(managerAdd).then(function(answer) {

          updatedInventory.push(answer);
      	
      	var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === answer.choice) {
            chosenItem = res[i];
          }
        }

         var newQuant = (chosenItem.stock_quantity+parseInt(answer.Units));
           //console.log(newQuant);
          var updateQueryStr = 'UPDATE products SET stock_quantity = ' + newQuant + ' WHERE id = ' + chosenItem.id;
           console.log( updateQueryStr);

          // Update the inventory
          connection.query(updateQueryStr, function(err, answers) {
            if (err) throw err;

            console.log('Added to Inventory successfully!');
            console.log("\n---------------------------------------------------------------------\n");
            //connection.end();
             addInv();
             	}) 
              
          });

      

     }

       else {
      connection.end();
     } 


     // }
    

         
    // }

  //}


       
});
  //connection.end();


}
  

  
               
   
   function newProd(){
             connection.query("SELECT * FROM departments", function(err, results) {
         if (err) throw err;

        var NewProduct = [
			{
				type:'input',
				name:'ProductName',
				message:'Add New Product Name'
			},
			{
			    name: "choice",
                type: "rawlist",
                choices: function() {
               var choiceArray = [];
               for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].department_name);
                }
               return choiceArray;
                },
               message: "Choose the Department"
                },
			 {
			    type:'input',
				name:'Price',
				message:'Add New Price'
			},
			{
			    type:'input',
				name:'StockQuantity',
				message:'Add new Stock Quantity',
			    
			   }

			 ];

   
  
   inquirer.prompt(NewProduct).then(function(answers){
   	addedProduct.push(answers);

   	connection.query('INSERT INTO Products ( product_name, department_name, price, stock_quantity, product_sales) VALUES ( ?, ?, ?, ?,?);', [answers.ProductName, answers.choice, answers.Price, answers.StockQuantity, 0], function(err, result){

			if(err) console.log('Error: ' + err);

			console.log('New item successfully added to the inventory!');
			//console.log(' ');
			console.log('Product Name: ' + answers.ProductName);
			console.log('Department: ' + answers.choice);
			console.log('Price: $' + answers.Price);
			console.log('Stock Quantity: ' + answers.StockQuantity);

			connection.end();
		})
	})

 }) 
};