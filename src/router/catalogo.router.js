const express = require('express');

const { Mostrar, mandar } = require('../controller/catalogo.controller');

const router = express.Router();

router.get ('/catalogo', Mostrar)
router.post ('/catalogo', mandar)

module.exports = router