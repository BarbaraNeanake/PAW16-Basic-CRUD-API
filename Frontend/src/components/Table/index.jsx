import styles from "./styles.module.css";

const Table = ({ books }) => {
    const visibleBooks = books.slice(0, 5);
    return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Recommended Books for You</h2>
      </div>
      <div className={styles.books_row}>
        {visibleBooks.map((book) => (
          <div className={styles.card} key={book._id}>
            <img src={book.image} alt={book.title} className={styles.books_img} />
            <div className={styles.card_content}>
              <p className={styles.books_title}>
                {book.title} ({book.year})
              </p>
              <div className={styles.category_container}>
                {book.category.slice(0, 2).map((category, index) => (
                  <p key={category} className={styles.books_category}>
                    {category}
                    {index !== book.category.slice(0, 2).length - 1 && "/"}
                  </p>
                ))}
              </div>
              <div className={styles.price_container}>
                <p className={styles.books_price}>${book.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
