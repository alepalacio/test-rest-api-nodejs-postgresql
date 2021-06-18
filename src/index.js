const express = require('express');
const router = require('./routes/index')
const morgan = require('morgan');

//Inicialization
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

//Routes
app.use('/', router)

//Server connection
app.listen(app.get('port'), err => {
    if(err) {
        console.error(err);
    };
    console.log('Server running on port 3000');
});