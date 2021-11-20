import express from 'express';
var controller = require('../controllers/controller');

var router = express.Router();

router.get('/', controller.textSearchPlace)

router.get('/about', function (req, res) {
    res.send('About this wiki');
})

export = router