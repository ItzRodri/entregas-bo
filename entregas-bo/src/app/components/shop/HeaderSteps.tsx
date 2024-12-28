import Image from "next/image";
import { FC } from "react";

interface HeaderStepsProps {
  currentStep: "carrito" | "revisar" | "pago";
}

const HeaderSteps: FC<HeaderStepsProps> = ({ currentStep }) => {
  const isActive = (step: string) => currentStep === step;

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <div className="flex items-center justify-between">
        {/* Paso: Carrito */}
        <div className="flex flex-col items-center">
          <div className="rounded-full flex items-center justify-center border-2">
            <Image
              src={`/cart/${
                isActive("carrito") ? "cart-white.svg" : "cart-gray.svg"
              }`}
              alt="Carrito"
              width={isActive("carrito") ? 72 : 48}
              height={isActive("carrito") ? 72 : 48}
            />
          </div>
          <span
            className={`mt-2 text-sm ${
              isActive("carrito") ? "text-blue-500" : "text-blue-400"
            }`}
          >
            Carro
          </span>
        </div>

        {/* Línea */}
        <div className="flex-1 h-[2px] mx-4 relative">
          <div className="absolute inset-0 bg-gray-300" />
          <div className={`absolute inset-0 bg-blue-500 transition-all duration-300 ${
            currentStep === 'carrito' ? 'w-2/4' : 'w-full'
          }`} />
        </div>

        {/* Paso: Revisar */}
        <div className="flex flex-col items-center">
          <div className="rounded-full flex items-center justify-center border-2">
            <Image
              src={`/cart/${
                isActive("revisar") ? "truck-white.svg" : isActive("pago") ? "truck-blue.svg" : "truck-gray.svg"
              }`}
              alt="Revisar"
              width={isActive("revisar") ? 72 : 48}
              height={isActive("revisar") ? 72 : 48}
            />
          </div>
          <span
            className={`mt-2 text-sm ${
              isActive("revisar") ? "text-blue-500" : isActive("pago") ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {isActive("carrito") ? "Pagar" : isActive("pago") ? "Finalizar compra" : "Revisar"}
          </span>
        </div>

        {/* Línea */}
        <div className="flex-1 h-[2px] mx-4 relative">
          <div className="absolute inset-0 bg-gray-300" />
          <div className={`absolute inset-0 bg-blue-500 transition-all duration-300 ${
            currentStep === 'revisar' ? 'w-2/4' : currentStep === 'pago' ? 'w-full' : 'w-0'
          }`} />
        </div>

        {/* Paso: Pago */}
        <div className="flex flex-col items-center">
          <div
            className="rounded-full flex items-center justify-center border-2"
          >
            <Image
              src={`/cart/${
                isActive("pago") ? "card-white.svg" : "card-gray.svg"
              }`}
              alt="Pago"
              width={isActive("pago") ? 72 : 48}
              height={isActive("pago") ? 72 : 48}
            />
          </div>
          <span
            className={`mt-2 text-sm ${
              isActive("pago") ? "text-blue-500" : "text-gray-400"
            }`}
          >
            Pago
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderSteps;
