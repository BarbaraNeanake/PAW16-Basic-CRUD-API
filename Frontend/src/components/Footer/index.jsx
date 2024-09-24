import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>End of the Page</h1>
      </div>
    </footer>
  );
};

export default Footer;
