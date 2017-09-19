DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;


CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "department_name" which cannot contain null --
  department_name VARCHAR(50) NOT NULL,
  -- Makes a numeric column called "price" --
  price DECIMAL(8, 2) NOT NULL,
  -- Makes an numeric column called "stock-quantity" --
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);



-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Milk", "Dairy" , 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread", "Bakery", 5.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rice", "Grocery", 7.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza", "Deli", 9.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chips", "Bakery", 2.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Wine", "Wine", 3.55, 140);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Apples", "Fruits and Vegetables", 1.47, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "Fruits and Vegetables", 2.47, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deep fry pan", "Cookware", 9.97, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chefstyle Blender", "Appliances", 10.97, 100);

USE bamazonDB;

CREATE TABLE departments(
DepartmentId int AUTO_INCREMENT,
PRIMARY KEY(DepartmentId),
department_name varchar(50) NOT NULL,
over_head_costs DECIMAL(11,2) NOT NULL
);

-- Creates new rows containing data in all named columns --
INSERT INTO departments (department_name, over_head_costs)
VALUES ("Dairy", 100);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Bakery", 200);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Grocery", 250);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Deli", 280);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Wine", 100);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Fruits and Vegetables", 150);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Cookware", 200);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Appliances", 150);


ALTER TABLE products add column product_sales  DECIMAL(11,2) NOT NULL


DELETE FROM departments WHERE DepartmentId  BETWEEN 9 AND 16;

SELECT * from products

SELECT * from departments

SELECT departments.DepartmentId , products.department_name, departments.over_head_costs,SUM(products.product_sales) AS Total_Product_Sales, (departments.over_head_costs - SUM(products.product_sales)) AS Total_Profit

	   FROM products INNER JOIN departments ON (products.department_name = departments.department_name) GROUP BY department_name 
              ORDER BY DepartmentId ASC

