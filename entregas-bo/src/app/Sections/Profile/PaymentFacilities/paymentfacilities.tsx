import React, { useState } from 'react';
import CustomInput from '@/app/components/common/inputprops';

const PaymentFacilities: React.FC = () => {
  const [paymentData, setPaymentData] = useState({
    card: '',
    paypal: '',
  });

  const handleEdit = (field: string) => {
    console.log(`Edit ${field}`);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-semibold mb-6">Pago e Instalaciones</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <CustomInput
            label=""
            placeholder="Ingrese los datos de su tarjeta"
            value={paymentData.card}
            icon=""
            editable={true}
            onEdit={() => handleEdit("card")}
          />
          <div className="flex space-x-2">
            <img
              src="/icons/americanexpress.svg"
              alt="American Express"
              width={32}
              height={32}
              className=""
            />
            <img
              src="/icons/mastercard.svg"
              alt="MasterCard"
              width={32}
              height={32}
              className=""
            />
            <img
              src="/icons/visa.svg"
              alt="Visa"
              width={32}
              height={32}
              className=""
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CustomInput
            label=""
            placeholder="Ingrese su cuenta de PayPal"
            value={paymentData.paypal}
            icon=""
            editable={true}
            onEdit={() => handleEdit("paypal")}
          />
          <div className="flex space-x-2">
            <img
              src="/icons/paypal.svg"
              alt="PayPal"
              width={32}
              height={32}
              className=""
            />
          </div>
        </div>
        <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800">Pagos a plazos</h3>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          Administra tu cuota &rarr;
        </a>
      </div>
      </div>
    </div>
  );
};

export default PaymentFacilities;