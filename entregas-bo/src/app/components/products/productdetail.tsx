import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // Precio original para calcular el descuento
  discount?: number; // Porcentaje de descuento
  imageUrl: string; // URL de la imagen del producto
  rating?: number; // Puntuación del producto
  isFavorite?: boolean; // Indica si el producto es favorito
  description?: string; // Descripción del producto
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="container mx-auto p-4">
      <button onClick={onBack} className="mb-4 text-blue-500">
        Volver a la lista
      </button>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
