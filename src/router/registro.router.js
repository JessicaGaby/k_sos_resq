const express = require('express');
const { Mostrar, mandar } = require('../controller/registro.controller');

const router = express.Router();

router.get ('/registro', Mostrar)
router.post ('/registro', mandar)

module.exports = router