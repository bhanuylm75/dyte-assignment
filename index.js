import express from "express";
//import tasks from "./routes/tasks.js"
import mongoose from "mongoose";
import logs from "./models/logs.js";
//import news from "./models/new.js"

const app=express()
app.use(express.json())
mongoose.connect("mongodb+srv://bhanu:bhanu@cluster0.rqxm9dx.mongodb.net/task?retryWrites=true&w=majority")

app.post("/api/post/" ,async (req,res)=>{
  console.log(req.body)
  try{
    const newlog= new logs({...req.body})
    await newlog.save()
    res.send(newlog)
  }
  catch(err){
    res.send(err)
  }

})
app.get("/api/filter/",async(req,res)=>{
  try{
    console.log(req.query)
    const response= await logs.find(JSON.stringify(req.query))
    res.send(response)

  }
  catch(err){
    res.send(err)

  }
})
app.get("/api/all/",async(req,res)=>{
  try{
    //console.log(req.query)
    const response= await logs.find()
    res.send(response)

  }
  catch(err){
    res.send(err)

  }
})

 








app.listen(3007,()=>{
  console.log("connected")
})