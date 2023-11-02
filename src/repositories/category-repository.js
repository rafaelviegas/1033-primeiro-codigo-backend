'use strict'

const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = async() => {

    return await Category.find({ active: true }, 'name');
};

exports.findById = async(id) =>{

    return await Category.findById(id, 'name');
};

exports.create = async(data) =>{

    var category = new Category(data);
    await category.save();
};

exports.update = async(id, data) =>{
    return await Category
        .findByIdAndUpdate(id,{
            $set: {
                name :data.name,
            }
        });
};

exports.delete = async(id) => {

    return Category.findByIdAndRemove({ _id: id });
};