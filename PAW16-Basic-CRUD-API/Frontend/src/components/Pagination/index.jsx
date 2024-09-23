import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
    const totalPages = Math.ceil(total / limit);

    const onClick = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className={styles.container}>
            <button 
                className={styles.prev_btn}
                onClick={() => onClick(page - 1)} 
                disabled={page === 1}
            >
                Previous
            </button>
            {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
                <button 
                    className={page === index + 1 ? styles.active : styles.page_btn}
                    key={index}
                    onClick={() => onClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button 
                className={styles.next_btn}
                onClick={() => onClick(page + 1)} 
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
