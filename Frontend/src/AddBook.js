import { useState } from 'react';
import axios from 'axios';
import './addbook.css';

const post_url = "http://localhost:5000/books";

function AddBook() {
  // State untuk menyimpan input dari form
  const [title, setTitle] = useState(''); 
  const [authors, setAuthors] = useState('');
  const [categories, setCategories] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [isbn, setIsbn] = useState('');
  const [image, setImage] = useState('');  // Image URL
  const [description, setDescription] = useState('');

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      authors,
      categories,
      year,
      price,
      isbn,
      image,  // Use URL for image
      description,
    };

    try {
      const response = await axios.post(`${post_url}`, bookData, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      alert('Book created successfully!');
      console.log(response.data);

      // Reset form setelah berhasil submit
      setTitle('');
      setAuthors('');
      setCategories('');
      setYear('');
      setPrice('');
      setIsbn('');
      setImage('');  // Reset image URL
      setDescription('');

    } catch (error) {
      console.error('Error creating book:', error);
      alert('Failed to create book.');
    }
  };

  return (
    <div className="main-bungkus">
      <div className="plastik">
        <div className="bungkus">
          <h2>Add Your Book</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            
            <label htmlFor="authors">Authors (comma-separated):</label>
            <input id="authors" type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} required />
            
            <label htmlFor="categories">Categories (comma-separated):</label>
            <input id="categories" type="text" value={categories} onChange={(e) => setCategories(e.target.value)} required />
            
            <label htmlFor="year">Year:</label>
            <input id="year" type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
            
            <label htmlFor="price">Price:</label>
            <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            
            <label htmlFor="isbn">ISBN:</label>
            <input id="isbn" type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
            
            <label htmlFor="image">Cover Image URL:</label>
            <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
            
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            
            <button type="submit">Upload Your Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
