import React from "react";
import Image from "next/image";

const HeroBannerPrimary: React.FC = () => {
  return (
    <div className="container mx-auto my-10  w-full px-4 md:px-10 py-6 relative flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-r from-[#5FC1E7] to-[#007D3D] text-white rounded-lg p-6 md:p-12 overflow-hidden">
      {/* Contenido de Texto */}
      <div className="z-10 space-y-4 md:space-y-6 transform translate-x-[-50px] opacity-0 animate-fade-in-left duration-700 delay-200">
        <h1 className="text-3xl md:text-5xl font-bold">RESERVA CON NOSOTROS</h1>
        <p className="text-sm md:text-lg">Varios diseños y marcas</p>
        <button className="bg-[#E44F46] text-white px-6 py-4 rounded-md hover:bg-[#ff00007a] transition duration-300">
          Mas informacion 
        </button>
      </div>

      {/* Imágenes del Producto */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 ">
        <div className="relative w-[500px] h-[300px] md:w-[500px] md:h-[300px] flex">
        <Image
            src="/libros/Actividades-de-M1.png"
            alt="Reloj negro"
            width={300}
            height={300}
            layout="fixed"
            className=""
          />
                    <Image
            src="/libros/Actividades-de-M1.png"
            alt="Reloj negro"
            width={300}
            height={300}
            layout="fixed"
            className=""
          />
                              <Image
            src="/libros/Actividades-de-M1.png"
            alt="Reloj negro"
            width={300}
            height={300}
            layout="fixed"
            className=""
          />

        </div>
      </div>
    </div>
  );
};

export default HeroBannerPrimary;
