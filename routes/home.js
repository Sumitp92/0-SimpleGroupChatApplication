const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {

    fs.readFile('chat.txt', (err, data) => {
        if (err) {
            console.log(err);
        }

        const messages = data ? data.toString().split('\n') : [];
        const formattedMessages = messages.map(message => `<br>${message}`);

        res.send(

            `${formattedMessages}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" >
            
            <input id="username" type="hidden" name="username">
            <input id="message" type="text" name="message">
            <button type="submit">Send</button>
            </form>
            `);
    })
});
router.post('/', (req, res) => {


    fs.writeFile("chat.txt", `${req.body.username}: ${req.body.message}\n`, { flag: 'a' }, (err) => {
        err ? console.log(err) : res.redirect("/")
    });
});

module.exports = router;
