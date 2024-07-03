const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

// Paths for static files, templates, and partials
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.json());




// routing
app.get("/",(req,res)=>{
    res.send("hello world");
})










app.listen(port,()=>{
    console.log(`listent to you on port ${port} `);
})
