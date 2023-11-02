'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: [true, 'O nome é obrigatório. '],
        trim: true,
    },

    email: {
        type: String,
        required: [true, 'O e-mail é obrigatório. '],
        trim: true
    },

    password: {
        type: String,
        required: [true, 'A senha é obrigatória. ']
    },

    birthDate: {
        type: Date,
        required: [true, 'A data de nascimento é obrigatória. ']
    },

    country: {
        type: String,
        required: false,
        trim: true,
    },

    state: {
        type: String,
        required: false,
        trim: true,
    },

    roles: {
        type: String,
        required: true,
        enum: ['member', 'admin'],
        default: 'member'
    },

    active: {
        type: Boolean,
        require: true,
        default: true
    }

});
module.exports = mongoose.model('User', schema);