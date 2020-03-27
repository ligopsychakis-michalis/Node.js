
const fs = require("fs");
const path = require("path");


fs.readdir(path.dirname(process.argv[1]), (err,list) => {
    if (list){
        list.forEach((file) => {
            if (path.extname(file) == `.${process.argv[2]}`){
                console.log(file);
            };
        });
    }else { console.log(err) };    
});
   