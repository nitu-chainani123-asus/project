const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/students" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const students = [
            { name: "Aarav", marks: 85 },
            { name: "Sneha", marks: 91 }
        ];

        res.end(JSON.stringify(students));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});