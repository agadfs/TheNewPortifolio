"use client";

export default function AboutText({ text, fontSizeVw }) {
  return (
    <div
      style={{
        fontSize: fontSizeVw ? `${fontSizeVw}vh` : "6vh",
        color: "white",
        boxShadow: "rgba(27, 69, 66, 0.6) 0px 0px 60px -12px inset, rgba(102, 252, 241, 0.2) 0px 18px 36px -18px inset",
        padding: "2vh",
  
        borderRadius: "10px",
        width: "fit-content",
        alignSelf: "center",
        userSelect: "none",
        msUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        fontWeight: "lighter",
        fontStyle: "normal",
        fontFamily: "Squada One",
        lineHeight: "2.5vh",
        
      }}
    >
      {text}
    </div>
  );
}
