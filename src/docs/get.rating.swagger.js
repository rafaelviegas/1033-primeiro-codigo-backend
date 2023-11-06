
module.exports = {
    tags: ['Ratings'],
    description: "Consulta uma avaliação por ID",
    operationId: 'getRatingId',
    parameters: [
        {
            "name": "ratingId",
            "in": "path",
            "description": "ID da avaliação que deseja consultar.",
            "required": true
        }
    ],
    responses: {
        "200": {          
            description: "Consulta de avaliações.",
            "content": {
                "application/json": {
                    schema: {
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
                            },
                            user:{
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    email:{
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
                            },
                 
                        }
                    }
                }
            }
        }
    }
} 