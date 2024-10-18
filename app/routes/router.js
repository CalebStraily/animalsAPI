//Import express package
const express = require('express');

const router = express.Router();

router.use('/animals', require('./api/animalroutes'));

module.exports = router;