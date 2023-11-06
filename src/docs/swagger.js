'use strict';

const getCategories = require('./categories.swagger');
const getCategoryById = require('./get.category.swagger');
const postCategory = require('./post.category.swagger.js');
const putCategory = require('./put.category.swagger.js');
const deleteCategory = require('./delete.category.swagger');

const getGames = require('./get.games.swagger');
const getGameById = require('./get.game.swagger');
const postGame = require('./post.game.swagger');
const putGame = require('./put.game.swagger');
const deleteGame = require('./delete.game.swagger');

const postUser = require('./post.user.swagger');
const putUser = require('./put.user.swagger');
const loginUser = require('./login.user.swagger');

const getRatingById = require('./get.rating.swagger');
const postRating = require('./post.rating.swagger');
const putRating = require('./put.rating.swagger');
const getRatingsByGameId = require('./get.game.ratings.swagger');

module.exports = {
    openapi: "3.0.3",
    info: {
      title: "Best Browser Games",
      description: "API's Best Browser Games.", 
      version: "1.0.0"
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    },
    tags: [
        {
            name: 'Categories'
        },
        {
            name: 'Games'
        },
        {
            name: 'Users'
        },
        {
            name: 'Ratings'
        }        
    ],
    paths: {
        "/categories": {
            "get": getCategories
        },
        "/categories/{categoryId} ": {
            "get": getCategoryById
        },
        "/categories ": {
            "post": postCategory
        },
        "/categories/{categoryId}  ": {
            "put": putCategory
        },
        "/categories/{categoryId}   ": {
            "delete": deleteCategory
        },
        "/games": {
            "get": getGames
        },
        "/games/{gameId}": {
            "get": getGameById
        },
        "/games ": {
            "post": postGame
        },
        "/games/{gameId} ": {
            "put": putGame
        },
        "/games/{gameId}  ": {
            "delete": deleteGame
        },
        "/users": {
            "post": postUser
        },
        "/users/{userId} ": {
            "put": putUser
        },
        "/users/login": {
            "post": loginUser
        },
        "/ratings/{ratingId}": {
            "get": getRatingById
        },     
        "/ratings": {
            "post": postRating
        },
        "/ratings/{ratingId} ": {
            "put": putRating
        }, 
        "/games/{gameId}/ratings": {
            "get": getRatingsByGameId
        },        
    }
};
