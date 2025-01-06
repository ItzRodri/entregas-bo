import React from "react";
import CustomButton from "../../common/button";

interface Product {
  name: string;
  color: string;
  quantity: number;
  price: number;
  originalPrice?: number; // Precio original, si aplica
  image: string;
}

interface OrderSummaryProps {
  products: Product[];
  discountCode?: string;
  onApplyDiscount: (code: string) => void;
  onContinue: () => void;
  text: string;
  subtotal: number;
  discount: number;
  shippingCost: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  products,
  discountCode = "",
  onApplyDiscount,
  onContinue,
  text,
  subtotal,
  discount,
  shippingCost,
  total,
}) => {
  const [code, setCode] = React.useState(discountCode);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold mb-6">Tu Orden</h2>

      {/* Lista de productos */}
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex flex-col flex-grow">
              <span className="font-medium text-gray-900">{product.name}</span>
              <span className="text-sm text-gray-500">{product.color}</span>
              <span className="text-sm text-gray-500">x{product.quantity}</span>
            </div>
            <div className="text-right">
              {product.originalPrice && (
                <span className="line-through text-sm text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <div className="text-gray-900">${product.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Código de descuento */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
        <input
          type="text"
          placeholder="código de descuento"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <CustomButton
          text="Solicitar"
          variant="outline"
          onClick={() => onApplyDiscount(code)}
          className="w-full md:w-auto"
        />
      </div>

      {/* Resumen de precios */}
      <div className="mt-6 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Bs.{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Descuento</span>
          <span className="text-green-600">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Costo de envío</span>
          <span>Bs.{shippingCost.toFixed(2)}</span>
        </div>
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
          text={text}
          variant="primary"
          size="large"
          className="w-full"
          onClick={onContinue}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
