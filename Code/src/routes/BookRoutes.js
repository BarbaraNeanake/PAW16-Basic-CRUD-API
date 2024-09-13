const express = require('express');
const router = express.Router();
const BookControllers = require('../controllers/BookControllers');

router.get('/', BookControllers.getBooks);
router.post('/', BookControllers.createBook);

module.exports = router;
