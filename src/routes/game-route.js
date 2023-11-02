'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/game-controller');
const ratingController = require('../controllers/rating-controller');
const identityService = require('../services/identity-service');

router.get('/', controller.get);
router.get('/:id', controller.findById);

router.get('/:id/ratings', ratingController.findByGameId);

router.post('/', identityService.isAdmin, controller.post);
router.put('/:id', identityService.isAdmin, controller.put);
router.delete('/:id', identityService.isAdmin, controller.delete);

module.exports = router;
