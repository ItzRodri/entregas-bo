import Image from "next/image";

export default function ServicePage () {
  return (
    <div className="container mx-auto w-full px-4 md:px-10 py-6 bg-white">
      {/* Contenedor principal */}
      <div className="flex flex-wrap justify-around items-center gap-8">
        {/* Tarjeta 1 */}
        <div className="flex items-center space-x-3 text-center">
          <img src="/computer.svg" alt="Tecnología" className="w-12 h-12" />
          <p className="text-sm md:text-base font-medium">
            Insumos de alta calidad y mejor precio
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex items-center space-x-3 text-center">
          <img src="/shield.svg" alt="Garantía" className="w-12 h-12" />
          <p className="text-sm md:text-base font-medium">Garantía</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex items-center space-x-3 text-center">
          <img src="/truck.svg" alt="Envío gratuito" className="w-12 h-12" />
          <p className="text-sm md:text-base font-medium">
            Envío gratuito por encima de bs.100
          </p>
        </div>

        {/* Tarjeta 4 */}
        <div className="flex items-center space-x-3 text-center">
          <img src="/cronometer.svg" alt="Soporte 24/7" className="w-12 h-12" />
          <p className="text-sm md:text-base font-medium">24/7 Soporte</p>
        </div>
      </div>
    </div>
  );
};
