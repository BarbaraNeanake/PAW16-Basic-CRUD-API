import React from 'react';
import styles from './styles.module.css';

const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
