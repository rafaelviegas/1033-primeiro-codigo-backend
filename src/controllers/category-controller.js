'use strict'
const ValidationContract = require('../validations/fluent-validations');
const categoryRepository = require('../repositories/category-repository');

exports.get = async (req, res, next)=>{
    try {
        var data = await categoryRepository.get();
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send([{message: 'Falha ao listar as categorias.', data: error}]);
    }
};

exports.findById = async (req, res, next)=>{

    try {

       var data =  await categoryRepository.findById(req.params.id);
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send([{message: 'Falha ao listar as categorias.', data: error}]);
    }

};

exports.post = async (req, res, next) => {
    try {

        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        let contract = new ValidationContract();

        //Adiciona validações
        contract.isRequired(req.body.name,"O nome da categoria é obrigatório.")
        contract.hasMinLen(req.body.name, 3, 'O nome da categoria deve conter pelo menos 3 caracteres.');
        contract.hasMaxLen(req.body.name, 128, 'O nome da categoria deve conter no máximo 128 caracteres.');

        //Se os dados forem inválidos
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }

        await categoryRepository.create(req.body);

        res.status(201).send({message: 'Categoria cadastrada com sucesso! '});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao cadastrar a categoria.', data: error}]);
    }

};

exports.put = async (req, res, next) => {
    try {

        let contract = new ValidationContract();

        //Adiciona validações
        contract.isRequired(req.body.name,"O nome da categoria é obrigatório.")
        contract.hasMinLen(req.body.name, 3, 'O nome da categoria deve conter pelo menos 3 caracteres.');
        contract.hasMaxLen(req.body.name, 128, 'O nome da categoria deve conter no máximo 128 caracteres.');

        //Se os dados forem inválidos
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }

        await categoryRepository.update(req.params.id, req.body);
        res.status(200).send({message: 'Categoria atualizado com sucesso!'});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao atualizar a categoria.', data: error}]);
    }
};

exports.delete = async (req, res, next)=>{
    try {
        
        await categoryRepository.delete(req.params.id);

        res.status(200).send({ message: 'Categoria removida com sucesso!'});

    } catch (error) {
        res.status(400).send([{message: 'Falha ao remover a categoria.', data: error}]);
    }
};
