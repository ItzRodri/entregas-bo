import React, { useState } from 'react';
import CustomInput from '@/app/components/common/inputprops';
import PaymentModal from '@/app/components/common/modalpayprops';

const PaymentFacilities: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({
    card: '',
    paypal: '',
  });

  const handleEdit = (field: string) => {
    console.log(`Edit ${field}`);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-xl font-semibold text-gray-800">Tarjetas</h2>
      <p className="text-sm text-gray-500 mb-6">administrar métodos de pago</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <CustomInput
            label=""
            placeholder="Tarjetas de crédito o débito"
            value={paymentData.card}
            icon=""
            editable={true}
            onEdit={() => setModalOpen(true)}
          />
          <PaymentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <div className="flex">
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
        <div className="flex items-center">
          <CustomInput
            label=""
            placeholder="PayPal"
            value={paymentData.paypal}
            icon=""
            editable={true}
            onEdit={() => setModalOpen(true)}
          />
          <PaymentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <div className="flex">
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