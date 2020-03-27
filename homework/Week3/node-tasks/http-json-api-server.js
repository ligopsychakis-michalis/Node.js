const express = require("express");

const app = express();

app.get("/api/parsetime", (req,res) => {
    const date = new Date(req.query.iso);
    const data = { 
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };
    res.send(data);    
});

app.get("/api/unixtime", (req,res) => {
    const date = new Date(req.query.iso);
    const data = {
        "unixtime": date.getTime()
    };
    res.send(data);
});

const port = process.argv[0];
app.listen(3000, () => console.log(`Server is running on port ${port}`));