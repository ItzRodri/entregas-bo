"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ButtonsFooter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mostrar el botón "Arrow Up" al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-8 flex flex-col space-y-4 items-center z-50">
      {/* Botón de Chat */}
      <a
        href="/contact" // Cambia la ruta a la página de chat o contacto
        className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-md transition duration-300"
        aria-label="Online chat"
      >
        <Image src="/onlinechat.svg" alt="Chat" width={24} height={24} />
      </a>

      {/* Botón de Scroll al Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow-md transition duration-300"
          aria-label="Scroll to top"
        >
          <Image src="/arrowUp.svg" alt="Scroll to Top" width={24} height={24} />
        </button>
      )}
    </div>
  );
};

export default ButtonsFooter;
