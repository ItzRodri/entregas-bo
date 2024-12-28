"use client";
import React, { useState, useEffect } from "react";
import {
  HeaderSteps,
  ProductList,
  PaymentDetails,
  RecommendationSection,
} from "@/app/components/shop";

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

export default function CartPage() {
  const products = [
    {
      id: "1",
      name: "Libro 1",
      description: "Descripción del libro 1",
      price: 10.99,
      quantity: 1,
      image: "/libros/Actividades-de-M1.png",
      deliveryStatus: "En stock",
    },
    {
      id: "2",
      name: "Libro 2",
      description: "Descripción del libro 2",
      price: 12.99,
      quantity: 1,
      image: "/libros/Actividades-de-M1.png",
      deliveryStatus: "En stock",
    },
    {
      id: "3",
      name: "Libro 3",
      description: "Descripción del libro 3",
      price: 15.99,
      quantity: 1,
      image: "/libros/Actividades-de-M1.png",
      deliveryStatus: "En stock",
    },
    {
      id: "4",
      name: "Libro 4",
      description: "Descripción del libro 4",
      price: 9.99,
      quantity: 1,
      image: "/libros/Actividades-de-M1.png",
      deliveryStatus: "En stock",
    },
  ];

  // Lista de productos (datos simulados)
  const [productsRecommend, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Producto 1",
      price: 450,
      originalPrice: 500,
      discount: 10,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.9,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 800,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.7,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 1020,
      originalPrice: 1200,
      discount: 15,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.8,
      isFavorite: true,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 600,
      originalPrice: 700,
      discount: 14,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.5,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Producto 5",
      price: 900,
      originalPrice: 1000,
      discount: 10,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.6,
      isFavorite: true,
    },
    {
      id: 6,
      name: "Producto 6",
      price: 750,
      originalPrice: 850,
      discount: 12,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.4,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Producto 7",
      price: 1100,
      originalPrice: 1200,
      discount: 8,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 8,
      name: "Producto 8",
      price: 500,
      originalPrice: 600,
      discount: 16,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.3,
      isFavorite: false,
    },
    {
      id: 9,
      name: "Producto 9",
      price: 650,
      originalPrice: 750,
      discount: 13,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.5,
      isFavorite: true,
    },
    {
      id: 10,
      name: "Producto 10",
      price: 1200,
      originalPrice: 1300,
      discount: 7,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.8,
      isFavorite: false,
    },
  ]);

  

  return (
    <main className="py-10 px-4 md:px-20 font-inter">
      <div className="container mx-auto flex flex-col gap-6">
        <HeaderSteps currentStep="carrito" />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProductList products={products} />
          </div>
          <div>
            <PaymentDetails
              subtotal={products.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )}
              discount={0}
              shipping={5.99}
              total={
                products.reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                ) + 5.99
              }
            />
          </div>
        </div>

        <div>
          <RecommendationSection 
            products={productsRecommend} 
            onAddToCart={(productId: number) => {
              // Implement your add to cart logic here
              console.log(`Product ${productId} added to cart`);
            }} 
          />
        </div>
      </div>
    </main>
  );
}