import { useEffect, useState } from 'react';
import axios from "axios"; 
import Search from "./components/Search"; 
import Table from "./components/Table";
import Pagination from './components/Pagination';
import Sort from "./components/Sort";
import Category from './components/Category';
import './App.css';

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc"});
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&category=${filterCategory.toString()}`
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch(err) {
        console.log(err);
      }
    };

    console.log("Fetching books with params:", { sort, filterCategory, page, search });
    getAllBooks();
  }, [sort, filterCategory, page, search]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='head'>
          <img src='./images/logo.png' alt='logo' className='logo' />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className='body'>
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
            <Sort sort={sort} setSort={(sort) => setSort(sort)}/>
              <Category 
              filterCategory={filterCategory} 
              Category={obj.category ? obj.category: []}
              setFilterCategory={(category) => setFilterCategory(category)}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
