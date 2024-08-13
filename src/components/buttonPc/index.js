"use client";

import { useState } from "react";
import ButtonTextAnimator from "../ButtonAnimator";

export default function Button1({
  link,
  text,
  textOnHover,
  colorBorder,
  colorText,
  colorBackground,
  size
}) {
  const handleClick = () => {
    if (link) {
      window.location.href = `/${link}`;
    }
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`button ${isHovered ? "hovered" : ""}`}
      style={{
        border: `2px solid ${colorBorder}`,
        width: size ? `${size}px`: "fit-content",
        padding: "20px",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "500",
        fontSize: "20px",
        textWrap: "nowrap",
        overflow: "hidden",
        color: !isHovered ? colorText : colorBackground,
        backgroundColor: !isHovered ? colorBackground : colorBorder,
        cursor: "pointer",
        borderRadius: "10px",
        filter: isHovered ? "brightness(100%)" : "none",
        transition: isHovered
          ? "filter 0.4s ease-in-out, color 0.4s ease-in-out, background-color 0.4s ease-in-out, width 0.4s ease-in-out, transform 0.4s ease-in-out"
          : "filter 1s ease-in-out, color 0.4s ease-in-out, background-color 0.4s ease-in-out, width 1s ease-in-out, transform 1s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {!isHovered ? <ButtonTextAnimator backgroundColor={colorBackground} text={text} /> : <ButtonTextAnimator text={textOnHover} backgroundColor={colorBorder} />}
    </div>
  );
}
