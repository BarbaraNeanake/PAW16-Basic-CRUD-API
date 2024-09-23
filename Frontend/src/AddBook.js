import { useState } from 'react';
import axios from 'axios';
import './App.css';

function AddBook() {
  // State untuk menyimpan input dari form
  const [title, setTitle] = useState(''); 
  const [authors, setAuthors] = useState('');
  const [categories, setCategories] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [isbn, setIsbn] = useState('');
  const [image, setImage] = useState(null);  // Image upload
  const [description, setDescription] = useState('');

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Buat formData untuk menampung data termasuk file gambar
    const formData = new FormData();
    formData.append('title', title);
    formData.append('authors', authors);
    formData.append('categories', categories);
    formData.append('year', year);
    formData.append('price', price);
    formData.append('isbn', isbn);
    formData.append('image', image);  // Upload file image
    formData.append('description', description);

    try {
      const response = await axios.post('/api/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
      setImage(null);
      setDescription('');
    } catch (error) {
      console.error('Error creating book:', error);
      alert('Failed to create book.');
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Add Your Book</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          
          <label>Authors (comma-separated):</label>
          <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} required />
          
          <label>Categories (comma-separated):</label>
          <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} required />
          
          <label>Year:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
          
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          
          <label>ISBN:</label>
          <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
          
          <label>Cover Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
          
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          
          <button type="submit">Upload Your Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
