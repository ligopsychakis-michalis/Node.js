"use strict";
const fs = require("fs");

try{
    fs.readFile(process.argv[2], (err,data) => {
        if (process.argv[2]){
            data = process.argv[2];
            data = data.toString();
            let arr = data.split("\n");
            console.log(arr.length); 
        }else{ throw new Error(err) }     
    });
}catch(err){
    console.log(err);
}    
    
