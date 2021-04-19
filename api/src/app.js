

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { json } = require("body-parser");

const app = express();

const index = require('./routes/index');
const produtoRoute = require('./routes/produtoRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'aplication/vnd.api+json'}));
app.use(morgan('dev'));
app.use(cors()); 

app.use('/', index); 
app.use('/front/front-end/src/app/produtos', produtoRoute);


module.exports = app; 
