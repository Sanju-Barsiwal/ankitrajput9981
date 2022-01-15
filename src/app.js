const express  = require("express");
const app = express();
const path = require("path");
const Order = require("../src/modules/order");
require("./db/conn");
//const Register = require("./modules/order");
const port  =process.env.PORT || 3000;



const static_path =path.join(__dirname,"../views");
app.use((express.static(static_path )));

app.use(express.json());


app.use(express.urlencoded({extended: false}));
app.set("view engine","hbs");
// //app.set("views",static_path);
app.get("/",(req,res)=>{
    res.render("index");
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
app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/booktable",(req,res)=>{
    res.render("booktable");
});


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

app.listen(port,()=>{
    console.log(`server is running at port np ${port}`);
});

















