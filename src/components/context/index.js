"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    mobile: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const isMobile = window.innerWidth < 1000;
        setState((prevState) => ({
          ...prevState,
          mobile: isMobile,
        }));
      };

      handleResize(); // Verifica o tamanho inicial
      window.addEventListener("resize", handleResize);

      // Cleanup na desmontagem do componente
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Dependência vazia para executar o efeito apenas uma vez

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};