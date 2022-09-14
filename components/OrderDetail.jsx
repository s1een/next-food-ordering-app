import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";
function OrderDetail({ total, createOrder }) {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  function handleClick() {
    createOrder({ customer, address, total, method: 0 });
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows="5"
            placeholder="Elton St. 505 NY"
            type="text"
            className={styles.textArea}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
