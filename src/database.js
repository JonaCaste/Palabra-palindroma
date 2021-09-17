const mongoose = require('mongoose');

//para base de datos local
//const uri = 'mongodb://localhost/GolkyTech';

//bases de datos en atlas
const uri = 'mongodb+srv://user_golkytech:golkytech@cluster0.kdv4u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));


module.exports = mongoose;
