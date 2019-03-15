
var express=require('express');
var app=express();


bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', './app/views');           
app.set('view engine', 'ejs');           
app.use(express.static('./images')); 
var firebase = require('firebase').initializeApp({
  apiKey: "AIzaSyC-QvsU4MkUpPwRlMTjjdWbUrCN7TKSZFM",
  authDomain: "hamm-93bfc.firebaseapp.com",
  databaseURL: "https://hamm-93bfc.firebaseio.com",
  projectId: "hamm-93bfc",
  storageBucket: "hamm-93bfc.appspot.com",
  messagingSenderId: "294884813349"
})

app.get('/',function(req,res){
  console.log("mainpage goooo ");
  res.render('login')

   
  });
  app.get('/page',function(req,res){
    console.log("mainpage gogggggg ");
    res.render('page')
  
     
    });
  app.get('/index',function(req,res){
    console.log("mainpage go ");
    res.render('index')
  
     
    });
  

var server = app.listen(process.env.PORT || 13146, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);

  
});
