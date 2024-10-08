const express = require('express');
const router = express.Router();
const BookControllers = require('../controllers/BookControllers');

// Route to get books with filtering, sorting, pagination
router.get('/', BookControllers.getBooks);

// Route to get all books without filtering
router.get('/all-books', BookControllers.getAllBooks);

// Route to create a new book
router.post('/', BookControllers.createBook);

// Route to update the category of a book by ID
router.put('/:id/category', BookControllers.updateBookCategory);

// Route to update the description of a book by ID 
router.put('/:id/description', BookControllers.updateBookDescription);

// Route to update the price of a book by ID
router.put('/:id/price', BookControllers.updateBookPrice);

// Route to update the image of the book by ID 
router.put('/:id/image', BookControllers.updateBookImage);

// Route to get a book by ID
router.get('/:id', BookControllers.getBookById);

// Route to delete a book by ID
router.delete('/:id/delete', BookControllers.deleteBookById);

module.exports = router;
