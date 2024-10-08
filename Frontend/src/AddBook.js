import { useState } from 'react';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import './addbook.css';

const post_url = "http://localhost:5000/books";

function AddBook() {
  // State for the form inputs
  const [title, setTitle] = useState(''); 
  const [authors, setAuthors] = useState('');
  const [categories, setCategories] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [isbn, setIsbn] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      authors,
      categories,
      year,
      price,
      isbn,
      image,
      description,
    };

    try {
      const response = await axios.post(`${post_url}`, bookData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      alert('Book created successfully!');
      console.log(response.data);

      // Reset form after successful submission
      setTitle('');
      setAuthors('');
      setCategories('');
      setYear('');
      setPrice('');
      setIsbn('');
      setImage('');
      setDescription('');
    } catch (error) {
      console.error('Error creating book:', error);
      alert('Failed to create book.');
    }
  };

  // Navbar functions
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  const handleHome = () => {
    navigate("/app");
  };

  const handleInsertBook = () => {
    navigate("/insert-book");
  };

  const handleDeleteBook = () => {
    navigate("/delete-book");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Inline Navbar */}
      <div className="head">
        <div className="logo-nav-container">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <div className="nav-links">
            <span onClick={handleHome} className="nav-link">Home</span>
            <span onClick={handleInsertBook} className="nav-link">Insert</span>
            <span onClick={handleDeleteBook} className="nav-link">Delete</span>
          </div>
        </div>
        <div className="search-logout-container">
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt />
          </button>
        </div>
      </div>

      {/* Book Form */}
      <div className="main-bungkus">
        <div className="plastik">
          <div className="bungkus">
            <h2>Add Your Book</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              
              <label htmlFor="authors">Authors (comma-separated):</label>
              <input
                id="authors"
                type="text"
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                required
              />
              
              <label htmlFor="categories">Categories (comma-separated):</label>
              <input
                id="categories"
                type="text"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                required
              />
              
              <label htmlFor="year">Year:</label>
              <input
                id="year"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
              
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              
              <label htmlFor="isbn">ISBN:</label>
              <input
                id="isbn"
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                required
              />
              
              <label htmlFor="image">Cover Image URL:</label>
              <input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
              
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              
              <button type="submit">Upload Your Book</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddBook;
