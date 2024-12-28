"use client";
import { FC, useState } from 'react';
import CartProductItem from './ProductItem';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  deliveryStatus: string;
}

interface CartProductListProps {
  products: Product[];
}

const CartProductList: FC<CartProductListProps> = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Productos en el carrito</h2>
      <div className="space-y-6">
        {cartProducts.map((product) => (
          <CartProductItem 
            key={product.id}
            product={product}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default CartProductList;