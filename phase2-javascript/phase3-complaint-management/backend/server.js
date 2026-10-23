
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();
const { validateComplaint } = require("./validation");
const app = express();

app.use(cors());
app.use(express.json());

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

    console.log("MySQL database connected successfully");
});

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Complaint Management System API is running"
    });
});

// Get all complaints
app.get("/complaints", (req, res) => {
    connection.query(
        "SELECT * FROM complaints",
        (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Failed to fetch complaints"
                });
            }

            res.json(results);
        }
    );
});

// Get one complaint
app.get("/complaints/:id", (req, res) => {
    const { id } = req.params;

    connection.query(
        "SELECT * FROM complaints WHERE id = ?",
        [id],
        (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Failed to fetch complaint"
                });
            }

            if (results.length === 0) {
                return res.status(404).json({
                    message: "Complaint not found"
                });
            }

            res.json(results[0]);
        }
    );
});

 // Submit a complaint
app.post("/complaints", (req, res) => {
    const { user_id, title, description, category } = req.body;

    const validationError = validateComplaint({
        user_id,
        title,
        description,
        category
    });

    if (validationError) {
        return res.status(400).json({
            message: validationError
        });
    }

    

    

    const sql = `
        INSERT INTO complaints (user_id, title, description, category)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [user_id, title.trim(), description.trim(), category],
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Failed to submit complaint"
                });
            }

            res.status(201).json({
                message: "Complaint submitted successfully",
                id: result.insertId
            });
        }
    );
});

// Update complaint status
app.put("/complaints/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["Pending", "In Progress", "Resolved"];

    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            message: "Invalid complaint status"
        });
    }

    connection.query(
        "UPDATE complaints SET status = ? WHERE id = ?",
        [status, id],
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Failed to update complaint"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Complaint not found"
                });
            }

            res.json({
                message: "Complaint status updated successfully"
            });
        }
    );
});

// Delete a complaint
app.delete("/complaints/:id", (req, res) => {
    const { id } = req.params;

    connection.query(
        "DELETE FROM complaints WHERE id = ?",
        [id],
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Failed to delete complaint"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Complaint not found"
                });
            }

            res.json({
                message: "Complaint deleted successfully"
            });
        }
    );
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

