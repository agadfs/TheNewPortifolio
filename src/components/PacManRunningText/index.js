"use client";
import React, { useEffect, useRef } from "react";
import styles from "./pacman.module.css";

export default function PacManRunningOnText({
  textToRunOn,
  textType,
  textColor,
}) {
  const textRef = useRef(null);
  const pacmanRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const pacmanElement = pacmanRef.current;
    const textWidth = textElement.clientWidth;
    const animationDuration = 2000; // Duração da animação em milissegundos

    textElement.style.visibility = "visible"; // Faz o texto ficar visível
    textElement.style.color = "transparent"; // Inicialmente, o texto é transparente

    let startTime = null;

    const movePacman = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const pacmanX = Math.min((progress / animationDuration) * textWidth, textWidth);
      pacmanElement.style.transform = `translateX(${pacmanX}px)`;

      const visibleChars = Math.floor((pacmanX / textWidth) * textToRunOn.length);

      // Revela apenas os caracteres que o Pac-Man já passou
      const visibleText = textToRunOn.slice(0, visibleChars);
      const hiddenText = textToRunOn.slice(visibleChars);

      textElement.innerHTML = `<span style="color: ${textColor || 'white'}">${visibleText}</span><span style="color: transparent">${hiddenText}</span>`;

      if (pacmanX < textWidth) {
        requestAnimationFrame(movePacman);
      } else {
        pacmanElement.style.transition = "opacity 0.5s ease-out";
        pacmanElement.style.opacity = 0; // Faz o Pac-Man desaparecer
      }
    };

    requestAnimationFrame(movePacman);

    return () => {
      pacmanElement.style.transform = "translateX(0)"; // Reseta a posição do Pac-Man ao desmontar o componente
      pacmanElement.style.opacity = 1; // Reseta a opacidade ao desmontar o componente
    };
  }, [textToRunOn, textColor]);

  return (
    <div className={styles.container}>
      <div className={styles.pacmanbody} ref={pacmanRef}>
        <div className={styles.pacman}>
          <div className={styles.mouth}></div>
        </div>
        <div className={styles.eye}></div>
      </div>
      <div className={styles.text} ref={textRef}>
        {textToRunOn}
      </div>
    </div>
  );
}
