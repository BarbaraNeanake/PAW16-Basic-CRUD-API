import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios'; 
import Search from './components/Search'; 
import Table from './components/Table';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import Category from './components/Category';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Card from './components/CardHero';
import DeleteBookPage from './components/DeleteBookPage';
import './App.css';

const base_url = "http://localhost:5000/books";

const allCategories = [
  "Manga", 
  "Technology", 
  "Non-Fiction", 
  "Romance", 
  "Economics", 
  "Comics",
  "Comedy",
  "Religion",
  "Classic",
];

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const middlePageRef = useRef(null);
  const bottomSectionRef = useRef(null);

  const handleScrollToMiddle = () => {
    if (middlePageRef.current) {
      middlePageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToBottom = () => {
    if (bottomSectionRef.current) {
      bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated');
    if (authState) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const getAllBooks = async () => {
      if (!isAuthenticated) return;

      setLoading(true);
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&category=${filterCategory.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getAllBooks();
  }, [sort, filterCategory, page, search, isAuthenticated]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('email'); 
    navigate('/');
  };

  const handleHome = () => {
    if (window.location.pathname === '/app') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/app");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
      }, 100); 
    }
  };

  const handleInsertBook = () => {
    navigate("/insert-book");
  };

  const handleDeleteBook = () => {
    navigate("/delete-book");
  };

  return (
    <div className="wrapper">
      {loading && (
        <div className="loader-wrapper">
          <span className="loader"><span className="loader-inner"></span></span>
        </div>
      )}
      <Routes>
        <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/delete-book" element={<DeleteBookPage />} />
        <Route path="/app" element={
          isAuthenticated ? (
            <div className="container">
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
                  <Search setSearch={(search) => {
                    setSearch(search);
                    setPage(1);
                    scrollToBottom();
                  }} />
                  <button onClick={handleLogout} className="logout-button">
                    <FaSignOutAlt />
                  </button>
                </div>
              </div>
              <HeroSection scrollToMiddle={handleScrollToMiddle} />
              <div className="cardContainer" ref={middlePageRef}>
                <Card
                  title="View Books" 
                  description="Browse through our collection." 
                  imageUrl="/images/view-books.jpg" 
                  onClick={scrollToBottom}
                />
                <Card
                  title="Insert Book" 
                  description="Add a new book to our collection." 
                  imageUrl="/images/insert-book.jpg" 
                  onClick={() => alert('Card clicked!')}
                />
              </div>
              <div className="body" ref={bottomSectionRef}>
                <div className="table_container">
                  <Table books={obj.books ? obj.books : []} />
                  <Pagination
                    page={page}
                    limit={obj.limit ? obj.limit : 0}
                    total={obj.total ? obj.total : 0}
                    setPage={(newPage) => setPage(newPage)}
                  />
                </div>
                <div className="filter_container">
                  <Sort sort={sort} setSort={(newSort) => {
                    setSort(newSort);
                    setPage(1);
                  }} />
                  <Category 
                    filterCategory={filterCategory} 
                    category={allCategories}
                    setFilterCategory={(newCategory) => {
                      setFilterCategory(newCategory);
                      setPage(1);
                    }} 
                  />
                </div>
              </div>
              <Footer />
            </div>
          ) : (
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          )
        } />
      </Routes>
    </div>
  );
}

export default App;
