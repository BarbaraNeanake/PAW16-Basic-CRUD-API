import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerAbout}>
            <h3>About Us</h3>
            <p>Learn more about our bookstore and services.</p>
          </div>
  
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h3>Site Map</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/app">Books</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>Contact Us</h3>
              <ul>
                <li>Email: info@bookstore.com</li>
                <li>Phone: +123456789</li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Bookstore. All Rights Reserved.</p>
        </div>
      </footer>
    );
};
  
export default Footer;
