const express = require("express");
const ejs = require("ejs");
const fetch = require("node-fetch");
const APIKEY = require('./sources/keys.json').API_KEY;

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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
            if(data.cod !== 200){
                res.render("not-found", { weatherText: "City is not found!" }); 
            }else{
                res.render("weather", { data: data });
            };
        });
});

//create server
app.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
});
