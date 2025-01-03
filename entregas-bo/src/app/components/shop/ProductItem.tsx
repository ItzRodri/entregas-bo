import Image from "next/image";
import { FC } from "react";

interface CartProductItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    color?: string;
    deliveryStatus: string;
    discount?: number;
  };
  
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartProductItem: FC<CartProductItemProps> = ({
  product,
  onUpdateQuantity,
  onRemove,
}) => {

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border-b border-gray-200 last:border-b-0">
      {/* Imagen del producto */}
      <div className="w-full md:w-32 h-32 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Detalles del producto */}
      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <button
            onClick={() => onRemove(product.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <Image
              src={"/icons/trash.svg"}
              alt="Eliminar"
              width={20}
              height={20}
            />
          </button>
        </div>

        <p className="text-sm text-gray-500">{product.description}</p>

        {product.color && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Color:</span>
            <span className="text-sm">{product.color}</span>
          </div>
        )}

        {/* Controles de cantidad y precio */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
              disabled={product.quantity <= 1}
            >
              -
            </button>
            <span className="w-12 text-center">{product.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
            >
              +
            </button>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold">
              Bs.{(product.price * product.quantity).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">{product.deliveryStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
