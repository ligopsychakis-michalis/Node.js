const fetch = require("node-fetch");

async function chuckNorris(){
    const jokes = await fetch("https://api.icndb.com/jokes/random");
    const joke = await jokes.json();
    console.log(joke);
    console.log(joke.value.joke);
}

chuckNorris();