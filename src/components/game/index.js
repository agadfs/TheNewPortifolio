"use client";
import React, { useState, useEffect } from "react";

const PacMan = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [direction, setDirection] = useState("right");
  const [moving, setMoving] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(true);
  
  useEffect(() => {
    
    const mouthInterval = setInterval(() => {
      if(moving){
        setMouthOpen((prev) => !prev);
      }else{
        setMouthOpen(true);
      }
    }, 200); // Alterna o estado a cada 200ms

    return () => clearInterval(mouthInterval);
  }, [moving]);

  const handleKeyDown = (event) => {
    let moveDirection;
    switch (event.key) {
      case "w":
        setDirection("up");
        moveDirection = "up";
        break;
      case "a":
        setDirection("left");
        moveDirection = "left";
        break;
      case "s":
        setDirection("down");
        moveDirection = "down";
        break;
      case "d":
        setDirection("right");
        moveDirection = "right";
        break;
      default:
        break;
    }

    if (moveDirection) {
      setMoving(moveDirection);
    }
  };

  const handleKeyUp = (event) => {
    switch (event.key) {
      case "w":
      case "a":
      case "s":
      case "d":
        setMoving(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (moving) {
        setPosition((prevPosition) => {
          let newLeft = prevPosition.left;
          let newTop = prevPosition.top;

          switch (moving) {
            case "up":
              newTop = Math.max(0, prevPosition.top - 4); // Move 2px por segundo
              break;
            case "left":
              newLeft = Math.max(0, prevPosition.left - 2);
              break;
            case "down":
              newTop = Math.min(92, prevPosition.top + 4);
              break;
            case "right":
              newLeft = Math.min(96, prevPosition.left + 2);
              break;
            default:
              break;
          }

          return { top: newTop, left: newLeft };
        });
      }
    }, 100); // move 0.2% a cada 10ms, equivalente a 2px/s

    return () => clearInterval(moveInterval);
  }, [moving]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "90vw",
        alignSelf: "center",
        height: "100vh",
        marginBottom: "5%",
        backgroundColor: "#000",
      }}
    >
      {/* Círculo (corpo do Pac-Man) */}
      <div
        style={{
          position: "absolute",
          top: `${position.top}%`,
          left: `${position.left}%`,
          width: "50px",
          height: "50px",
          backgroundColor: "yellow",
          borderRadius: "50%",
          transition: "transform 0.1s, top 0.2s, left 0.2s",
        }}
      >
        {mouthOpen && (
          <div
            style={{
              position: "absolute",
              top:
                direction === "right"
                  ? "25%"
                  : direction === "down"
                  ? "55%"
                  : direction === "left"
                  ? "25%"
                  : "0%",
              left:
                direction === "right"
                  ? "55%"
                  : direction === "down"
                  ? "25%"
                  : direction === "left"
                  ? "0%"
                  : "25%",
              width: "50%",
              height: "50%",
              backgroundColor: "black",
              clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
              transform: `rotate(${
                direction === "right"
                  ? 0
                  : direction === "down"
                  ? 90
                  : direction === "left"
                  ? 180
                  : 270
              }deg)`,
              transition: "transform 0.1s",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PacMan;
