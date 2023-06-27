const express = require('express');
const router = express.Router();


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


module.exports = router;
