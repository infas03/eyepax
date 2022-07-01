const express = require("express");
const router = express.Router();

const slideController = require('../controllers/slideController.js'); 

router.get('/', slideController.getSlide);

module.exports = router;