const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const User = require("./models/usermessage")
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
app.use(express.urlencoded({extended:false}))

// Serve Bootstrap and jQuery files
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.json());

// Routing
app.get("/", (req, res) => {
    res.render("index");
});
app.post("/contact", async(req, res) => {
    try{
        // res.send(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(201).render("index");

    }catch(err){
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Listening to you on port ${port}`);
});
