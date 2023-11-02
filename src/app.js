const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger');
const config = require('./config');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({extended:false}));

//Habilita o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS' )
    next();
});

const router = express.Router();

//carrrega os Models
const Game = require('./models/game');
const Category = require('./models/category');
const User = require('./models/user');
const Rating = require('./models/rating');

//conecta no banco
mongoose.connect(config.connectionString);

//carregar rotas
const gameRoute = require('./routes/game-route');
const categoryRoute = require('./routes/category-route');
const userRoute = require('./routes/user-route');
const ratingRoute = require('./routes/rating-route');
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));
app.use('/games', gameRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);
app.use('/ratings', ratingRoute);

module.exports = app;