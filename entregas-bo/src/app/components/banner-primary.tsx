import React from "react";
import Image from "next/image";

const HeroBannerPrimary: React.FC = () => {
  return (
<div className="container mx-auto my-10 w-[90%] md:w-[95%] px-6 md:px-8 py-6 relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#5FC1E7] to-[#007D3D] text-white rounded-lg overflow-hidden">
  {/* Contenido de Texto */}
  <div className="z-10 space-y-4 md:space-y-6 animate-fade-in-left duration-700 delay-200">
    <h1 className="text-3xl md:text-5xl font-bold">RESERVA CON NOSOTROS</h1>
    <p className="text-sm md:text-lg">Varios diseños y marcas</p>
    <button className="bg-[#E44F46] text-white px-6 py-3 rounded-md hover:bg-[#ff00007a] transition duration-300">
      Más información
    </button>
  </div>

  {/* Imágenes del Producto */}
  <div className="w-full md:w-1/2 flex justify-evenly items-center mt-6 md:mt-0 relative">
        <div className="relative w-1/3">
          <Image
            src="/libros/Actividades-de-M1.png"
            alt="Libro 1"
            width={150}
            height={200}
          />
        </div>
        <div className="relative w-1/3">
          <Image
            src="/libros/Actividades-de-M1.png"
            alt="Libro 2"
            width={150}
            height={200}
          />
        </div>
        <div className="relative w-1/3">
          <Image
            src="/libros/Actividades-de-M1.png"
            alt="Libro 3"
            width={150}
            height={200}
          />
        </div>
  </div>
</div>

  );
};

export default HeroBannerPrimary;
