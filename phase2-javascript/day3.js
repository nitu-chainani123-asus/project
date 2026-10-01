const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Express server is working" });
});

app.get("/students", (req, res) => {
    const students = [
        { name: "Aarav", marks: 85 },
        { name: "Sneha", marks: 91 }
    ];

    res.json(students);
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