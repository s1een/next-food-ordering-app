import styles from "../styles/ProductList.module.css";
import PizzaCard from "../components/PizzaCard";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.description}>
        Pizza is one of the most popular and common foods today. In order for it
        to be really tasty, at SUPERPIZZA they monitor the freshness of the
        products, the cleanliness of the workplaces and the quality of the
        services provided. And not everyone knows that the main thing in our
        business is skill, love for fresh products and... a lot of creativity!
        SUPERPIZZA has pizzas for vegetarians and meat lovers, for seafood
        lovers and cheese lovers.
      </p>
      <h1 id="products">Our menu</h1>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
