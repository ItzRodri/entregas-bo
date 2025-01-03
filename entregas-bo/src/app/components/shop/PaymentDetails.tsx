"use client";
import { FC, useState } from "react";
import CustomButton from "../common/button";
import CartProductItem from "./ProductItem";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  deliveryStatus: string;
  discount?: number;
}

interface PaymentDetail {
  products: Product[];
}

const PaymentDetails: FC<PaymentDetail> = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);

  const updateQuantity = (id: number, quantity: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const subtotal = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const discount = cartProducts.reduce(
    (acc, product) =>
      acc +
      (product.discount
        ? product.price * (product.discount / 100) * product.quantity
        : 0),
    0
  );
  const shipping = 5.99; // Ejemplo de costo de envío
  const total = subtotal - discount + shipping;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 bg-white rounded-lg shadow-sm p-6">
      {/* Columna de productos (lado izquierdo) */}
      <div className="w-full md:w-2/3">
        <h2 className="text-xl font-semibold mb-6">Productos en el carrito</h2>
        <div className="space-y-6">
          {cartProducts.map((product) => (
            <CartProductItem
              key={product.id}
              product={product}
              onUpdateQuantity={updateQuantity}
              onRemove={removeProduct}
            />
          ))}
        </div>
      </div>

      {/* Columna de detalles del pago (lado derecho) */}
      <div className="w-full md:w-1/3 self-start bg-gray-50 p-6 rounded-lg shadow">
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
    </div>
  );
};

export default PaymentDetails;
