
module.exports = {
    tags: ['Users'],
    description: "Atualizar dados de um membro cadastrado.",
    operationId: 'putUser',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "userId",
            "in": "path",
            "description": "Identificação(ID) do membro que deseja alterar.",
            "required": true
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        email:{
                            type: "string"
                        },
                        birthDate:{
                            type: "string"
                        },
                        country:{
                            type: "string"
                        },
                        state:{
                            type: "string"
                        }
                    }
                }
            }
          }
    },
    responses: {
        "200": {          
            description: "Mensagem de sucesso.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            message: {
                                type: "string"
                            }  
                        }
                    }
                }
            }
        },
        "400": {          
            description: "Mensagens de erro.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string"
                                }  
                            }
                        }
                    }
                }
            }
        }  
    }
} 
