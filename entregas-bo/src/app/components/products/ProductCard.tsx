import React from "react";
import Image from "next/image";
import CustomButton from "../common/button";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number; // Precio original (para calcular descuento)
    discount?: number; // Porcentaje de descuento
    imageUrl: string; // Imagen del producto
    rating?: number; // Puntuación del producto
    isFavorite?: boolean; // Si está marcado como favorito
  };
  onAddToCart: (productId: number) => void; // Acción al añadir al carrito
  onToggleFavorite: (productId: number) => void; // Acción al marcar como favorito
  onProductClick: (product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    imageUrl: string;
    rating?: number;
    isFavorite?: boolean;
  }) => void; // Acción al hacer clic en la imagen del producto
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  onProductClick,
}) => {
  return (
    <div className="relative border p-4 rounded-lg shadow hover:shadow-md transition-all bg-white">
      {/* Indicador de descuento */}
      {product.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}%
        </div>
      )}

      {/* Botón de favorito */}
      <button
        onClick={() => onToggleFavorite(product.id)}
        className="absolute top-2 right-2"
      >
        <Image
          src={
            product.isFavorite ? "/icons/heart.svg" : "/icons/heart-outline.svg"
          }
          alt="Favorito"
          width={20}
          height={20}
        />
      </button>

      {/* Imagen del producto */}
      <div
        className="mb-4 cursor-pointer"
        onClick={() => onProductClick(product)}
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      </div>

      {/* Nombre del producto */}
      <h4 className="font-semibold text-gray-800 mb-2 truncate">
        {product.name}
      </h4>

      {/* Precios */}
      <div className="flex items-center gap-2 mb-4">
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-lg text-blue-600 font-bold">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Puntuación del producto */}
      {product.rating && (
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
          <Image src="/icons/start.svg" alt="Rating" width={16} height={16} />
          {product.rating}
        </div>
      )}

      {/* Botón para añadir al carrito */}
      <CustomButton
        text="Añadir al carrito"
        variant="outline"
        size="medium"
        icon="/icons/shopping-cart.svg"
        onClick={() => onAddToCart(product.id)}
      />
    </div>
  );
};

export default ProductCard;
