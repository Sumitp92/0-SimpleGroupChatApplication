const express = require('express') ; 
const bodyParser = require('body-parser') ; 
const fs = require('fs') ; 

const router = express.Router() ; 

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login' , (req ,res , next) =>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">
        <input id="username" type="text" name="username">
        <button type="submit">Login</button>
        </form>
    `);
})

module.exports = router ; 