const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");
const {v4: uuidv4} = require("uuid");
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "notes_app",
    password : "Mak6u;y:z4c23M"
});

//Creating Table Executing once only
// let q = "CREATE TABLE notes (id VARCHAR(40) PRIMARY KEY, title VARCHAR(30) NOT NULL, content VARCHAR(1000) NOT NULL)";
// try {
//     connection.query(q, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

//--------------------------------------------------------------------------------------
//Generating fake data statically by myself
// let q = "INSERT INTO notes (id, title, content) VALUES ?";

// let notes = [
//     [
//         "550e8400-e29b-41d4-a716-446655440000",
//         "JavaScript Basics",
//         "Learn variables, functions, and loops."
//     ],
//     [
//         "550e8401-e29b-41d4-a716-446655440001",
//         "Node.js Fundamentals",
//         "Understand event-driven architecture."
//     ],
//     [
//         "550e8402-e29b-41d4-a716-446655440002",
//         "Express.js Routing",
//         "Learn how to create routes in Express."
//     ],
//     [
//         "550e8403-e29b-41d4-a716-446655440003",
//         "Middleware in Express",
//         "Use middleware functions to modify request objects."
//     ],
//     [
//         "550e8404-e29b-41d4-a716-446655440004",
//         "EJS Templating",
//         "Use EJS to render dynamic HTML content."
//     ],
//     [
//         "550e8405-e29b-41d4-a716-446655440005",
//         "CRUD Operations",
//         "Create, Read, Update, and Delete in Express."
//     ],
//     [
//         "550e8406-e29b-41d4-a716-446655440006",
//         "REST API Concepts",
//         "Learn RESTful principles for API development."
//     ],
//     [
//         "550e8407-e29b-41d4-a716-446655440007",
//         "MongoDB Basics",
//         "Understand document-based NoSQL databases."
//     ],
//     [
//         "550e8408-e29b-41d4-a716-446655440008",
//         "Authentication with JWT",
//         "Secure applications using JSON Web Tokens."
//     ],
//     [
//         "550e8409-e29b-41d4-a716-446655440009",
//         "Asynchronous JavaScript",
//         "Learn promises and async/await for handling async operations."
//     ]
// ];

// try {
//     connection.query(q, [notes], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// }
// catch(err){
//     console.log(err);
// }
//-------------------------------------------------------------------------------------


app.get("/notes", (req, res) => {
    let q = "SELECT * FROM notes";
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let notes = result;
            // console.log(notes);
            res.render("index.ejs", { notes });
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occured in DB");
    }
})

app.get("/notes/:id", (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM notes WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let note = result[0];
            // console.log(note);
            res.render("show.ejs", { note });
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occured in DB");
    }
    // let note = notes.find((note) => id === note.id);
    // res.render("show.ejs", { note });
})

app.get("/notes/:id/edit", (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM notes WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let note = result[0];
            // console.log(note);
            res.render("edit.ejs", { note });
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occured in DB");
    }

    // let note = notes.find((note) => id === note.id);
    // res.render("edit.ejs", { note });
})

app.post("/notes/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/notes", (req, res) => {
    let { title, content } = req.body;
    let id = uuidv4();

    let q = `INSERT INTO notes (id, title, content) VALUES ("${id}", "${title}", "${content}")`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(result);
            res.redirect("/notes");
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occured in DB");
    }

    // notes.push({ id, title, content });
    // res.redirect("/notes");
})

app.patch("/notes/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;

    let q = `UPDATE notes SET content="${newContent}" WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            // console.log(note);
            res.redirect("/notes");
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occured in DB");
    }

    // let note = notes.find((note) => id === note.id);
    
    // note.content = newContent;
    // res.redirect("/notes");
})

app.delete("/notes/:id", (req, res) => {
    let { id } = req.params;

    let q = `DELETE FROM notes WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.redirect("/notes");
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occured in DB");
    }

    // notes = notes.filter((note) => id !== note.id);
    // res.redirect("/notes");
})

app.get("*", (req, res) => {
    res.send("This route is not set yet.");
})

app.listen(port, () => {
    console.log(`Server is listning on port ${port}`);
})