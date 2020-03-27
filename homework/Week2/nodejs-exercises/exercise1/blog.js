const express = require("express");
const app = express();
let port = 3000;
const fs = require("fs");

app.get("/", (req,res) => res.send("Welcome to my first Blog!!"))

app.use(express.json()); 

//handle the Posts
app.post('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    fs.writeFileSync(req.body.title + ".txt", req.body.content); 
    res.end("ok");
});

//handle the Puts
app.put('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    if (fs.existsSync(req.body.title + ".txt")) {
      fs.writeFileSync(req.body.title + ".txt", req.body.content);
      res.end('ok')
    }
    else {
      res.end('post does not exist');
    };
});

//handle the Deletes
app.delete('/blogs/:title' , (req, res) => {
    // How to get the tilte from the url parameters?
    console.log(req.param("title"));
    fs.unlinkSync(req.param("title") + ".txt");
    res.end("ok");
});

//send Posts
app.get('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    res.sendfile(req.param("title") + ".txt");
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});