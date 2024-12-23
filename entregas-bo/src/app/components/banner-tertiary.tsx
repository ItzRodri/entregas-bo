import React from "react";
import Image from "next/image";

const HeroBannerSecondary: React.FC = () => {
  return (
    <div className="container mx-auto my-10 w-[90%] md:w-[95%] px-6 md:px-8 py-10 relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#E44F46] to-[#5FC1E7] text-white rounded-lg overflow-hidden min-h-[400px]">
      {/* Contenido de Texto */}
      <div className="z-10 space-y-4 md:space-y-6 animate-fade-in-left duration-700 delay-200">
        <h1 className="text-3xl md:text-5xl font-bold">DESCUBRE NUESTRAS OFERTAS</h1>
        <p className="text-sm md:text-lg">¡Precios increíbles para ti!</p>
        <button className="bg-[#FCCF42] text-white px-6 py-3 rounded-md hover:bg-[#ffd34a] transition duration-300">
          Ver Ofertas
        </button>
      </div>

      {/* Imágenes del Producto */}
      <div className="w-full md:w-1/2 flex justify-evenly items-center mt-6 md:mt-0 relative">
        <div className="relative w-1/3">
          <Image
            src="/libros/Actividades-de-M1.png"
            alt="Libro 1"
            layout="responsive"
            width={150}
            height={200}
            className="animate-float duration-700 delay-200"
          />
        </div>
        <div className="relative w-1/3">
          <Image
            src="/libros/Actividades-de-M1.png"
            alt="Libro 2"
            layout="responsive"
            width={150}
            height={200}
            className="animate-float duration-700 delay-200"
          />
        </div>
        <div className="relative w-1/3">
          <Image
            src="/libros/Actividades-de-M1.png"
            alt="Libro 3"
            layout="responsive"
            width={150}
            height={200}
            className="animate-float duration-700 delay-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSecondary;