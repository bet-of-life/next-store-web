import { useEffect, useState } from "react";
import React from "react";
export function useWindowDimensions() {
  const isClient = typeof window !== 'undefined';

  function getWindowDimensions() {
    if (isClient) {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }
    return { width: 0, height: 0 }; // Ou algum valor padrão que faça sentido para o seu caso
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  return windowDimensions;
}