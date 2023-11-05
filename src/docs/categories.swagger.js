
module.exports = {
    operationId: 'getCategories',
    tags: ['Categories'],
    description: "Retorna listagem de categorias",
    responses: {
        "200": {          
            description: "Listagem de categorias.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
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
            }
        }
    }
} 