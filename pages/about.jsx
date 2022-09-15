import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About us</h1>
        <p>
          Pizza is one of the most popular and common foods today. In order for
          it to be really tasty, at SUPERPIZZA they monitor the freshness of the
          products, the cleanliness of the workplaces and the quality of the
          services provided. And not everyone knows that the main thing in our
          business is skill, love for fresh products and... a lot of creativity!
          SUPERPIZZA has pizzas for vegetarians and meat lovers, for seafood
          lovers and cheese lovers.
        </p>
        <p>ADVANTAGES OF ORDERING FROM SUPERPIZZA</p>
        <ul className={styles.list}>
          <li>we prepare only after receiving the order</li>
          <li>we use only fresh products</li>
          <li>we always bring it hot</li>
          <li>a rich assortment for every taste</li>
          <li>ideal price/quality ratio</li>
          <li>free shipping</li>
          <li>consistently profitable shares</li>
        </ul>
        <h2 className={styles.title}>
          SUPERPIZZA St. Joseph the Blind, 16 Ivano-Frankivsk.
        </h2>
      </div>
    </div>
  );
};

export default About;
