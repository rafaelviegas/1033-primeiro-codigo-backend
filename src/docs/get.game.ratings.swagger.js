
module.exports = {
    tags: ['Ratings'],
    description: "Consulta uma avaliações por GameId",
    operationId: 'getRatingByGameId',
    parameters: [
        {
            "name": "gameId",
            "in": "path",
            "description": "ID do game que deseja consultar.",
            "required": true
        }
    ],
    responses: {
        "200": {          
            description: "Consulta de avaliações por game.",
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
                                score: {
                                    type: "number"
                                },
                                description: {
                                    type: "string"
                                },                            
                                game: {
                                    type: "object",
                                    properties: {
                                        _id: {
                                            type: "string"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        category: {
                                            type: "string",
                                        }
                                       
                                    }
                                },
                                user:{
                                    type: "object",
                                    properties: {
                                        _id: {
                                            type: "string"
                                        },
                                        name: {
                                            type: "string"
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        }
    }
} 