import Image from "next/image";
import React from "react";

const Wishlist = () => {
  const items = [
    { id: 1, name: "Producto 1", image: "/libros/Actividades-de-M1.png" },
    {
      id: 2,
      name: "Producto 2 con un nombre muy largo que se corta",
      image: "/ps5.png",
    },
    { id: 3, name: "Producto 3", image: "/libros/Actividades-de-M1.png" },
    { id: 4, name: "Producto 4", image: "/ps5.png" },
    { id: 5, name: "Producto 5", image: "/ps5.png" },
    { id: 6, name: "Producto 6", image: "/ps5.png" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold text-gray-800">Lista de Deseados</h2>
      <p className="text-sm text-gray-500 mb-6">Mira tu lista favorita</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={1000}
              height={100}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-thint text-blue-500 truncate">
                {item.name}
              </h3>
              <div className="flex justify-between items-center mt-4">
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded flex items-center">
                  <Image
                    src="/icons/shopping-cart.svg"
                    alt="Agregar al carrito"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Agrega al Carrito
                </button>
                <button className="text-red-500">
                  <Image
                    src="/icons/trash.svg"
                    alt="Eliminar"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
