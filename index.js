const express = require('express')
const bodyParser = require('body-parser');
const app=express();
//Respond to req
app.get("/",function(req,res){
  
});
//listen Module
app.listen(3000,function(){
  console.log("server Started!");
});
