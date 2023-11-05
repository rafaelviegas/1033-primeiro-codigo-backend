
module.exports = {
    tags: ['Categories'],
    description: "Consulta uma Categoria por ID",
    operationId: 'getCategoryById',
    parameters: [
        {
            "name": "categoryId",
            "in": "path",
            "description": "Obter uma categoria por ID",
            "required": true
        }
    ],
    responses: {
        "200": {          
            description: "Consulta de Categoria.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            _id: {
                                type: "string"
                            },
                            name: {
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