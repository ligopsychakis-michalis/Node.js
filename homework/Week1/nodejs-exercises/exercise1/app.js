"use strict";

const padLeft = require("./andrejs-awesome-function.js");
const numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(num => console.log(padLeft(num, 4, " ")));


