"use client";
import { FC } from 'react';
import CustomButton from '../common/button';

interface PaymentDetailsProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({
  subtotal,
  discount,
  shipping,
  total
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-medium mb-6">Detalles del pago</h2>
      
      {/* Detalles de costos */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-gray-600">
          <span>Subtotal</span>
          <span>Bs.{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center text-gray-600">
          <span>Descuento</span>
          <span className="text-red-500">-${discount.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center text-gray-600">
          <span>Costo de envío</span>
          <span>Bs.{shipping.toFixed(2)}</span>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium">Total</span>
            <span className="text-xl font-medium">Bs.{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {/* Botón de continuar */}
      <div className="mt-6">
      <CustomButton
          text="Continuar al pago"
          variant="primary"
          size="medium"
          onClick={() => {
            // Lógica para continuar al pago
          }}
        />
      </div>
    </div>
  );
};

export default PaymentDetails;
