import styles from "./styles.module.css";

const Search = ({ setSearch }) => {
    return(
        <input input
            type="text"
            className={styles.search}
            placeholder="Search for Books Title"
            onChange={({ currentTarget: input}) => setSearch(input.value)}
        />
    )
};

export default Search;