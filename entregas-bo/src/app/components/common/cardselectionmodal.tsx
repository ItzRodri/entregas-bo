import Image from "next/image";
import PaymentModal from "./modalpayprops";
import { useState } from "react";

interface CardSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export default function CardSelectionModal({
  isOpen,
  onClose,
  onSave,
}: CardSelectionModalProps) {
  if (!isOpen) return null;

  const [showNewCardModal, setshowNewCardModal] = useState(false);

  const handleSaveCard = () => {
    setshowNewCardModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-xl mx-auto overflow-y-auto max-h-[90vh] sm:max-h-[80vh]">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-medium">
              Tus tarjetas de crédito y débito
            </h2>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Cerrar</span>✕
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <label className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 sm:gap-4">
                <input
                  type="radio"
                  name="card"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <Image
                  src="/icons/americanexpress.svg"
                  alt="American Express"
                  width={40}
                  height={40}
                  className="w-8 sm:w-10"
                />
                <span className="text-sm sm:text-base">1002 300004 50006</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0 ml-7 sm:ml-0">
                <span className="text-sm sm:text-base">J SMITH</span>
                <span className="text-sm sm:text-base">12/24</span>
              </div>
            </label>

            <label className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 sm:gap-4">
                <input 
                  type="radio" 
                  name="card" 
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <Image
                  src="/icons/visa.svg"
                  alt="Visa"
                  width={40}
                  height={25}
                  className="w-8 sm:w-10"
                />
                <span className="text-sm sm:text-base">4763 5007 0001 3456</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0 ml-7 sm:ml-0">
                <span className="text-sm sm:text-base">J SMITH</span>
                <span className="text-sm sm:text-base">12/27</span>
              </div>
            </label>

            <button 
              onClick={() => setshowNewCardModal(true)}
              className="flex items-center gap-2 w-full p-3 sm:p-4 border rounded-lg text-gray-600 hover:border-blue-200 transition-colors"
            >
              <span>+</span>
              <span className="text-sm sm:text-base">agregar nueva tarjeta</span>
            </button>
            
            <PaymentModal
              isOpen={showNewCardModal}
              onClose={() => setshowNewCardModal(false)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={onClose}
              className="w-full py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={onSave}
              className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
