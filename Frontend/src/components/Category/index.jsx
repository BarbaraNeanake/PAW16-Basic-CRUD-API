import styles from "./styles.module.css";

const Category = ({ category = [], filterCategory, setFilterCategory}) => {
    const onChange = ({ currentTarget: input}) => {
        if(input.checked){
            const state = [...filterCategory, input.value];
            setFilterCategory(state);
        } else {
            const state = filterCategory.filter((val) => val !== input.value);
            setFilterCategory(state);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Choose One Category</h1>
            <div className={styles.category_container}>
                {category.map((category) => (
                    <div key={category} className={styles.category}>
                        <input
                            className={styles.category_input}
                            type="checkbox"
                            value={category}
                            onChange={onChange}
                        />
                        <p className={styles.category_label}>{category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;