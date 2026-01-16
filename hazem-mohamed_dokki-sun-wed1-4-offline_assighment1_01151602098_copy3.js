//part three
const mysql2 = require("mysql2");
const db = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "store",
});

const express = require("express");
const app = express();
app.use(express.json());

//question 1
// const tableSuppliers = `create table suppliers(
//     supplier_id int primary key auto_increment,
//     supplier_name varchar(250),
//     contact_number varchar(250)
//     );`
//     db.execute(tableSuppliers , (err,result)=>{
//         if (err) {
//             console.log("server error" , err);

//         }
//     })
//     const tableProducts = `create table products(
//     product_id int primary key auto_increment,
//     product_name varchar(250),
//     product_price decimal(10,2),
//     stock_quantity int,
//     supplier_id int ,
//     foreign key (supplier_id) references suppliers(supplier_id)

// );`
// db.execute(tableProducts , (err,result)=>{
//     if (err) {
//         console.log("server error" , err);

//     }
// })
// const tableSales = `create table sales(
//     sale_id int primary key auto_increment,
//     sale_date date,
//     quantity_sold int,
//     product_id int ,
//     foreign key (product_id) references products(product_id));`;
// db.execute(tableSales , (err , result)=>{
//     if (err) {
//         console.log(err);

//     }
// })

//question 2
// const addCategory = `alter table products add category varchar(250)`
// db.execute(addCategory , (err,result)=>{
//     if (err) {
//         console.log("server error" , err);
//     }
// })

//question 3
// const removeCategory = `alter table products drop column category `
// db.execute(removeCategory , (err,result)=>{
//     if (err) {
//         console.log("server error" , err);
//     }
// })

//question 4
// const modify = `alter table suppliers modify contact_number varchar(15) `
// db.execute(modify , (err,result)=>{
//     if (err) {
//         console.log("server error" , err);
//     }
// })

//question 5
// const modifyNotNull = `alter table products modify product_name varchar(250)  not null`
// db.execute(modifyNotNull , (err,result)=>{
//     if (err) {
//         console.log("server error" , err);
//     }
// })
//question 6
//a
// const insertSupplier = `insert into suppliers (supplier_name , contact_number) values (?,?)`;
// db.execute(insertSupplier, ["fresh", "01254455865"], (err, result) => {
//   if (err) {
//     console.log("server error", err);
//   }
// });
// //b
// const insertProducts = `insert into products (product_name , product_price , stock_quantity , supplier_id) values (?,? ,?,?),(?,? ,?,?),(?,? ,?,?)`;
// db.execute(insertProducts, ["milk", "15" , "50",4 , "bread", "10" , "30",4 , "egs", "20" , "40" , 4], (err, result) => {
//   if (err) {
//     console.log("server error", err);
//   }
// });
// //c
// const insertSale= `insert into sales (quantity_sold , product_id , sale_date) values (?,?,?) `
// db.execute(insertSale , [2 , 1 , "2025-05-20"] , (err , result)=>{
//     if (err) {
//         console.log(err);
        
//     }
// })

// //question 7
// const updatePrice = `update products set product_price=20 where product_name='bread'`
// db.execute(updatePrice)

//question 8
// const deleteRow = `delete from products where product_name='egs'`
// db.execute(deleteRow , (err,result)=>{
//     if (err) {
//         console.log(err)
//     }
// })

//qustion 9
// const totalQuantity = `SELECT product_name , SUM(quantity_sold) FROM products LEFT JOIN sales on products.product_id=sales.product_id GROUP BY products.product_id`
// db.execute(totalQuantity , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })

//question 10
// const highStock = `SELECT product_name , stock_quantity from products ORDER by stock_quantity DESC LIMIT 1`
// db.execute(highStock , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })

// //question 11
// const prefix = `SELECT supplier_name from suppliers WHERE supplier_name LIKE 'f%'`
// db.execute(prefix , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })
//question 12
// const notSaled = `SELECT product_name,quantity_sold FROM products left JOIN sales on products.product_id=sales.sale_id WHERE quantity_sold is null`
// db.execute(notSaled , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })

//question 13
// const query = `select product_name , sale_date from products JOIN sales on products.product_id=sales.product_id`
// db.execute(query , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })
//question 14
// const addManager = `CREATE user 'manager'@'localhost' 
// GRANT SELECT , INSERT , DELETE on store.* to 'manager'@'localhost'';`
// db.execute(addManager , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })
//question 15
// const revokeUpdate = `revoke update on store.* from 'manager'@'localhost'`
// db.execute(revokeUpdate , (err , result)=>{
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// })
//question 16
const grantDelete = `grant delete on store.products to 'manager'@'localhost'`
db.execute(revokeUpdate , (err , result)=>{
  if (err) { 
    console.log(err)
  }
  
  console.log(result) 
})









app.listen(3000, () => {
  console.log("Server is running:::::::::🚗");
});
