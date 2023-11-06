
module.exports = {
    tags: ['Ratings'],
    description: "Cadastrar uma nova avaliação",
    operationId: 'postRating',
    security: [
        {
            bearerAuth: []
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: "object",
                    properties: {
                        score: {
                            type: "number"
                        },
                        description: {
                            type: "string"
                        },                            
                        game: {
                            type: "string"
                        },
                        user:{
                            type: "string",
                        }
                    },
                }
            }
          }
    },
    responses: {
        "201": {          
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