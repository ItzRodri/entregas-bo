import React from "react";
import Image from "next/image";

const HeroBannerPrimary: React.FC = () => {
  return (
    <div className="container mx-auto w-full px-4 md:px-10 py-6 relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#1E2D3D] to-[#FF6B5E] text-white rounded-lg p-6 md:p-12 overflow-hidden">
      {/* Contenido de Texto */}
      <div className="z-10 space-y-4 md:space-y-6 transform translate-x-[-50px] opacity-0 animate-fade-in-left duration-700 delay-200">
        <h1 className="text-3xl md:text-5xl font-bold">RELOJ INTELIGENTE</h1>
        <p className="text-sm md:text-lg">Varios diseños y marcas</p>
        <button className="bg-[#FF5A3C] text-white px-6 py-2 rounded-md hover:bg-[#e14e34] transition duration-300">
          Vista
        </button>
      </div>

      {/* Imágenes del Producto */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
        <div className="relative w-[500px] h-[300px] md:w-[500px] md:h-[300px]">
          <Image
            src="/watch.png"
            alt="Reloj negro"
            layout="fill"
            className="absolute animate-float duration-700 delay-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBannerPrimary;
