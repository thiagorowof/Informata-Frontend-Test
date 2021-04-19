/**
 * Arquivo: server/server.js
 * Descrição: arquivo responsável pelas rotas da api relacionada ao produto
 * Autor: Rafaela França
 */
/*const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { json } = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'aplication/vnd.api+json'}));
app.use(morgan('dev'));
app.use(cors());*/

const port = process.env.PORT || 8000;

/*const router = express.Router();

router.get('/', (req, res) =>{
    res.json({message: 'Seja bem-vindo(a) a api de produtos' });
});*/

app.use('/api', router);

app.listen(port);

console.log('Aplicação executando na porta', port)
