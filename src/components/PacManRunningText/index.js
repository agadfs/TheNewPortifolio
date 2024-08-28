"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./pacman.module.css";

export default function PacManRunningOnText({
  textToRunOn,
  textType,
  textColor,
}) {

  const [pacManStartReset, setPacManStartReset] = useState(-200);
  const [totalAmountOfLines, setTotalAmountOfLines] = useState(0);
  const [stopPacman, setStopPacman] = useState(false);
  const [screenHeight, setScreenHeight] = useState();
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenHeight2 = window.screen.height;
      const screenWidth2 = window.screen.width;
      if (screenHeight2 && screenWidth2) {
        setScreenHeight(screenHeight2);
        setPacManStartReset(200);
        const textHeight = textRef.current.scrollHeight;
        const lineHeightPx = screenHeight * 0.02; 
        const totalAmountOfLines = Math.ceil(textHeight / lineHeightPx - 3);
        setTextHeight(textHeight);
        setTotalAmountOfLines(totalAmountOfLines);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenHeight]);

  

  return (
    <div className={styles.container}>
      <div
        className={styles.text}
        style={{ color: textColor, lineHeight: "2vh", fontSize: "2vh", padding:"5%" }}
        ref={textRef}
      >
        <div
          style={{
            left: `${pacManStartReset}%`,
            position: "absolute",
            top: "0%",
            height: `${textHeight}px`,
            width: `${textHeight}px`,
            backgroundColor: "yellow",
            borderRadius: "50%",
            display: stopPacman ? "none" : "block",
            transition: `left 4s linear`,
            zIndex: 2,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <div className={styles.pacman}>
              <div className={styles.pacmanbody}>
                <div
                  style={{
                    height: `${textHeight}px`,
                    width: `${textHeight}px`,
                  }}
                  className={styles.mouth}
                ></div>
              </div>
            </div>
            <div
              className={styles.eye}
              style={{
                height: `${textHeight * 0.2}px`,
                width: `${textHeight * 0.2}px`,
              }}
            ></div>
            <div
              className={styles.actualPacManBody}
              style={{
                height: `${textHeight}px`,
                width: `${textHeight}px`,
              }}
            ></div>
            <div
              className={styles.texthider}
              style={{
                height: `${textHeight}px`,
                width: `400vw`,
                left: `${textHeight/2}px`,
              }}
            ></div>
          </div>
        </div>
        {textToRunOn}
      </div>
    </div>
  );
}
