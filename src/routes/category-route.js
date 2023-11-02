'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/category-controller');
const identityService = require('../services/identity-service');

router.get('/', controller.get);
router.get('/:id', controller.findById);

router.post('/', identityService.isAdmin, controller.post);
router.put('/:id', identityService.isAdmin, controller.put);
router.delete('/:id', identityService.isAdmin, controller.delete);

module.exports = router;
