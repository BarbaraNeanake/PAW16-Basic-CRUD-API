import styles from './styles.module.css';

const HeroSection = ({ scrollToMiddle }) => {
  return (
    <div>
      <div className={styles.hero} style={{ backgroundImage: `url(/images/library.jpg)` }}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Bookstore</h1>
          <p>Discover the best books and authors.</p>
          <button className={styles.hero_btn} onClick={scrollToMiddle}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
