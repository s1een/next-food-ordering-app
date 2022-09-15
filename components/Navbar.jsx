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
            <a href="#products">Products</a>
          </li>
          <li className={styles.listItem}>
            <a href="#products">Menu</a>
          </li>
          <div className={styles.logoContainer}>
            <Link href={"/"}>
              <a>
                <Image
                  className={styles.logo}
                  src="/img/size.png"
                  alt="logo-img"
                  width="80px"
                  height="80px"
                />
              </a>
            </Link>
          </div>
          <li className={styles.listItem}>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <a>Orders</a>
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
