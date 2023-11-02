'use strict'

const ValidationContract = require('../validations/fluent-validations');
const gameRepository = require('../repositories/game-repository');
const ratingRepository = require('../repositories/rating-repository');

exports.get = async (req, res, next)=>{
    try {

        const category = req.query.categoryId;
        const name = req.query.name;

        var filters = {
            active : true
        };
        
        var sort = { name : 'asc'};

        if(category)
            filters.category = category;

        if(name)
            filters.name = { $regex: '.*' + name + '.*', $options:'i'};

        var data = await gameRepository.get(filters, 50, sort);

        res.status(200).send(data);

    } catch (error) {
        res.status(400).send([{message: 'Falha ao listar os games.', data: error}]);
    }
};

exports.findById = async (req, res, next)=>{

    try {

       var data =  await gameRepository.findById(req.params.id);
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send([{message: 'Falha ao listar os games.', data: error}]);
    }

};

exports.getRecommendationsByUserId = async (req, res, next)=>{
    try {

        const userId = req.params.userId;
        
        await ratingRepository
            .findByUserIdAsync(userId)
            .then(async(userRatings) =>{

            //Usuário não fez avaliações
            if(!userRatings.length){
                let topFive = await gameRepository.get({ active : true }, 5, { score : 'desc'});
                res.status(200).send(topFive);
            }

            let userRatedCategories = [...new Set(userRatings.map((rating) => rating.game.category))]; 
            let userRatedGames = [...new Set(userRatings.map((rating) => rating.game._id))]; 
            let topFiveCategory = await gameRepository.get({ category: { "$in" : userRatedCategories}, _id: {"$nin": userRatedGames},  active : true }, 5, { score : 'desc'});
      
            res.status(200).send(topFiveCategory);  
        })

    } catch (error) {
        res.status(400).send([{message: 'Falha ao listar os games.', data: error}]);
    }
};


exports.post = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        let contract = new ValidationContract();

        //Adiciona validações
        contract.isRequired(req.body.name,"O nome do jogo é obrigatório.")
        contract.isRequired(req.body.url, "A url do jogo é obrigatória.")
        contract.isRequired(req.body.category,"A categoria do jogo é obrigatória.")
        contract.hasMinLen(req.body.description, 3, 'A descrição do jogo deve conter pelo menos 3 caracteres.');
        contract.hasMaxLen(req.body.description, 255, 'a descrição do jogo deve conter no máximo 255 caracteres.');
        contract.isRequired(req.body.imageURL,"A URL da imagem do jogo é obrigatória.")

        //Se os dados forem inválidos
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }

        await gameRepository.create(req.body);

        res.status(201).send({message: 'Game cadastrado com sucesso! '});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao cadastrar o game.', data: error}]);
    }

};


exports.put = async (req, res, next) => {
    try {

        await gameRepository.update(req.params.id, req.body);
        res.status(200).send({message: 'Game atualizado com sucesso!'});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao atualizar o game.', data: error}]);
    }
};

exports.delete = async (req, res, next)=>{
    try {
        
        await gameRepository.delete(req.params.id);
        res.status(200).send({ message: 'Game removido com sucesso!'});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao remover o game.', data: error}]);
    }
};

