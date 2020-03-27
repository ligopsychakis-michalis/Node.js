const net = require("net");
var strftime = require('strftime');

net.createServer(function (socket){
    socket.write(strftime("%F %H:%M"));
    socket.end();
}).listen(process.argv[0]);