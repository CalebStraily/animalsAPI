//Import express package
const express = require('express');

const router = express.Router();

router.use('/animals', require('./api/animalroutes'));
router.use('/states', require('./api/statesroutes'));

module.exports = router;