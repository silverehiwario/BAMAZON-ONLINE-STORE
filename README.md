# BAMAZON-ONLINE-STORE

Synopsis

This is an interactive online shopping store node app where MySQL and Node.JS are used to allow users to purchase items as a customer, view, track and update the product inventory as a manager, and track the total sales by department, add new departments and update overhead costs as a supervisor..

Bamazon Customer Portal

The Customer Portal shows the current items available for purchase, prompts the user to chose from the list of available product, and the user can specify the quantity to be purchased. The App calculates the total price and places the order if there is sufficient quantity in stock to fulfull the order. If the quantity speficied by the user is more than available stock quantity, the app indicates to the user the quantity available in stock and the user will now have the opportunity to reduce the quantity of that product or purchase a different product.







Customer Portal
---------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872106-bb1c19e0-b77e-11e7-9916-e57a71567e25.png" width="50%"></img> 

<img src="https://user-images.githubusercontent.com/27755396/31872115-cd171d16-b77e-11e7-8ca0-ff0532ed1c09.png" width="50%"></img>

---------------------------------------------------------------------

Bamazon Manager Portal

The Bamazon manager Portal allows users to view and edit the inventory of the store. The user will be prompted to choose from the following options:

<img src="https://user-images.githubusercontent.com/27755396/31872121-d8415e72-b77e-11e7-89a0-d50c79df799c.png" width="50%"></img>

Manager Options 1 & 2

The first option allows the user to see the list of products that are currently for sale, what department the item belongs to, the price of the product and how much stock is left for that product.

The second option allows the user to see a list of all inventory items that have less than 350 items in stock. If there are no products that meet this criteria, no product is listed


Bamazon Manager Portal - Options 1 & 2
---------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872129-e75b03c2-b77e-11e7-8858-979ab5dc8da4.png" width="50%"></img> 

---------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872139-f56e5176-b77e-11e7-97a2-29e84ce4b03c.png" width="50%"></img> 

---------------------------------------------------------------------


Manager Options 3 & 4

The third option allows the user to update the inventory for items less than 350 until the criteria is met. A prompt with the list of product quantity below 350 is displayed for the user to chose from. A second prompt asks how many items the user wishes to increase the quantity by.

The last option allows the user to add a new product to the inventory. Prompts ask the user for the product name, list of available department to place the new product, the price and the stock quantity.

Bamazon Manager Portal - Options 3 & 4
---------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872151-02b8ae1c-b77f-11e7-9ef0-0d8adc5172dd.png" width="50%"></img> 

<img src="https://user-images.githubusercontent.com/27755396/31872153-0af285c6-b77f-11e7-8451-c110c2c2971c.png" width="50%"></img> 

---------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872159-1665e24a-b77f-11e7-830e-80f8fbae3a85.png" width="50%"></img> 

---------------------------------------------------------------------

Bamazon Supervisor Portal

The Bamazon Supervisor Portal allows users to view the total profits of the store categorized by department, add new departments and update overhead cost.

Bamazon Supervisor Portal

<img src="https://user-images.githubusercontent.com/27755396/31872171-20e9f6d4-b77f-11e7-9602-5cb18a25638e.png" width="50%"></img> 

<img src="https://user-images.githubusercontent.com/27755396/31872176-29e20c90-b77f-11e7-954d-dff2da4ef812.png" width="50%"></img> 

--------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872187-33e6205a-b77f-11e7-8acf-7be9b3d83f60.png" width="50%"></img> 

---------------------------------------------------------------------
<img src="https://user-images.githubusercontent.com/27755396/31872189-3e94bfd4-b77f-11e7-8e12-42f65d0d978e.png" width="50%"></img> 

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
