const Handlebars = require("handlebars")

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

const subject = subjects[Math.round(Math.random() * 7)];
const punchline = punchlines[Math.round(Math.random() * 7)];

const phrase = "{{subject}} is great to {{punchline}}";
const data = {
    "subject": subject,
    "punchline": punchline
};
const  template = Handlebars.compile(phrase);

console.log(template(data));