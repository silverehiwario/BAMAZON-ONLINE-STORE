var mysql = require("mysql");
var inquirer = require("inquirer");
var CustomersPurchase = [];
var orderPrice;


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
   console.log('INVENTORY');
  selectAll();
  Start();

  //connection.end();
});


/**
 *  Select all from my database 
 */
function selectAll() {
  connection.query("SELECT * FROM products", function(err, res){
    if (err) throw err;
  for(var i = 0; i< res.length; i++){
    console.log("Item No : " + res[i].id);
    console.log("Product Name :" + res[i].product_name);
    console.log("Price :" + res[i].price);}
    console.log("Check the Inventory above for the product you want to buy");


  }); //Close connection.query


  function validateInput(value) {
  var integer = Number.isInteger(parseFloat(value));
  var sign = Math.sign(value);

  if (integer && (sign === 1)) {
    return true;
  } else {
    return 'Please enter a whole non-zero number.';
  }
}





}
function Start() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    var CustOrder = [
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "Check the Inventory above for the product you want to buy"
        },
        {
          name: "Units",
          type: "input",
          message: "How many units of the Product will you like to buy?",
         // validate: validateInput,
          filter: Number
        }
      ];
      inquirer.prompt(CustOrder).then(function(answer) {
          CustomersPurchase.push(answer);
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if bid was high enough
        if (  parseInt(answer.Units)  <= chosenItem.stock_quantity ) {
          console.log('Congratulations, the product you requested is in stock! Placing order!');

          // Construct the updating query string

           var newQuant = (chosenItem.stock_quantity - parseInt(answer.Units));
        //console.log(newQuant);
        orderPrice = (chosenItem.price * parseInt(answer.Units));

        var newProductSales = (chosenItem.product_sales + orderPrice);
        // console.log('Product sales' + chosenItem.product_sales);
        

        connection.query('UPDATE products SET stock_quantity= ?, product_sales = ? WHERE id = ?', [newQuant, newProductSales, chosenItem.id], function (error, results, fields) {
          if (error) throw error;


          console.log('Your order has been placed! Your total is $' + orderPrice);
          console.log('Thank you for shopping with us!');
          console.log("\n---------------------------------------------------------------------\n");

          

      
      // console.log(results);
        });
        connection.end();
  
             
        } else {
          console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
          console.log('Please modify your order.');
          console.log("\n---------------------------------------------------------------------\n");
          
          console.log("stock_quantity is = " + chosenItem.stock_quantity);

          Start();
          //connection.end();

        }
});

});
}


