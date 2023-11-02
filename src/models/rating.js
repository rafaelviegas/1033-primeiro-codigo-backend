'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    score: {
        type: Number,
        required: [true, 'A nota é obrigatória. '],
        trim: true,
    },

    description: {
        type: String,
        trim: true
    },

    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

});

module.exports = mongoose.model('Rating', schema);