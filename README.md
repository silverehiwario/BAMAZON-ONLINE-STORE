# BAMAZON-ONLINE-STORE


Synopsis

This is an interactive online shopping store node app where MySQL and Node.JS are used to allow users to purchase items as a customer, view, track and update the product inventory as a manager, and track the total sales by department, add new departments and update overhead costs as a supervisor..

Bamazon Customer Portal

The Customer Portal shows the current items available for purchase, prompts the user to chose from the list of available product, and the user can specify the quantity to be purchased. The App calculates the total price and places the order if there is sufficient quantity in stock to fulfull the order. If the quantity speficied by the user is more than available stock quantity, the app indicates to the user the quantity available in stock and the user will now have the opportunity to reduce the quantity of that product or purchase a different product.

Customer Portal
---------------------------------------------------------------------
INVENTORY
Item No : 1
Product Name :Milk
Price :9.99
Item No : 2
Product Name :Bread
Price :5.99

Check the Inventory above for the product you want to buy
? Check the Inventory above for the product you want to buy Milk
? How many units of the Product will you like to buy? 20
Congratulations, the product you requested is in stock! Placing order!
Your order has been placed! Your total is $199.8
Thank you for shopping with us!
---------------------------------------------------------------------

Bamazon Manager Portal

The Bamazon manager Portal allows users to view and edit the inventory of the store. The user will be prompted to choose from the following options:

View products for sale
View low inventory
Add to inventory
Add a new product
Manager Options 1 & 2

The first option allows the user to see the list of products that are currently for sale, what department the item belongs to, the price of the product and how much stock is left for that product.

The second option allows the user to see a list of all inventory items that have less than 350 items in stock. If there are no products that meet this criteria, no product is listed


Bamazon Manager Portal - Options 1 & 2
---------------------------------------------------------------------
What would you like to view? View Products for sale
Item No : 1
Product Name :Milk
Department :Dairy
Price :9.99
Item No : 2
Product Name :Bread
Department :Bakery
Price :5.99

---------------------------------------------------------------------
Items With Low Inventory
[ RowDataPacket {
    id: 1,
    product_name: 'Milk',
    department_name: 'Dairy',
    price: 9.99,
    stock_quantity: 340,
    product_sales: 4015.98 },
---------------------------------------------------------------------


Manager Options 3 & 4

The third option allows the user to update the inventory for items less than 350 until the criteria is met. A prompt with the list of product quantity below 350 is displayed for the user to chose from. A second prompt asks how many items the user wishes to increase the quantity by.

The last option allows the user to add a new product to the inventory. Prompts ask the user for the product name, list of available department to place the new product, the price and the stock quantity.

Bamazon Manager Portal - Options 3 & 4
---------------------------------------------------------------------
MANAGERS VIEW
? Enter a masked password ********
? What would you like to view? Add To Inventory
? Add To Inventory Milk
? How many units of the Product will you like to add? 20
UPDATE products SET stock_quantity = 360 WHERE id = 1
Added to Inventory successfully!
---------------------------------------------------------------------

? What would you like to view? Add New Product
? Add New Product Name Egg
? Choose the Department Grocery
? Add New Price 3.99
? Add new Stock Quantity 100
New item successfully added to the inventory!
Product Name: Egg
Department: Grocery
Price: $3.99
Stock Quantity: 100
---------------------------------------------------------------------

Bamazon Supervisor Portal

The Bamazon Supervisor Portal allows users to view the total profits of the store categorized by department, add new departments and update overhead cost.

Bamazon Supervisor Portal

DepartmentId	department_name		over_head_costs		Total_Product_Sales	Total_Profit
1		Dairy			500			4015.98			3515.98
2		Bakery			500			2494.33			1994.33
3		Grocery			500			806.99			306.99
4		Deli			500			1008.99			508.99
5		Wine			500			1423.55			923.55
6		Fruits and Vegetables	500			2538.38			2038.38
7		Cookware		500			3000.97			2500.97
8		Appliances		500			3301.97			2801.97
17		Electronics		500			400500			400000
 
--------------------------------------------------------------------

? What would you like to view? Create New Department
? Add New Department Outdoor
?  Add OverHead Costs? 0
New Department: Outdoor
Overhead Cost:0
New Department and Overhead Cost successfully created!
---------------------------------------------------------------------
? What would you like to view? Update Overhead Cost
? Check for the Department you want to update the overhead cost Outdoor
? Add Overhead Cost? 500
 OverHead Cost: 500
OverHead Cost successfully added to :Outdoor
---------------------------------------------------------------------
Contributors:

Silver Ehiwario GitHub

Technologies Used:

Javascript
nodeJS
MySQL
npm packages:
mysql
inquirer
cli-table
License

Copyright 2017 University of Texas, Houston Coding Bootcamp - Silver Ehiwario
