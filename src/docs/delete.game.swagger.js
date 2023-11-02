
module.exports = {
    tags: ['Games'],
    description: "Remove um game cadastrado",
    operationId: 'deleteGameById',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "gameId",
            "in": "path",
            "description": "ID do game",
            "required": true
        }
    ],
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
        }
    }
} 