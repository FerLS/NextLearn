"use client";

import { useEffect } from "react";




export default function PageLoader() {


  useEffect(() => {
    const handleUnload = () => {
      document.body.classList.replace('fadein', 'fadeout'); // Reemplaza la clase CSS 'fade-in' por 'fade-out' en el elemento body
      setTimeout(() => {
      }, 200); // Ajusta el tiempo de espera para que coincida con la duración de la animación de fade-out en CSS
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
}