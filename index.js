const express= require("express")
const app= express();
const ejs=require('ejs');
const bodyParser=require("body-parser");
let allTasks=[];

// const allStudents=[{name:"Mayowa",School:"Bjs",},
//                   {name:"Matthew",School:"GGBC",}]
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    
      res.render("index",{allTasks})

})
app.post("/addtask",(req,res)=>{
    allTasks.push(req.body)
    res.redirect('/');
    console.log(allTasks)

})
app.post("/delete",(req,res)=>{
    let myIndex=req.body.ind
    let found=allTasks.filter((t,index)=>(index!=myIndex))
    allTasks=found;
    res.redirect("/")
    console.log(found)
})
app.post("/edit",(req,res)=>{
    let myIndex=parseInt(req.body.ind);
    let currentTask=allTasks[myIndex];
    console.log(allTasks);
    res.render("edit",{currentTask,myIndex})
    
})
app.post("/update",(req,res)=>{
    let current=req.body;
    allTasks[req.body.ind]=current;
    res.redirect("/")
})

app.listen(4003,()=>{
    console.log( `my app is listening at port 4003`)
})