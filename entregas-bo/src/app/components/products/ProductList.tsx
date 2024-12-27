import React from "react";
import ProductCard from "./ProductCard"; // Asegúrate de que la ruta sea correcta.

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // Precio original para calcular el descuento
  discount?: number; // Porcentaje de descuento
  imageUrl: string; // URL de la imagen del producto
  rating?: number; // Puntuación del producto
  isFavorite?: boolean; // Indica si el producto es favorito
}

interface ProductListProps {
  products: Product[]; // Lista de productos
  onAddToCart: (productId: number) => void; // Función para manejar la acción de añadir al carrito
  onToggleFavorite: (productId: number) => void; // Función para manejar la acción de marcar como favorito
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product} // Pasa el producto completo al componente
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;
