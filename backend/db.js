
const mysql = require('mysql2/promise');



//   const db = mysql.createPool({
//   host: 'localhost',
//   user: 'prabisha', // Replace with your MySQL username
//   password: 'Prabisha@2024!', // Replace with your MySQL password
//    database: 'prabisha_itsm', // Replace with your MySQL database name
//    waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0, 
// });   

 
 //Create a connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'prabisha_gym',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0, 
}); 

// Check if the database connection pool is successful
db.getConnection()
  .then(connection => {
    console.log('database chal gya !');
    connection.release(); // Release the connection back to the pool
  })
  .catch(error => {
    console.error('MySQL nhi chala:', error.message);
  });

module.exports = db;
