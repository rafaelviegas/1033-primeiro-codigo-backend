
module.exports = {
    tags: ['Games'],
    description: "Consulta um game por ID",
    operationId: 'getGameById',
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            "name": "gameId",
            "in": "path",
            "description": "Obter um game por ID",
            "required": true
        }
    ],
    responses: {
        "200": {          
            description: "Listagem de games.",
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
                            },
                            category: {
                                type: "object",
                                properties: {
                                    _id: {
                                        type: "string"
                                    },
                                    name: {
                                        type: "string"
                                    },
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
        }
    }
} 