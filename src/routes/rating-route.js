'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/rating-controller');


router.get('/:id', controller.findById);

router.post('/', controller.post);
router.put('/:id', controller.put);


module.exports = router;
