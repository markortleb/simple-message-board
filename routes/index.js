const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const messages = [
    {
        text: "Hi there!",
        user: "Carl",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Frank",
        added: new Date()
    }
];

router.get('/', function(req, res, next) {
    res.render(
        'index',
        {
            title: 'Simple Message Board',
            messages: messages
        }
    );
    next();
});


router.post('/new', urlencodedParser, function(req, res, next) {
    // const userName = req.body.userName;

    console.log(req.body.userName);
    // const message = req.body.messageText;
    // messages.push({ text: message, user: userName, added: new Date() });
    res.redirect('/');
});


module.exports = router;
