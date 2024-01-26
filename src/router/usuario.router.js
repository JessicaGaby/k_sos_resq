const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const router = express.Router();
const { mostrar, mandar, listar, actualizar, eliminar, traer} = require("../controller/usuario.controller");


router.get('/agregar',isLoggedIn,mostrar);
router.post('/agregar',isLoggedIn,mandar)
router.get('/listar',isLoggedIn,listar)
router.get('/editar/:id',isLoggedIn,traer)
router.post('/editar/:id',isLoggedIn,actualizar)
router.get('/eliminar/:id',isLoggedIn,eliminar)

module.exports = router;