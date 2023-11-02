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

module.exports = {
    openapi: "3.0.3",
    info: {
      title: "Best Browser Games",
      description: "API's Best Browser Games.", 
      version: "1.0.0"
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
    }


};