"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "../../common/inputprops";
import CardSelectionModal from "../../common/cardselectionmodal";

const PaymentComponent: React.FC = () => {
  const [showCardModal, setShowCardModal] = useState(false);

  const handleEditCreditCard = () => {
    console.log("Edit credit card clicked!");
  };

  const handleEditBillingAddress = () => {
    console.log("Edit billing address clicked!");
  };

  const handleSaveCard = () => {
    setShowCardModal(false);
    // Aquí puedes manejar la lógica después de guardar la tarjeta
  };

  const getIconPath = (iconName: string) => `/icons/${iconName}.svg`;

  return (
    <div className="w-full max-w-3xl p-8">
      <h2 className="text-2xl font-semibold text-gray-900">Pago</h2>

      {/* Payment Methods */}
      <div className="space-y-6">
        {/* Credit Card Option */}
        <div className="flex items-center justify-between">
          <div className="relative flex-grow">
            <label className="flex items-center justify-between p-4 rounded-lg border cursor-pointer">
              <input
                type="radio"
                name="shipping"
                className="form-radio text-blue-500 focus:ring-blue-500"
              />
              <div className="flex flex-row justify-between items-center ml-4 w-full">
                <span className="font-medium text-gray-900">
                  Tarjeta de Credito
                </span>
                <div className="flex items-center gap-3">
                  <Image
                    src={getIconPath("americanexpress")}
                    alt="American Express"
                    width={50}
                    height={40}
                  />
                </div>
              </div>
            </label>
          </div>
          {/* Plus Button */}
          <button 
            className="ml-6"
            onClick={() => setShowCardModal(true)}
          >
            <Image
              src="/plus.svg"
              alt="Agregar nueva tarjeta"
              width={62}
              height={62}
            />
          </button>
        </div>

        {/* PayPal Option */}
        <div className="relative">
          <label className="flex items-center justify-between p-4 rounded-lg border cursor-pointer">
            <input
              type="radio"
              name="shipping"
              className="form-radio text-blue-500 focus:ring-blue-500"
            />
            <div className="items-center ml-4 w-full">
              <div className="flex items-center gap-3">
                <Image
                  src="/paypal.svg"
                  alt="PayPal"
                  width={50}
                  height={40}
                />
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Dirección de facturación
        </h2>
        <div className="relative">
          <CustomInput
            label=""
            placeholder="Ingrese su dirección"
            value="Misma dirección de envío"
            icon=""
            editable={true}
            onEdit={handleEditBillingAddress}
          />
        </div>
      </div>

      {/* Card Selection Modal */}
      <CardSelectionModal
        isOpen={showCardModal}
        onClose={() => setShowCardModal(false)}
        onSave={handleSaveCard}
      />
    </div>
  );
};

export default PaymentComponent;
