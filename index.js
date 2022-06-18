const express=require("express");        //imported express
const app=express();                      //initalize express
app.use(express.json());
const fs=require('fs');                   //imported file system package
const PORT=4000;

const today =new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();        //getting current date
const current_hour=today.getHours();
const current_mins=today.getMinutes();
var time = current_hour + ":" + current_mins + ":" + today.getSeconds();             //getting current time

var dateTime = date+' '+time;        //concat date and time
console.log(dateTime);

//routes
//for creating file
app.post("/createfile",(req,res)=>{
    fs.writeFile(`./task/(${date})-${current_hour}-${current_mins}.txt`, dateTime,(err,data)=>{
        console.log(req.body);
        res.send("file created");
     })
});

//for reading all files
 app.get("/allfiles",(req,res)=>{
    fs.readdir("./task",(err,data)=>{
        console.log(data);
        res.send(data);
     })
 })
 
app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
})