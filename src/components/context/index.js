"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    mobile: false,
  });

  if (typeof window !== "undefined") {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1000;
      setState((prevState) => ({
        ...prevState,
        mobile: isMobile,
      }));
    };
  
    // create an event listener
    useEffect(() => {
      
      handleResize(); // Check size on initial load
      window.addEventListener("resize", handleResize);
  
      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty array as dependency to run this effect only once
  }

  

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};