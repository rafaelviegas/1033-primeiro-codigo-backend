
module.exports = {
    tags: ['Users'],
    description: "Cadastro de membros",
    operationId: 'postUser',
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
                        password:{
                            type: "string"
                        },
                        confirmPassword:{
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

