import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css';
import Footer from '../Footer';
import { FaSignOutAlt } from 'react-icons/fa';

const base_url = "http://localhost:5000/books";

function DeleteBookPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated');
    if (authState) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const getAllBooks = async () => {
      if (!isAuthenticated) return;

      try {
        const url = `${base_url}/all-books`;
        const { data } = await axios.get(url);
        setBooks(data.books);
      } catch (err) {
        console.error(err);
        setError('Error fetching books. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getAllBooks();
  }, [isAuthenticated]);

  const handleDelete = async (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setLoading(true);
      try {
        await axios.delete(`${base_url}/${bookId}/delete`);
        setBooks(books.filter(book => book._id !== bookId));
        alert('Book deleted successfully');
      } catch (err) {
        setError('Error deleting the book. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
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
      <div className={styles.deleteBookPage}>
        <div className={styles.head}>
          <div className={styles.logoNavContainer}>
            <img src="./images/logo.png" alt="logo" className={styles.logo} />
            <div className={styles.navLinks}>
              <span onClick={handleHome} className={styles.navLink}>Home</span>
              <span onClick={handleInsertBook} className={styles.navLink}>Insert</span>
              <span onClick={handleDeleteBook} className={styles.navLink}>Delete</span>
            </div>
          </div>
          <div className={styles.searchLogoutContainer}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <FaSignOutAlt />
            </button>
          </div>
        </div>

        <div className={styles.bookList}>
          <h1>Delete a Book</h1>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <div className={styles.bookList}>
              {books.length === 0 ? (
                <p>No books available to delete.</p>
              ) : (
                books.map((book) => (
                  <div key={book._id} className={styles.bookItem}>
                    <img src={book.image} alt={book.title} className={styles.bookImage} />
                    <div className={styles.bookInfo}>
                      <h3>{book.title}</h3>
                      <p>Author: {book.author ? book.author.join(', ') : 'Unknown Author'}</p>
                      <p>Price: ${book.price}</p>
                    </div>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DeleteBookPage;
