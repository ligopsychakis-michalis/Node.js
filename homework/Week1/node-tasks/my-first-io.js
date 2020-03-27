"use strict";
const fs = require("fs");

let file = fs.readFileSync(process.argv[2]);
file = file.toString();
let arr = file.split("\n");
console.log(arr.length);