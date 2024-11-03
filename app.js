const express =require('express') ;

const bodyParser = require('body-parser') ;

const app = express() ; 

const HomePage = require('./routes/home') ; 
const LoginPage = require('./routes/login') ; 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(HomePage) ;
app.use(LoginPage) ;

app.listen(3000) ; 

