'use strict'

const mongoose = require('mongoose');
const Rating = mongoose.model('Rating');


exports.findByGameIdAsync = async(gameId) =>{

    return await Rating.find({game:gameId}, 'score description user game')
    .populate('game', 'name category')
    .populate('user', 'name');  
    
};

exports.findByUserIdAsync = async(userId) =>{

    return await Rating.find({user:userId}, 'score description user game')
    .populate('game', 'name category')
    .populate('user', 'name');  
    
};

exports.findByIdAsync = async(id) =>{

    return await Rating.findById(id, 'score description user game')
    .populate('game', 'name category')
    .populate('user', 'name');  
    
};

exports.createAsync = async(data) =>{

    var rating = new Rating(data);

    return await rating.save()
        .then(() => rating)

};

exports.updateAsync = async(id, data) =>{
    
    return await Rating
        .findByIdAndUpdate(id,{
            $set: {
                score :data.score,
                description :data.description,
            }
        });
};
