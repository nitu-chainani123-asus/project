const students = [
    {
        name: "Aarav",
        age: 20,
        marks: 85
    },
    {
        name: "Priya",
        age: 21,
        marks: 72
    },
    {
        name: "Rahul",
        age: 20,
        marks: 65
    },
    {
        name: "Sneha",
        age: 22,
        marks: 91
    },
    {
        name: "Karan",
        age: 21,
        marks: 58
    }
];

// 1. Display all students
console.log("All Students:");
console.log(students);

// 2. Students who scored more than 70
const highScorers = students.filter(student => student.marks > 70);

console.log("\nStudents scoring more than 70:");
console.log(highScorers);

// 3. Find a student by name
const student = students.find(student => student.name === "Sneha");

console.log("\nStudent named Sneha:");
console.log(student);

// 4. Create an array containing only student names
const studentNames = students.map(student => student.name);

console.log("\nStudent Names:");
console.log(studentNames);

// 5. Calculate average marks
const totalMarks = students.reduce((total, student) => total + student.marks, 0);

const averageMarks = totalMarks / students.length;

console.log("\nAverage Marks:");
console.log(averageMarks);