const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database.js');


//settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/tasks', require('./Routes/router.js'));


//Static files
app.use(express.static(path.join(__dirname, '..', 'public')));


//Server
app.listen(app.get('port'), () => console.log(`Se inicion el servidor en el puerto: ${app.get('port')}`));
