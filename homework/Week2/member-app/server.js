const express = require("express");
let members = require("./members"); 
const moment = require("moment");   
const uuid = require("uuid");
const ejs = require("ejs");

const app = express();

//set the view engine
app.set("view engine", "ejs");

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//use template views for the case of full server side application!!!!!!!!!!
app.get("/", (req,res) => {
    res.render("index", {title: "Member App", members: members});
});

//static folder "public"
app.use(express.static("./public"));

//try the "moment" package
// app.use("/", (req,res,next) => {
//     console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format("L LTS")}`);
//     next();
// });


app.get("/api/members", (req,res) => {
    res.json(members);
});

//get single member
app.get("/api/members/:id", (req,res) => {
    let data = members.filter(member => member.id == req.params.id);
    if (data.length > 0 ){
        res.json(data); 
    }else{
        res.status(400).send("member does not exist..")
    }
});

//create member
app.post("/api/members", (req,res) => {
    const newName = members.filter(member => member.name == req.body.name);
    const newEmail = members.filter(member => member.email == req.body.email);

    if (newName.length > 0 && newEmail.length > 0){
        res.status(400).send("These name and email already exists.. Please try again!");
    }else if (newName.length > 0){
        res.status(400).send("This name already exists.. Please try again!");
    }else if (newEmail.length > 0){
        res.status(400).send("This email already exists.. Please try again!");
    }else{
        const newMember = {
            id: uuid.v4(),
            name: req.body.name,
            email: req.body.email,
            status: "active"
        }
        members.push(newMember);
        res.redirect("/");
    };
});

//update member
app.put("/api/members/:id", (req,res) => {
    const found = members.some(member => member.id == req.params.id);

    if (found){
        members.forEach(member => {
            if (member.id == req.params.id){
                if (req.body.name !== member.name){
                    const newName = members.filter(member => member.name == req.body.name);
                    if (newName.length > 0){
                        res.status(400).send("This name already exists.. Please try again!");
                    }else{
                        member.name = req.body.name;
                    }
                };
                if (req.body.email !== member.email){
                    const newEmail = members.filter(member => member.email == req.body.email);
                    if (newEmail.length > 0){
                        res.status(400).send("This email already exists.. Please try again!");
                    }else{
                        member.email = req.body.email;
                    }
                }
                res.json({msg: "OK!! Member Uptaded..", member})
            }
        });
    }else{
        res.send("Sorry!!There is no such member..")
    };
});

app.delete("/api/members/:id", (req,res) => {
    const found = members.some(member => member.id == req.params.id);
    if (found){
        members = members.filter(member => member.id !== req.params.id);
        res.json({msg: "OK!! Member deleted.." ,members})
    }else{
        res.send("Sory!! There is no such member..");
    }
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});