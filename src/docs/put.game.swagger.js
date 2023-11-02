
module.exports = {
    tags: ['Games'],
    description: "Alterar um game cadastrado.",
    operationId: 'putGame',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "gameId",
            "in": "path",
            "description": "ID do game que deseja alterar.",
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