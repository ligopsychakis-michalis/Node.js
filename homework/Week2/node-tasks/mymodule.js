module.exports = function (dirname, ext, cb){

    const fs = require("fs");
    const path = require("path");

    fs.readdir(path.dirname(dirname), (err,list) => {
        if (err){
            return console.log(err);
        }else{
            list.forEach(file => {
                console.log(file);
                if (path.extname(file) == "." + path.extname(ext)) { console.log(file); } 
            });
        };    
    });
};
