const express = require('express')
const bodyParser = require('body-parser');
const app=express();
app.use(express.static('public'));
//Respond to req
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
//listen Module
app.listen(3000,function(){
  console.log("server Started!");
});
