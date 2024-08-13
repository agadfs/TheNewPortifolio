"use client";

import { useState } from "react";
import ButtonTextAnimator from "../ButtonAnimator";

export default function Hamburguer1() {
  const handleClick = () => {
    if (link) {
      window.location.href = `/${link}`;
    }
  };
  
  return (
    <div>Hamburuger</div>
  );
}
