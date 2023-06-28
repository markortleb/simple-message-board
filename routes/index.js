const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const getDatetime = () => {
    return (new Date()).toISOString().split('.')[0].replace('T', ' ')
};

const messages = [
    {
        text: "Hi there!",
        user: "Carl",
        added: getDatetime()
    },
    {
        text: "Hello World!",
        user: "Frank",
        added: getDatetime()
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
    const userName = req.body.userName;
    const message = req.body.message;
    messages.push(
        {
            text: message,
            user: userName,
            added: getDatetime()
        }
    );
    res.redirect('/');
});


module.exports = router;
