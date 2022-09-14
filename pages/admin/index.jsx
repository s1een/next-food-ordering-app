import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
const AdminPanel = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  async function handleDelete(id) {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setPizzaList(pizzaList.filter((el) => el._id !== id));
    } catch (error) {
      console.log(error);
    }
  }
  async function handleChange(id) {
    const item = orderList.filter((o) => o._id === id)[0];
    const currentStatus = item.status;
    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((el) => (
            <tbody key={el._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={el.img}
                    alt="pizza-img"
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                </td>
                <td>{el._id.slice(0, 5)}...</td>
                <td>{el.title}</td>
                <td>${el.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(el._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleChange(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;

export const getServerSideProps = async () => {
  const productList = await axios.get(`http://localhost:3000/api/products`);
  const orderList = await axios.get(`http://localhost:3000/api/orders`);
  return {
    props: {
      orders: orderList.data,
      products: productList.data,
    },
  };
};
