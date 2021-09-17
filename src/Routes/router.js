const express =  require('express');
const router = express.Router();

const Modelo = require('../modelos/esquema.js');

router.get('/', async (req, res) => {

    const modelos = await Modelo.find();
    res.json(modelos);
});

router.post('/', async (req, res) => {
    const {palabra, aux, pal} = req.body;

    const modelo = new Modelo({
        palabra,
        aux,
        pal
    });
    await modelo.save();
    res.json({status: 'palabra guardada'});
});

// router.put();

// router.delete();

module.exports = router;