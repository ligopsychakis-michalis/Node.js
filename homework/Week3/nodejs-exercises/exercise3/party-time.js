const fetch = require("node-fetch");

async function partyTime(){
    const res = await fetch("https://reservation100-sandbox.mxapps.io/api/reservations", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: {
            "name":"Chuck Norris",
            "numberOfPeople": 1000000
        }
    });
    const data = await res.json();
    console.log(data);
}

partyTime();