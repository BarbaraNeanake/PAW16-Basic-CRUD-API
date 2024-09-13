const Book = require('../models/BookModels');

// Get books with filtering, sorting, pagination
const getBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    let sort = req.query.sort || "rating";
    let category = req.query.category || "All";

    if (category === "All") {
      category = []; // No specific category filter
    } else {
      category = req.query.category.split(",");
    }

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    sortBy[sort[0]] = sort[1] ? sort[1] : "asc";

    const books = await Book.find({ title: { $regex: search, $options: "i" } })
      .where("category")
      .in(category)
      .sort(sortBy)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Book.countDocuments({
      category: { $in: category },
      title: { $regex: search, $options: "i" },
    });

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

module.exports = {
  getBooks,
  createBook
};
