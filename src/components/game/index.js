"use client";
import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle";

const PacMan = ({ isMobile }) => {
  const [position, setPosition] = useState({ top: 200, left: 400 });
  const [direction, setDirection] = useState("right");
  const [moving, setMoving] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(true);
  const [points, setPoints] = useState(0);
  useEffect(() => {
    const mouthInterval = setInterval(() => {
      if (moving) {
        setMouthOpen((prev) => !prev);
      } else {
        setMouthOpen(true);
      }
    }, 200);

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

  const [map, setMap] = useState([
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
    [1, 0, 0, 6, 0, 0, 0, 6, 0, 6, 0, 6, 0, 6, 0, 0, 6, 6, 6, 1],
    [1, 0, 1, 0, 1, 6, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 6, 1, 6, 1],
    [1, 6, 1, 0, 1, 6, 1, 0, 6, 1, 1, 0, 0, 1, 0, 1, 6, 6, 6, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 6, 1, 1, 0, 0, 1, 0, 1],
    [1, 6, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 6, 1, 0, 6, 1, 0, 1, 6, 1, 6, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 6, 1, 0, 1, 0, 1, 6, 1],
    [1, 0, 6, 0, 0, 6, 0, 6, 0, 0, 6, 0, 0, 0, 0, 6, 0, 0, 0, 5],
    [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);
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
  const handleButtonPress = (key) => {
    handleKeyDown({ key }); 
  };
  
  const handleButtonRelease = (key) => {
    handleKeyUp({ key }); 
  };
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (moving) {
        setPosition((prevPosition) => {
          let newLeft = prevPosition.left;
          let newTop = prevPosition.top;

          const rowIndex = Math.floor(newTop / 50);
          const colIndex = Math.floor(newLeft / 50);

          switch (moving) {
            case "up":
              if (map[rowIndex - 1][colIndex] !== 1) {
                newTop = Math.max(0, prevPosition.top - 50);
              }
              break;
            case "left":
              if (map[rowIndex][colIndex - 1] !== 1) {
                newLeft = Math.max(0, prevPosition.left - 50);
              }
              break;
            case "down":
              if (map[rowIndex + 1][colIndex] !== 1) {
                newTop = Math.min(450, prevPosition.top + 50);
              }
              break;
            case "right":
              if (map[rowIndex][colIndex + 1] !== 1) {
                newLeft = Math.min(950, prevPosition.left + 50);
              }
              break;
            default:
              break;
          }
          if (map[rowIndex][colIndex] === 6) {
            setPoints((prevPoints) => prevPoints + 1);
            const newMap = [...map];
            newMap[rowIndex][colIndex] = 0;
            setMap(newMap);
          }

          if (newTop === 400 && newLeft === 950) {
            window.location.href = "/contact";
          }
          if (newTop === 450 && newLeft === 50) {
            window.location.href = "/projects";
          }
          if (newTop === 0 && newLeft === 900) {
            window.location.href = "/skills";
          }
          if (newTop === 0 && newLeft === 50) {
            window.location.href = "/about";
          }
          return { top: newTop, left: newLeft };
        });
      }
    }, 200);

    return () => clearInterval(moveInterval);
  }, [moving]);
  const [scaleFactor, setScaleFactor] = useState(1);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    const updateScaleFactor = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;  
      const widthScale = windowWidth / 2200;
      const heightScale = windowHeight / 500;
      const scale = Math.min(widthScale, heightScale);
      setScaleFactor(scale);
    };
    updateScaleFactor();
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const renderWalls = () => {
    return map.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        cell === 1 ? (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              position: "absolute",
              top: `${rowIndex * 50}px`,
              left: `${colIndex * 50}px`,
              width: "50px",
              height: "50px",
              backgroundColor: "black",
              borderRadius: "0px",
              border: "2px solid blue",
            }}
          />
        ) : cell === 2 ? (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              position: "absolute",
              top: `${rowIndex * 50}px`,
              left: `${colIndex * 50}px`,
              width: "52px",
              height: "52px",
              backgroundColor: "rgba(102, 252, 241)",
              filter: "drop-shadow(0 0 30px rgba(102, 252, 241, 0.8))",
            }}
          >
            <div
              style={{
                position: "relative",
                bottom: 70,
                right: 30,
                textWrap: "nowrap",
                backgroundColor: "transparent",
                scale: isMobile ? 0.3/scaleFactor : 1,
              }}
            >
              <div style={{
                color:"rgba(102, 252, 241, 1)",
                fontSize: isMobile ? `${200*scaleFactor}px` : "55px",
                display: "inline-block", 
              }} >
                ABOUT ME
              </div>
              
            </div>
          </div>
        ) : cell === 3 ? (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              position: "absolute",
              top: `${rowIndex * 50}px`,
              left: `${colIndex * 50}px`,
              width: "52px",
              height: "52px",
              backgroundColor: "rgba(102, 252, 241)",
              filter: "drop-shadow(0 0 30px rgba(102, 252, 241, 0.8))",
            }}
          >
            <div
              style={{
                position: "relative",
                top: 60,
                right: 30,
                textWrap: "nowrap",
                backgroundColor: "transparent",
                scale: isMobile ? 0.3/scaleFactor : 1,
              }}
            >
              <div style={{
                color:"rgba(102, 252, 241, 1)",
                fontSize: isMobile ? `${200*scaleFactor}px` : "55px",
                display: "inline-block", 
              }} >
                PROJECTS
              </div>
            </div>
          </div>
        ) : cell === 4 ? (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              position: "absolute",
              top: `${rowIndex * 50}px`,
              left: `${colIndex * 50}px`,
              width: "52px",
              height: "52px",
              backgroundColor: "rgba(102, 252, 241)",
              filter: "drop-shadow(0 0 30px rgba(102, 252, 241, 0.8))",
            }}
          >
            <div
              style={{
                position: "relative",
                bottom: 70,
                right: 50,
                textWrap: "nowrap",
                backgroundColor: "transparent",
                scale: isMobile ? 0.3/scaleFactor : 1,
              }}
            >
              <div style={{
                color:"rgba(102, 252, 241, 1)",
                fontSize: isMobile ? `${200*scaleFactor}px` : "55px",
                display: "inline-block", 
              }} >
                SKILLS
              </div>
            </div>
          </div>
        ) : cell === 5 ? (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              position: "absolute",
              top: `${rowIndex * 50}px`,
              left: `${colIndex * 50}px`,
              width: "52px",
              height: "52px",
              backgroundColor: "rgba(102, 252, 241)",
              filter: "drop-shadow(0 0 30px rgba(102, 252, 241, 0.8))",
            }}
          >
            <div
              style={{
                position: "relative",
                top: 110,
                left: -200,
                textWrap: "nowrap",
                backgroundColor: "transparent",
                scale: isMobile ? 0.3/scaleFactor : 1,
              }}
            >
              <div style={{
                color:"rgba(102, 252, 241, 1)",
                fontSize: isMobile ? `${200*scaleFactor}px` : "55px",
                display: "inline-block", 
              }} >
                CONTACT
              </div>
            </div>
          </div>
        ) : cell === 6 ? (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              position: "absolute",
              top: `${rowIndex * 50}px`,
              left: `${colIndex * 50}px`,
              width: "52px",
              height: "52px",
              scale: "0.4",
              borderRadius: "50%",
              backgroundColor: "#FFFF00",
              filter: "drop-shadow(0 0 10px rgba(255, 255, 0, 0.8))",
            }}
          ></div>
        ) : null
      )
    );
  };
  return (
    <div
      style={{
        scale: isMobile ? `${scaleFactor}` : "1",
        alignSelf: "center",
        position: "relative",
        bottom: isMobile ? "15vh" : "-5vh",
        width: "1000px",
        height: "500px",
        marginBottom: "5%",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          width: "100%",
          top: "-15%",
          fontSize: "40px",
          color: "rgb(255, 255, 0)",
        }}
      >
        SCORE : {points}
      </div>

      {renderWalls()}
      <div
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
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
                  ? "50%"
                  : direction === "left"
                  ? "25%"
                  : "0%",
              left:
                direction === "right"
                  ? "51%"
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
      {isMobile && (
        <div
          style={{
            display: "flex",
            width: "100%",
            position: "absolute",
            zIndex: 50,
            bottom: "-70%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              scale: 4,
              gap: "10px",
              backgroundColor:"transparent",
            }}
          >
            <div>
              <div
                onTouchStart={() => handleButtonPress("w")}
                onTouchEnd={() => handleButtonRelease("w")}
              >
                <PageTitle text={"W"} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div
                onTouchStart={() => handleButtonPress("a")}
                onTouchEnd={() => handleButtonRelease("a")}
              >
                <PageTitle text={"A"} />
              </div>
              <div
                onTouchStart={() => handleButtonPress("s")}
                onTouchEnd={() => handleButtonRelease("s")}
              >
                <PageTitle text={"S"} />
              </div>
              <div
                onTouchStart={() => handleButtonPress("d")}
                onTouchEnd={() => handleButtonRelease("d")}
              >
                <PageTitle text={"D"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PacMan;
