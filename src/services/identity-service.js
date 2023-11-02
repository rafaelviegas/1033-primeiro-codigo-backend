'use strict'
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return await jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}

exports.decodeToken = async (token) => {

    return await jwt.verify(token, global.SALT_KEY);
}

exports.authorize = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token){
        res.status(401).json([{
            message: 'Acesso restrito.'
        }]);
    }else{
        jwt.verify(token, global.SALT_KEY, (error, decoded )=> {
            if(error){
                res.status(401).json([{
                    message: 'Token inválido.'
                }]);
            }else{
                next();
            }
        });
    }
};
exports.isAdmin = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token){
        res.status(401).json([{
            message: 'Acesso restrito.'
        }]);
    }else{
        jwt.verify(token, global.SALT_KEY, (error, decoded )=> {
            if(error){
                res.status(401).json([{
                    message: 'Token inválido.'
                }]);
            }else{
                if(decoded.roles.includes('admin')){
                    next();
                }else{
                    res.status(403).json([{
                        message: 'Esta funcionalidade é restrita para administradores.'
                    }]);
                }
            }
        });
    }
}