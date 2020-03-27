const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("hello from backend to frontend!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
});
