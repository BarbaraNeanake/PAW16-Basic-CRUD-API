const express = require('express');
const router = express.Router();
const BookControllers = require('../controllers/BookControllers');

// Route to get books with filtering, sorting, pagination
router.get('/', BookControllers.getBooks);

// Route to create a new book
router.post('/', BookControllers.createBook);

// Route to update the category of a book by ID
router.put('/:id/category', BookControllers.updateBookCategory);

// Route to get a book by ID
router.get('/:id', BookControllers.getBookById);

// Route to delete a book by ID
router.delete('/:id/delete', BookControllers.deleteBookById);

module.exports = router;
