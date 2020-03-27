const fetch = require("node-fetch");

async function authentication(){
    const res = await fetch("https://restapiabasicauthe-sandbox.mxapps.io/api/books", {headers: {"Authorization": "Basic YWRtaW46aHZnWDhLbFZFYQo="}});
    const data = await res.json();
    console.log(data);
}

authentication();