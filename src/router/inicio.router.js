const express = require('express');
const { Mostrar, mandar } = require('../controller/inicio.controller');

const router = express.Router();

router.get ('/inicio', Mostrar)
router.post ('/inicio', mandar)

module.exports = router