'use strict'

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

exports.get = async(filters, limit, sort) => {

    return await Game.find(filters, 'name score category description url imageURL videoURL')
        .populate('category', 'name')
        .populate('ratings')
        .sort(sort)
        .limit(limit);
};

exports.findById = async(id) =>{

    return await Game.findById(id, 'name score category description url imageURL videoURL')
        .populate('category', 'name')
        .populate('ratings')   
};

exports.findByCategoryAsync = async(categoryId) =>{
    return await Game.find({category:categoryId}, 'name score category description url imageURL videoURL')
        .populate('category', 'name');   
};

exports.addRatingAsync = async(id, rating) =>{
    
    return await Game
    .findByIdAndUpdate(id,{
         $push: { ratings: rating}
    });

};

exports.create = async(data) =>{

    var game = new Game(data);
    await game.save();
};

exports.update = async(id, data) =>{
    return await Game
        .findByIdAndUpdate(id,{
            $set: {
                name :data.name,
                score :data.score,
                description: data.description,
                category: data.category,
                url: data.url,
                imageURL: data.imageURL,
                videoURL: data.videoURL,
            }
        });
};

exports.delete = async(id) => {
    return Game.findByIdAndRemove({ _id: id });

};