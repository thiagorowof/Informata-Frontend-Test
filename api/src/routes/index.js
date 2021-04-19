
const express = require("express");

const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a api de produtos',
        version: '1.0.0',
    });
});

module.exports = router;

//res.json({message: 'Seja bem-vindo(a) a api de produtos' });