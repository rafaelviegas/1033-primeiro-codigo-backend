
module.exports = {
    tags: ['Ratings'],
    description: "Alterar uma avaliação",
    operationId: 'putRating',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "ratingId",
            "in": "path",
            "description": "ID da avaliação que deseja alterar.",
            "required": true
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