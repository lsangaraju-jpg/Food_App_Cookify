import React, { useEffect, useState } from "react";
import styles from "./container.module.css";

const gifs = [
  "/food1.gif",
  "/food2.gif",
  "/food3.gif",
  "/food4.gif",
  "/food5.gif",
  "/food6.gif",
  "/food7.gif",
  "/food8.gif",
  "/food9.gif",
  "/food10.gif",
  "/food11.gif",
  "/food12.gif",
  "/food13.gif",
  "/food14.gif",
];

function Nav() {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prev) => (prev === gifs.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const titleText = "C🍪😋KiFY";

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h1 className={styles.title}>
          {Array.from(titleText).map((char, index) => (
            <span
              key={index}
              className={styles.letter}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <img
          src={gifs[currentGifIndex]}
          alt="Food animation"
          className={styles.pizza}
        />
      </div>
    </nav>
  );
}

export default Nav;