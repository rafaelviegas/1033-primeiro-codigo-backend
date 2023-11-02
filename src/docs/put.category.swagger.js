
module.exports = {
    tags: ['Categories'],
    description: "Alterar uma categoria cadastrada.",
    operationId: 'putCategory',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "categoryId",
            "in": "path",
            "description": "ID da categoria que deseja alterar.",
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