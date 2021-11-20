import express from 'express';
var controller = require('../controllers/controller');

var router = express.Router();

router.get('/', controller.textSearchPlace)

router.post('/like', controller.likeAPlace)

router.post('/createATag', controller.createATag)

export = router