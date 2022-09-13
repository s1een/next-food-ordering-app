import styles from "../styles/ProductList.module.css";
import PizzaCard from "../components/PizzaCard";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container} id="products">
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        adipisci consectetur aperiam asperiores, deserunt perspiciatis velit
        explicabo repudiandae aliquid, accusantium exercitationem similique?
        Architecto, accusantium veniam. Natus in unde itaque officia?
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
