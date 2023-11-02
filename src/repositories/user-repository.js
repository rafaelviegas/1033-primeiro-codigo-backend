'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.findByEmailAsync = async(email) =>{

    return await User.findOne({email}, 'name email birthDate country state roles');   
};

exports.findAsync = async(email, password) => {

    return await User.findOne({email,password});
};

exports.findByIdAsync = async(id) =>{

    return await User.findById(id, 'name email birthDate country state roles');
};

exports.createAsync = async(data) =>{

    var user = new User(data);
    await user.save();
};

exports.updateAsync = async(id, data) =>{
    return await User
        .findByIdAndUpdate(id,{
            $set: {
                name : data.name,
                email: data.email,
                password: data.password,
                birthDate: data.birthDate,
                country: data.country,
                state: data.state
            }
        });
};