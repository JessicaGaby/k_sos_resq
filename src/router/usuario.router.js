const express = require("express");

const router = express.Router();
const { mostrar, mandar} = require("../controller/usuario.controller");


router.get('/agregar',mostrar);
router.post('/agregar',mandar)


module.exports = router;