const mongoose = require('mongoose');
const {Schema} = mongoose;

const esquema = new Schema ({
    palabra: {type: String, required: true},
    pal: {type: Boolean, required: true},
    aux: {type: String, required: true}
});

module.exports = mongoose.model('esquema', esquema);    //modelo de datos