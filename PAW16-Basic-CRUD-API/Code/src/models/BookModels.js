const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    author: { 
        type: [String], 
        required: true 
    },
    category: { 
        type: [String], 
        required: true 
    },
    year:{
        type: Number,
        required: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    isbn: {
        type: String,
        required: true
    },  
    image:{
        type: String,
        required:true
    },

    description:{
        type: String,
        required:false
    },
    
    publishedDate: { 
        type: Date 
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
