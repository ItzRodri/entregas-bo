import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./button";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/\D/g, "") // Elimina caracteres no numéricos
      .replace(/^(\d{2})(\d{0,2})$/, "$1/$2"); // Formato MM/YY
    setExpirationDate(formattedValue);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, ""); // Solo números
    setCvv(numericValue.slice(0, 3)); // Máximo 3 caracteres
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Add your payment method</h2>
          <button
            className="p-2 rounded-full hover:bg-gray-200"
            onClick={onClose}
          >
            <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Card Logos */}
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-600 mb-4">
              Credit or debit cards <br />
              <span className="text-xs text-gray-500">
                Tech Heim accepts major credit and debit cards.
              </span>
            </p>
            <Image
              src="/icons/visa.svg"
              alt="Visa"
              width={40}
              height={25}
              className=""
            />
            <Image
              src="/icons/mastercard.svg"
              alt="MasterCard"
              width={40}
              height={25}
              className=""
            />
            <Image
              src="/icons/americanexpress.svg"
              alt="American Express"
              width={40}
              height={25}
              className=""
            />
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Card number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Name on card"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                maxLength={5} // MM/YY tiene un máximo de 5 caracteres
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={handleCvvChange}
                maxLength={3} // Limitar a 3 dígitos
                className="w-4/5 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <CustomButton
                text="Cancel"
                variant="outline"
                size="medium"
                onClick={() => alert("Cancelled")}
              />
              <CustomButton
                text="Save"
                variant="primary"
                size="medium"
                onClick={() => alert("Saved")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
