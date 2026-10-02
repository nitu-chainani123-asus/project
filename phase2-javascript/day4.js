const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect((error) => {
    if (error) {
        console.error("Database connection failed:", error);
        return;
    }

    console.log("MySQL database connected successfully!");

    connection.query("SELECT * FROM students", (error, results) => {
        if (error) {
            console.error("Query failed:", error);
            return;
        }

        console.log("Students:");
        console.log(results);
    });
});