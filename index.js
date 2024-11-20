//This is the code which connects the HTTP server to the Database
const express = require('express');
const { UserModel,TodoModel } = require('./db')
const app = express();
const cors = require('cors');

app.use(cors());

const jwt = require('jsonwebtoken');
const JWT_SECRET = "zoidhrnewklnfa,lsnf#$%&*64651348654";
app.get("/",(req,res)=>{
    res.redirect("http://localhost:49290");
})

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
    await UserModel.create({
        username: username,
        password: password
    })}
    catch(e){
        res.json({
            error: e
        });
    }
    res.json({
        msg: "Signed up"
    })
    
})
app.post("/signin",function (req,res){
   
})

app.post("/todo",function (req,res){

})

app.get("/todos",function (req,res){

})

// app.delete();

app.listen(3000);