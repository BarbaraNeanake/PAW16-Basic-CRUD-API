const Book = require('../models/BookModels');

// Get books with filtering, sorting, pagination
const getBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const year = parseInt(req.query.year) || null;

    let sort = req.query.sort || "title";
    let category = req.query.category || "All";

    if (category === "All") {
      category = null;
    } else {
      category = req.query.category.split(",");
    }

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    sortBy[sort[0]] = sort[1] ? sort[1] : "asc";

    const query = {
      title: { $regex: search, $options: "i" }
    };
  
    if (category) {
      query.category = {
        $elemMatch: { $regex: new RegExp(category[0], "i") }
      };
    }

    if (year) {
      query.year = year;
    }

    const books = await Book.find(query)
      .sort(sortBy)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Book.countDocuments(query);

    res.status(200).json({ error: false, total, page, limit, books });
    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    const { title, author, category, year, price, isbn, image, description, publishedDate } = req.body;

    const newBook = new Book({
      title,
      author,
      category,
      year,
      price,
      isbn,
      image,
      description,
      publishedDate
    });

    await newBook.save();
    res.status(201).json({ success: true, message: 'Book created successfully', book: newBook });
    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Update the category of a book by ID
const updateBookCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    if (!id || !category) {
      return res.status(400).json({ success: false, message: 'Book ID and category are required' });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { $set: { category } },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, message: 'Book category updated successfully', book: updatedBook });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

//Update the description of the book by ID 
const updateBookDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    if (!id || !description) {
      return res.status(400).json({ success: false, message: 'Book ID and description are required' });
    }

    const updatedBookDes = await Book.findByIdAndUpdate(
      id,
      { $set: { description } },
      { new: true }
    );

    if (!updatedBookDes) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, message: 'Book description updated successfully', book: updatedBookDes });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

//Update the Price of the book by ID 
const updateBookPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (!id || !price) {
      return res.status(400).json({ success: false, message: 'Book ID and price are required' });
    }

    const updatedPrice = await Book.findByIdAndUpdate(
      id,
      { $set: { price } },
      { new: true }
    );

    if (!updatedPrice) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, message: 'Book price updated successfully', book: updatedPrice });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
}; 

//Update Image of the Book 
const updateBookImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    if (!id || ! image) {
      return res.status(400).json({ success: false, message: 'Book ID and image are required' });
    }

    const updatedImage = await Book.findByIdAndUpdate(
      id,
      { $set: { image } },
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, message: 'Book image updated successfully', book: updatedImage });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
}; 

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: 'Book ID is required' });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, book });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

// Delete a book by ID
const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: 'Book ID is required' });
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, message: 'Book deleted successfully' });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
};

module.exports = {
  getBooks,
  createBook,
  updateBookCategory,
  updateBookDescription,
  updateBookPrice,
  updateBookImage,
  getBookById,
  deleteBookById
};
