// import express from "express"
// import * as fs from "fs"
// import {path} from "path"

const express = require("express")
const fs = require("fs")
const path = require("path");

const dirPath = path.join(__dirname,"timestamps")
const app = express();
app.use(express.static("timestamps"))
app.use(express.json());

app.get("/static",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3);
    let data = `Last modiefied timestamp is ${dateString}`
    fs.writeFileSync(`${dirPath}/date-time.txt`,data,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File created successfully")
        }
    })
    res.sendFile(path.join(__dirname,"timestamps/date-time.txt"))
})
app.listen(9000,()=>console.log(`server started in localhost:9000`))