import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import axios from "axios"; 
import Search from "./components/Search"; 
import Table from "./components/Table";
import Pagination from './components/Pagination';
import Sort from "./components/Sort";
import Category from './components/Category';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import Footer from './components/Footer';
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
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
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
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&category=${filterCategory.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
      } catch (err) {
        console.log(err);
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
    navigate("/");
  };


  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/app" element={
          <div className='container'>
            <div className='head'>
              <img src='./images/logo.png' alt='logo' className='logo' />
              <div className='search-logout-container'>
                <Search setSearch={(search) => setSearch(search)} />
                <button onClick={handleLogout} className="logout-button">
                  <FaSignOutAlt />
                </button>
              </div>
            </div>
            <div className='body'>
              {isAuthenticated ? (
                <>
                  <div className='table_container'>
                    <Table books={obj.books ? obj.books : []} />
                    <Pagination
                      page={page}
                      limit={obj.limit ? obj.limit : 0}
                      total={obj.total ? obj.total : 0}
                      setPage={(page) => setPage(page)}
                    />
                  </div>
                  <div className='filter_container'>
                    <Sort sort={sort} setSort={(sort) => setSort(sort)} />
                    <Category 
                      filterCategory={filterCategory} 
                      category={allCategories}
                      setFilterCategory={(category) => setFilterCategory(category)}
                    />
                  </div>
                </>
              ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
              )}
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
