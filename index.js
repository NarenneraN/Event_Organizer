const express = require('express')
const bodyParser = require('body-parser');
const app=express();
app.use(express.static('public'));
//To parse data from html forms
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
//Respond to req
var event_name=['Empty Event'];
var event_desc=['No Events To Be Displayed😪😪! Add event below to see']
var date=['0'];
var time=['0'];
app.get("/",function(req,res){
  res.render('index',{
    tot_events:event_name.length,
    event_name:event_name,
    event_desc:event_desc,
    date:date,
    time:time
  });
});
//listen Module
app.listen(3000,function(){
  console.log("server Started!");
});
app.post("/",function(req,res){
var event_name_indiv=req.body.add_event_name;
var event_desc_indiv= req.body.add_event_desc;
var date_time_event = req.body.date_time_event;
var date_indiv = date_time_event.split('T')[0];
var time_indiv=date_time_event.split('T')[1];
// res.write(`${event_name}<br>${event_desc}<br>${date}-----${time}`);
// res.send();
event_name.push(event_name_indiv);
event_desc.push(event_desc_indiv);
date.push(date_indiv);
time.push(time_indiv);
res.redirect('/');
});
