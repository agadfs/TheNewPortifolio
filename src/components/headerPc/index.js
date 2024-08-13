"use client";

import { useState } from "react";
import ButtonTextAnimator from "../ButtonAnimator";

export default function HeaderPc1({
  links,
  texts,
  textOnHovers,
  colorBorder,
  colorText,
  colorBackground,
}) {
  const handleClick = (link) => {
    window.location.href = `/${link}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        width: "auto",
        justifyContent: "center",
        marginBottom: "2vh",
        backgroundColor: "rgb(15, 15, 15, 0.1)",
        padding: "20px",
        borderEndEndRadius: "30px",
        borderEndStartRadius: "30px",
        gap: "5%",

      }}
    >
      {texts?.map((text, index) => {
        const [isHovered, setIsHovered] = useState(false);
        const textOnHover = textOnHovers[index];

        return (
          <div
            key={index}
            className={`button ${isHovered ? "hovered" : ""}`}
            style={{
              border: `2px solid ${colorBorder}`,
              width: !isHovered ? `${10}%` : `${25}%`,
              textAlign: "center",
              padding: "20px",
              fontWeight: "500",
              fontSize: "1.3vw",
              whiteSpace: "nowrap",
              overflow: "hidden",
              color: !isHovered ? colorText : "#1F2833",
              backgroundColor: !isHovered ? colorBackground : colorBorder,
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "10px",
              filter: "drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))",
              transition:
                "filter 0.4s ease-in-out, color 0.4s ease-in-out, background-color 0.4s ease-in-out, width 0.4s ease-in-out, transform 0.4s ease-in-out",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleClick(links[index])}
          >
            
            {!isHovered ? <ButtonTextAnimator backgroundColor={colorBackground} text={text} /> : <ButtonTextAnimator text={textOnHover} backgroundColor={colorBorder} />}
          </div>
        );
      })}
    </div>
  );
}
