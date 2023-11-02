
module.exports = {
    tags: ['Users'],
    description: "Login de membros",
    operationId: 'loginUser',
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
                        email:{
                            type: "string"
                        },
                        password:{
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
                            name: {
                                type: "string"
                            },
                            email: {
                                type: "string"
                            },
                            token: {
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

