"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./pacman.module.css";

export default function PacManRunningOnText({
  textToRunOn,
  textType,
  textColor,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [pacmanPosition, setPacmanPosition] = useState({ x: 0, y: 0 });
  const [lineHeight, setLineHeight] = useState(0);
  const [isPacmanVisible, setIsPacmanVisible] = useState(true); // Track Pac-Man visibility
  const textRef = useRef(null);

  const calculateLineHeight = () => {
    const screenWidth = window.innerWidth;
    const fontSizeInPx = screenWidth * 0.02;
    console.log(fontSizeInPx) // 2vw in pixels
    return fontSizeInPx; // Assume line-height is 1.2 times the font size
  };

  useEffect(() => {
    const updateLineHeight = () => {
      setLineHeight(calculateLineHeight());
    };

    updateLineHeight(); // Initial calculation
    window.addEventListener("resize", updateLineHeight); // Recalculate on resize

    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  useEffect(() => {
    if (!lineHeight) return; // Wait for lineHeight to be calculated

    let currentIndex = 0;
    let pacmanX = 0;
    let pacmanY = 0;
    const screenWidth = window.innerWidth;
    const speedPerSecond = screenWidth * 0.59;
    const updatesPerSecond = 60;
    const distancePerUpdate = speedPerSecond / updatesPerSecond;

    const intervalId = setInterval(() => {
      const currentChar = textToRunOn[currentIndex];
      setDisplayedText((prev) => prev + currentChar);

      if (
        currentChar === " " &&
        pacmanX + distancePerUpdate >= textRef.current.clientWidth
      ) {
        currentIndex++;
        return;
      }

      if (
        currentChar === "\n" ||
        pacmanX + distancePerUpdate >= textRef.current.clientWidth
      ) {
        pacmanX = 0;
        if(textRef.current.clientWidth <=320){
          pacmanY += lineHeight*0.55;
        }
        if(textRef.current.clientWidth <=375 && textRef.current.clientWidth > 320){
          pacmanY += lineHeight*0.65;
        }
        if(textRef.current.clientWidth <=425 && textRef.current.clientWidth > 375){
          pacmanY += lineHeight*0.38;
        }
        if(textRef.current.clientWidth <=768 && textRef.current.clientWidth > 425){
          pacmanY += lineHeight*0.54;
        }
        if(textRef.current.clientWidth <=1024 && textRef.current.clientWidth > 768){
          pacmanY += lineHeight*0.61;
        }
        if(textRef.current.clientWidth <=1440 && textRef.current.clientWidth > 1024){
          pacmanY += lineHeight*0.624;
        }
        if(textRef.current.clientWidth > 1440){
          pacmanY += lineHeight*0.644;
        }
        
        
      } else {
        pacmanX += distancePerUpdate;
      }

      setPacmanPosition({ x: pacmanX, y: pacmanY });

      currentIndex++;

      // Check if the entire text has been displayed
      if (currentIndex + 1 >= textToRunOn.length) {
        setIsPacmanVisible(false); // Hide Pac-Man
        clearInterval(intervalId);
      }
    }, 400 / updatesPerSecond);

    return () => clearInterval(intervalId);
  }, [textToRunOn, lineHeight]);

  return (
    <div className={styles.container}>
      {isPacmanVisible && ( // Conditionally render Pac-Man
        <div
          className={styles.pacmanbody}
          style={{
            transform: `translate(${pacmanPosition.x}px, ${pacmanPosition.y}px)`,
          }}
        >
          <div className={styles.pacman}>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.eye}></div>
        </div>
      )}
      <div ref={textRef} className={styles.text} style={{ color: textColor }}>
        {displayedText}
      </div>
    </div>
  );
}
