'use strict'
const ValidationContract = require('../validations/fluent-validations');
const ratingRepository = require('../repositories/rating-repository');
const gameRepository = require('../repositories/game-repository');

exports.findByGameId = async (req, res, next)=>{

    try {

       var data =  await ratingRepository.findByGameIdAsync(req.params.id);
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send([{message: 'Falha ao listar avaliações deste jogo.', data: error}]);
    }

};

exports.findById = async (req, res, next)=>{

    try {

       var data =  await ratingRepository.findByIdAsync(req.params.id);
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send([{message: 'Falha ao consultar avaliação.', data: error}]);
    }

};

exports.post = async (req, res, next) => {
    try {

        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        let contract = new ValidationContract();

        //Adiciona validações
        contract.isRequired(req.body.game,"Selecionar um jogo para avaliar.")
        contract.isRequired(req.body.score,"Para avaliar um jogo a nota é obrigatória.")
        contract.isRequired(req.body.user,"Identifique o usuário que deseja avaliar este jogo.")

        contract.hasMaxLen(req.body.description, 255, 'A descrição da avaliação deve conter no máximo 255 caracteres.');

        //Se os dados forem inválidos
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }

        await ratingRepository.createAsync(req.body)
            .then((rating) => {

                gameRepository.findById(req.body.game)
                .then((game) =>{

                    game.ratings.push(rating);
                   
                    game.score = avg(game.ratings.map((rating) => rating.score));
                    
                    gameRepository.update(req.body.game, game);

                    return game;

                }).then((game) => {

                    gameRepository.addRatingAsync(game._id, rating);
                })
                    
            })

        res.status(201).send({message: 'Avaliação cadastrada com sucesso! '});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao cadastrar a avaliação.', data: error}]);
    }

};

exports.put = async (req, res, next) => {
    try {

        let contract = new ValidationContract();

        //Adiciona validações
        contract.isRequired(req.body.game,"Selecionar um jogo para avaliar.")
        contract.isRequired(req.body.score,"Para avaliar um jogo a nota é obrigatória.")
        contract.isRequired(req.body.user,"Identifique o usuário que deseja avaliar este jogo.")

        contract.hasMaxLen(req.body.description, 255, 'A descrição da avaliação deve conter no máximo 255 caracteres.');

        //Se os dados forem inválidos
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }

        await ratingRepository.updateAsync(req.params.id, req.body)
            .then(() => {
                
                gameRepository.findById(req.body.game)
                .then((game) =>{

                    game.score = avg(game.ratings.map((rating) => rating.score));
                    
                    gameRepository.update(req.body.game, game);

                    return game;
                })
            })



        res.status(200).send({message: 'Avaliação atualizada com sucesso!'});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao atualizar a avaliação.', data: error}]);
    }
};

function avg(arr){
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = (sum / arr.length) || 0;
    return (Math.round(avg * 100) / 100).toFixed(2);
};

