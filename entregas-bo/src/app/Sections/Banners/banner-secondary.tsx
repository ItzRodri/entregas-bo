import React from "react";
import Image from "next/image";

const BannerSecondary: React.FC = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Banner del iPhone 15 */}
      <div className="flex flex-col bg-gradient-to-r from-[#1975B9] via-[#1FB6CF] to-[#B0E9C9] text-black rounded-lg p-6 md:p-12 overflow-hidden animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold">Serie iPhone 15</h1>
        <div className="flex space-x-2 mt-4">
          <span className="bg-white text-black px-4 py-1 rounded-md shadow-md">Ocho Días</span>
          <span className="bg-white text-black px-4 py-1 rounded-md shadow-md">Ocho Días</span>
          <span className="bg-white text-black px-4 py-1 rounded-md shadow-md">Ocho Días</span>
          <span className="bg-white text-black px-4 py-1 rounded-md shadow-md">Ocho Días</span>
        </div>
        <p className="mt-4 text-sm md:text-base">
          Se siente bien ser el primero. <br />
          ¡Prepárate para el futuro de los teléfonos inteligentes! Experimenta la
          innovación como nunca antes. Mantente al tanto de la gran preventa del
          iPhone 15.
        </p>
        <button className="bg-[#1D8CF8] text-white mt-6 px-6 py-2 rounded-md hover:bg-[#166ABF] transition duration-300">
          ¡Regístrese ahora!
        </button>
        <div className="relative w-full mt-6 flex justify-center">
          <div className="relative w-[300px] h-[200px] md:w-[378px] md:h-[282px] animate-float">
            <Image
              src="/Iphone.png"
              alt="iPhone 15"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Banner de la PlayStation 5 */}
      <div className="flex flex-col bg-gradient-to-r from-[#FFCF4C] to-[#FFB14C] text-black rounded-lg p-6 md:p-12 overflow-hidden animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold">Play Station 5</h1>
        <p className="mt-4 text-sm md:text-base">Edición Digital + 2TB</p>
        <button className="bg-[#FFAA00] text-white mt-6 px-6 py-2 rounded-md hover:bg-[#E69900] transition duration-300">
          Comprar Ahora
        </button>
        <div className="relative w-full mt-6 flex justify-center">
          <div className="relative w-[300px] h-[200px] md:w-[378px] md:h-[282px] animate-float">
            <Image
              src="/ps5.png"
              alt="Play Station 5"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSecondary;