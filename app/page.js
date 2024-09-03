"use client";
import { AppContext } from "@/src/components/context";
import PacMan from "@/src/components/game";
import PageTitle from "@/src/components/PageTitle";
import Link from "next/link";
import { useContext } from "react";

export default function HomePage() {
  const { state, setState } = useContext(AppContext);
  return (
    <div
      style={{
        gap: "15px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <PageTitle text="Home Page" />

      <p style={{ color: "rgba(102, 252, 241, 0.4)" }}>
        {" "}
        {state
          ? "To move, press and hold the buttons at your screen"
          : "To move, press and hold W-A-S-D key on your keyboard"}{" "}
      </p>
      <PacMan isMobile={state.mobile} />
      
    </div>
  );
}
