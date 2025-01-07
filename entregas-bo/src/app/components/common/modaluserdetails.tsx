import { useState } from 'react';

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

export default function UserDetailsModal({ isOpen, onClose, onSubmit }: UserDetailsModalProps) {
  const [isRecipient, setIsRecipient] = useState(false);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-xl mx-auto overflow-y-auto max-h-[90vh] sm:max-h-[80vh]">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-medium">Ingrese sus detalles</h2>
            <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
              <span className="sr-only">Cerrar</span>
              ✕
            </button>
          </div>

          <form className="space-y-3 sm:space-y-4">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Nombre completo</label>
              <input
                type="text"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="Jimmy Smith"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Número de teléfono</label>
              <input
                type="tel"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="+12345678910"
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="Nombre de la calle y número de la casa"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="text"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="Ciudad"
              />
              <select className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none">
                <option>Seleccionar región</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="Código postal"
              />
            </div>

            <label className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={isRecipient}
                onChange={(e) => setIsRecipient(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm sm:text-base">Soy el destinatario de mi pedido</span>
            </label>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Espalda
              </button>
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
