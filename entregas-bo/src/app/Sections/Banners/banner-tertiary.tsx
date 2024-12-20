import React from "react";
import Image from "next/image";

const HeroBannerTertiary: React.FC = () => {
  return (
    <div className="container mx-auto my-10 w-[90%] md:w-[95%] px-6 md:px-8 py-10 relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#E44F46] to-[#5FC1E7] text-white rounded-lg overflow-hidden">
      {/* Contenido de Texto */}
      <div className="z-10 space-y-4 md:space-y-6 animate-fade-in-left duration-700 delay-200">
        <h1 className="text-3xl md:text-5xl font-bold">
          ¡NOVEDADES EXCLUSIVAS!
        </h1>
        <p className="text-sm md:text-lg">Encuentra productos únicos.</p>
        <button className="bg-[#FCCF42] text-white px-6 py-3 rounded-md hover:bg-[#ffd34a] transition duration-300">
          Descúbrelo ahora
        </button>
      </div>

      {/* Imágenes del Producto */}
      <div className="w-full md:w-1/2 flex justify-evenly items-center mt-6 md:mt-0 relative">
        <Image
          src="/libros/Actividades-de-M1.png"
          alt="Libro 1"
          width={150}
          height={200}
          className="absolute animate-float duration-700 delay-200"
          style={{ left: "0%" }}
        />
        <Image
          src="/libros/Actividades-de-M1.png"
          alt="Libro 2"
          width={150}
          height={200}
          className="absolute animate-float duration-700 delay-200"
          style={{ left: "33%" }}
        />
        <Image
          src="/libros/Actividades-de-M1.png"
          alt="Libro 3"
          width={150}
          height={200}
          className="absolute animate-float duration-700 delay-200"
          style={{ left: "66%" }}
        />
      </div>
    </div>
  );
};

export default HeroBannerTertiary;