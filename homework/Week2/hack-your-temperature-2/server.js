const express = require("express");
const ejs = require("ejs");

const app = express();
const port = 3000;

//set the template view engine
app.set("view engine", "ejs");

//use middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//handle get "/"
app.get("/", (req,res) => {
    res.render("index");
});

//handle post "/weather"
app.post("/weather", (req,res) => {
    const city = req.body.cityName;
    res.send(city);
});

//create server
app.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
});
