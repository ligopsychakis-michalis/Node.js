const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.post("/", (req,res) => {
    res.set("Content-Type", "text/plain");
    res.send(req.body.characters.toUpperCase());
});


const port = process.argv[0];

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});