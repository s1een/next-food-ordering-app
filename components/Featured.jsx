import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = ["/img/fe1.jpg", "/img/fe2.jpg", "/img/fe3.jpg"];
  const [slide, setSlide] = useState(0);
  function handleArrow(direction) {
    if (direction === "l") {
      setSlide(slide !== 0 ? slide - 1 : 2);
    }
    if (direction === "r") {
      setSlide(slide !== 2 ? slide + 1 : 0);
    }
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="left-arrow-btn"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.ImgContainer}>
            <Image
              src={img}
              alt="slider-img"
              layout="fill"
              // objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src="/img/arrowr.png"
          alt="left-arrow-btn"
          layout="fill"
          onClick={() => handleArrow("r")}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
