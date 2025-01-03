import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  deliveryStatus: string;
  discount?: number;
}

const useCart = (initialProducts: Product[]) => {
  const [cartProducts, setCartProducts] = useState(initialProducts);

  const updateQuantity = (id: string, quantity: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const removeProduct = (id: string) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const calculateSubtotal = () => {
    return cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    return cartProducts.reduce(
      (acc, product) =>
        acc +
        (product.discount
          ? product.price * (product.discount / 100) * product.quantity
          : 0),
      0
    );
  };

  const calculateTotal = (shipping: number) => {
    return calculateSubtotal() - calculateDiscount() + shipping;
  };

  useEffect(() => {
    // Aquí puedes agregar lógica para guardar el carrito en localStorage si es necesario
  }, [cartProducts]);

  return {
    cartProducts,
    updateQuantity,
    removeProduct,
    calculateSubtotal,
    calculateDiscount,
    calculateTotal,
  };
};

export default useCart;
