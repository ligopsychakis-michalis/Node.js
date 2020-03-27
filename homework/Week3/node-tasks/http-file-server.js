const http = require('http')
const fs = require("fs");

const port = process.argv[0];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    fs.createReadStream("./text.txt").pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});