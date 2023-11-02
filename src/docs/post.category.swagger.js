
module.exports = {
    tags: ['Categories'],
    description: "Cadastro de categoria",
    operationId: 'postCategory',
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

