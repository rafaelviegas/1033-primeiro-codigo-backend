'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const gameController = require('../controllers/game-controller');
const identityService = require('../services/identity-service');


router.get('/:id',controller.findById);
router.post('/', controller.post);
router.post('/login', controller.login);
router.put('/:id', identityService.authorize, controller.put);
router.get('/:userId/recommendations', identityService.authorize, gameController.getRecommendationsByUserId);

module.exports = router;
