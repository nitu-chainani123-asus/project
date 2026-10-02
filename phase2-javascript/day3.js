const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nata20@MYSQL",
    database: "internship_db"
});

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Express server is working" });
});

app.get("/students", (req, res) => {
    connection.query("SELECT * FROM students", (error, results) => {
        if (error) {
            console.error("Query failed:", error);
            return res.status(500).json({
                message: "Database query failed"
            });
        }

        res.json(results);
    });
});

app.post("/students", (req, res) => {
    const student = req.body;

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

app.listen(3000, () => {
    console.log("Express server running on http://localhost:3000");
});