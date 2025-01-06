import { useState } from "react";
import Image from "next/image";

interface MapAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (address: string) => void;
}

export default function MapAddressModal({
  isOpen,
  onClose,
  onConfirm,
}: MapAddressModalProps) {
  const [searchAddress, setSearchAddress] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-2xl mx-auto overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-medium">Editar dirección</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Cerrar</span>✕
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Marca la ubicación en el mapa.
          </p>

          <div className="relative mb-3 sm:mb-4">
            <input
              type="text"
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
              placeholder="HubSpot, 25 Primera Calle"
              className="w-full pl-10 pr-10 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Image 
                src="/search.svg" 
                alt="Buscar" 
                width={18}
                height={18}
                className="w-4 h-4 sm:w-5 sm:h-5" 
              />
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <Image
                src="/closeblue.svg"
                alt="Limpiar búsqueda"
                width={18}
                height={18}
                className="w-4 h-4 sm:w-5 sm:h-5"
                onClick={() => setSearchAddress("")}
              />
            </div>
          </div>

          <div className="h-[250px] sm:h-[400px] bg-gray-100 rounded-lg mb-3 sm:mb-4">
            {/* Aquí va el componente del mapa */}
          </div>

          <button
            onClick={() => onConfirm(searchAddress)}
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors"
          >
            Confirmar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
