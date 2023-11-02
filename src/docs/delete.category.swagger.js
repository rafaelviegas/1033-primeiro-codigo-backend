
module.exports = {
    tags: ['Categories'],
    description: "Remove uma categoria cadastrada",
    operationId: 'deleteCategoryById',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "categoryId",
            "in": "path",
            "description": "ID da categoria",
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