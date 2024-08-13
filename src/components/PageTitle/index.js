"use client";

export default function PageTitle({ text }) {
  return (
    <div
      style={{
        fontSize: "4vh",
        color: "#66FCF1",
        boxShadow: "rgba(27, 69, 66, 0.3) 0px 30px 60px -12px inset, rgba(102, 252, 241, 0.8) 0px 18px 36px -18px inset",
        padding: "0.5vh 1vh",
        borderRadius: "10px",
        width: "fit-content",
        alignSelf: "center",
      }}
    >
      {text}
    </div>
  );
}
