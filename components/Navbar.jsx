import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image
            src="/img/telephone.png"
            alt="phone-img"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>123 456 789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href={"/product/1"}>
              <a>Products</a>
            </Link>
          </li>
          <li className={styles.listItem}>Menu</li>
          <Link href={"/"}>
            <a>
              <Image
                src="/img/logo.png"
                alt="logo-img"
                width="250px"
                height="100px"
              />
            </a>
          </Link>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>
            <Link href={"/order/1"}>
              <a>Order</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href={"/cart"}>
            <a>
              <Image
                src="/img/cart.png"
                alt="logo-img"
                width="30px"
                height="30px"
              />
              <div className={styles.counter}>{quantity}</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
