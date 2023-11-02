
module.exports = {
    tags: ['Games'],
    description: "Cadastrar um novo game",
    operationId: 'postGame',
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
                        name: {
                            type: "string"
                        },
                        category: {
                            type: "object",
                            properties: {
                                _id: {
                                    type: "string"
                                }
                            }
                        },
                        description:{
                            type: "string"
                        },
                        url:{
                            type: "string"
                        },
                        imageURL:{
                            type: "string"
                        },
                        videoURL:{
                            type: "string"
                        }
                    }
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