'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: [true, 'O nome é obrigatório. '],
        trim: true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    url:{
        type: String,
        required: true,
        trim: true
    },

    imageURL: {
        type: String,
        required: true,
        trim: true,
    },

    videoURL: {
        type: String,
        required: false,
        trim: true,
    },

    ratings: [{
        type: Schema.Types.ObjectId,
        ref: "Rating"
    }],

    score :{
        type: Number,
        default: 0
    },

    active: {
        type: Boolean,
        require: true,
        default: true
    }
});
module.exports = mongoose.model('Game',schema);