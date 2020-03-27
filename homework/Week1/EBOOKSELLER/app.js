const express = require("express");
const stripe = require("stripe")("sk_test_fRjpPoNmKiYkgAHg70MqE0Z300z0S0D1TA");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");


const app = express();
const port = process.env.PORT || 3000;


//handlebars middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//static folder
app.use(express.static(`${__dirname}/public`));

//index route
app.get("/", (req,res) => {
    res.render("index");
});


//charge route
app.post("/charge", (req,res) => {
    const amount = 2500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(customer => stripe.charges.create({
        amount,
        description: "Web Development Ebook",
        currency: "usd",
        customer: customer.id
    })).then(charge => res.render("success"))
});

app.listen(port, () => {
    console.log("Server running on port " + port);
})