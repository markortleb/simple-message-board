const express = require('express');
const router = express.Router();


router.get('/new', function(req, res, next) {
    res.render(
        'newMessage',
        {
        }
    );
    next();
});


module.exports = router;
