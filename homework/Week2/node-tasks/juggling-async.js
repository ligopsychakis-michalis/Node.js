const http = require("http");

http.get(process.argv[0], (response) => {
    response.on("data", data => { 
        console.log(data.toString());
        http.get(process.argv[1], response => {
            response.on("data", data =>{
                console.log(data.toString());
                http.get(process.argv[1], response => {
                    response.on("data", data =>{
                        console.log(data.toString());
                    });
                });
            });
        });
    });
});

