const express = require("express");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index");
});

app.post("/send", (req,res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}<p>
    `;

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "email", // generated ethereal user
      pass: "password" // generated ethereal password
    },
    //tls:{ rejectUnauthorised:false }
  });

  let mailOptions = {
    from: '"Nodemailer Contact" <email>', // sender address
    to: "email", // list of receivers
    subject: "Nodemailer Test ", // Subject line
    text: "Hello from node app!!", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error,info) => {
    if (error){ return console.log(error) };

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("success", {msg: "Email has been send"});
  });
});

app.listen(3000, () => console.log("Server running on port 3000..."));



