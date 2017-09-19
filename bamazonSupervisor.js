var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var addedDept =[];
var costUpdateArray =[];
var chosenItem;




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
   console.log('SUPERVISORS VIEW');
  
  supervisorView();

  //connection.end();
});

function supervisorView(){
        
                    const inquirer = require('inquirer');


          const requireLetterAndNumber = value => {
            if (/\w/.test(value) && /\d/.test(value)) {
              return true;
            }
            return 'Password need to have at least a letter and a number';
          };


     var  supervisor = [
       
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
      'View Product Sales by Department',
      'Create New Department',
      'Update Overhead Cost'
       ]
        }
      ];
      inquirer.prompt(supervisor).then(function(answer) {

      switch (answer.View) {

         case "View Product Sales by Department":
          departmentSales();
          break;

         case "Create New Department":
          newDepartment();
          break;

          case "Update Overhead Cost":
           updateCost2();
          break;
           }
     });
 }



  function departmentSales(){

      //creates a table for the data to be stored and displayed in node
      var table = new Table({
       head: ['DepartmentId', 'department_name', 'over_head_costs', 'Total_Product_Sales', 'Total_Profit'],
      
         });



      var query = "SELECT departments.DepartmentId, products.department_name, departments.over_head_costs,SUM(products.product_sales) AS Total_Product_Sales, (SUM(products.product_sales)-departments.over_head_costs ) AS Total_Profit ";
       query += "FROM products INNER JOIN departments ON (products.department_name = departments.department_name) GROUP BY department_name "; 
       query += "ORDER BY DepartmentId ASC";

      connection.query(query, function(err, res) {
       
        if(err) console.log(err);

        //this loops through the data pulled from the totalprofits database and pushes it into the table above
        for(var i = 0; i<res.length; i++){
          table.push(
            [res[i].DepartmentId, res[i].department_name, res[i].over_head_costs, res[i].Total_Product_Sales, res[i].Total_Profit]
            );
        }

        console.log(' ');
        console.log(table.toString());
        connection.end();
       })



      };



    function newDepartment(){

    var NewDept = [
      {
        type:'input',
        name:'DeptName',
        message:'Add New Department'
      },
      {
          type: 'input',
          name:'overhead',
          message:' Add OverHead Costs?',
          default: 0
                                
      }

      
      ];

    inquirer.prompt(NewDept).then(function(answers){
    addedDept.push(answers);

     connection.query('INSERT INTO departments ( department_name, over_head_costs) VALUES ( ?, ?);', [ answers.DeptName, answers.overhead], function(err, result){
           if(err) console.log('Error: ' + err);

          console.log('New Department: ' + answers.DeptName);
          console.log('Overhead Cost:'  +  answers.overhead);

           console.log('New Department and Overhead Cost successfully created!');

           connection.end();

         })
     
 })

  };





  function updateCost2() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM departments", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    var update = [
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
          message: "Check for the Department you want to update the overhead cost"
        },
        {
          name: "cost",
          type: "input",
          message: "Add Overhead Cost?",
         // validate: validateInput,
          filter: Number
        }
      ];
      inquirer.prompt(update).then(function(answer) {
          costUpdateArray.push(answer);
        
        for (var i = 0; i < results.length; i++) {
          if (results[i].department_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        
          connection.query('UPDATE departments SET over_head_costs= ? WHERE department_name = ?', [answer.cost, chosenItem.department_name], function (error, results, fields) {
           if (error) throw error;
          // ... 
          
           console.log(' OverHead Cost: ' + answer.cost);

           console.log('OverHead Cost successfully added to :' + chosenItem.department_name );

           connection.end();

          })

});

});
}
