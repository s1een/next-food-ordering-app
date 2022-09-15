import axios from "axios";
import { useState } from "react";
import styles from "../styles/AddButton.module.css";

function Add({ setClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);

  function handleExtraInput(e) {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  }

  function handleExtra(e) {
    setExtraOptions((prev) => [...prev, extra]);
  }

  function changePrice(e, index) {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  }

  async function handleCreate() {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dev8v6lcf/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        description,
        prices,
        extraOptions,
        img: url,
      };
      await axios.post(`http://localhost:3000/api/products`, newProduct);
      setClose(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1 style={{ textAlign: "center" }}>ADD A NEW PIZZA</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description</label>
          <textarea
            className={styles.input}
            rows={4}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <input
            className={`${styles.input} ${styles.inputSmall}`}
            type="number"
            placeholder="Small"
            onChange={(e) => changePrice(e, 0)}
          />
          <input
            className={`${styles.input} ${styles.inputSmall}`}
            type="number"
            placeholder="Medium"
            onChange={(e) => changePrice(e, 1)}
          />
          <input
            className={`${styles.input} ${styles.inputSmall}`}
            type="number"
            placeholder="Large"
            onChange={(e) => changePrice(e, 2)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((el) => (
              <span key={el.text} className={styles.extraItem}>
                {el.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Add;
