"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
export default function ButtonTextAnimator({ text, backgroundColor }) {
  const [wordAnimated, setWordAnimated] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordAnimated((prev) => (prev + 1) % (text.length));
    }, 1000); // Adjust timing as needed
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
    className={styles.animatecharcter}
      style={{
        fontSize: "3vh",
        backgroundColor: backgroundColor,
        display: "inline-block", 
      }}
    >
      {text}
    </div>
  );
}