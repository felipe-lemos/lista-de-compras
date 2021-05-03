const express = require('express')

const routes = express.Router()

const ListaDeComprasCtrl = require('../src/controller/ListaDeComprasController')

routes.post('/criaLista', ListaDeComprasCtrl.createLista)

module.exports = routes