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
    const { name, marks } = req.body;

    const sql = "INSERT INTO students (name, marks) VALUES (?, ?)";

    connection.query(sql, [name, marks], (error, result) => {
        if (error) {
            console.error("Insert failed:", error);
            return res.status(500).json({
                message: "Failed to add student"
            });
        }

        res.status(201).json({
            message: "Student added successfully",
            id: result.insertId
        });
    });
});
app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, marks } = req.body;

    const sql = "UPDATE students SET name = ?, marks = ? WHERE id = ?";

    connection.query(sql, [name, marks, id], (error, result) => {
        if (error) {
            console.error("Update failed:", error);
            return res.status(500).json({
                message: "Failed to update student"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student updated successfully"
        });
    });
});
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM students WHERE id = ?";

    connection.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Delete failed:", error);
            return res.status(500).json({
                message: "Failed to delete student"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully"
        });
    });
});
app.listen(3000, () => {
    console.log("Express server running on http://localhost:3000");
});