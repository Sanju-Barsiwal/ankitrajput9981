const express  = require("express");
const app = express();
const path = require("path");
const Order = require("../src/modules/order");
const Contact = require("../src/modules/contact");
require("./db/conn");
//const Register = require("./modules/order");
const port  =process.env.PORT || 3000;




// start
const {MongoClient} = require('mongodb');
const { Collection } = require("mongoose");
const url = 'mongodb://localhost/27017';
const databaseName = "yummydata"
const client = new MongoClient(url);

// end

const static_path =path.join(__dirname,"../views");
app.use((express.static(static_path )));
app.use(express.json());


app.use(express.urlencoded({extended: false}));
app.set("view engine","ejs");
app.set("views",static_path);


app.get("/",(req,res)=>{
    // res.render("index");
    Order.find({}, function(err, order) {
        res.render("index",{order: order});
    })
});


app.get("/blog",(req,res)=>{
    res.render("blog");
});
app.get("/menu",(req,res)=>{
    res.render("menu");
});
app.get("/indx",(req,res)=>{
    res.render("indx");
});
app.get("/store",(req,res)=>{
    res.render("store");
});
app.get("/about",(req,res)=>{
    res.render("about");
});


app.get("/contact1",(req,res)=>{
    res.render("contact1");
});

app.get("/booktable",(req,res)=>{
    res.render("booktable");
});


app.get("/register", (req, res) =>{
    res.render("register");
})

app.get("/login", (req, res) =>{
    res.render("login");
})

app.post("",async(req,res)=>{
   try{
       const addingOrderRecord = new Order(req.body)
       console.log(req.body);
       addingOrderRecord.save();
       res.redirect("/");
   } catch(err){
       res.send(400).send(err);
   }
});


app.post("/contact1",async(req,res)=>{
    try{
        const addingcontactData = new Contact(req.body)
        console.log(req.body);
        addingcontactData.save();
        res.redirect("/");
    } catch(err){
        res.send(err);
    }
 });
// start

// async function getData()
// {
//     let result = await client.connect();
//     db=result.db(databaseName);
//     collection=db.collection('contects');
//     let data=await collection.find({}).toArray();
//    console.log(data);
// }

// getData();


app.listen(port,()=>{
    console.log(`server is running at port np ${port}`);
});

















