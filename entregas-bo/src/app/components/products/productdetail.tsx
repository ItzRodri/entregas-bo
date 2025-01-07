import React from "react";

// Interfaz para los detalles del producto
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // Precio original para calcular el descuento
  discount?: number; // Porcentaje de descuento
  imageUrl: string; // URL de la imagen del producto
  rating?: number; // Puntuación del producto
  isFavorite?: boolean; // Indica si el producto es favorito
  description: {
    [key: string]: string; // JSON de descripción
  };
}

// Props para el componente ProductDetail
interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

// Componente ProductDetail
const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Barra azul */}
      <button onClick={onBack} className="mb-4 text-blue-500">
        Volver a la lista
      </button>
      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {/* Imagen del producto */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 object-cover"
        />

        {/* Detalles del producto */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Descripción estructurada */}
          <div className="text-gray-600">
            <h2 className="text-lg font-bold mb-2">Detalles técnicos:</h2>
            <ul className="list-disc list-inside">
              {Object.entries(product.description).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
