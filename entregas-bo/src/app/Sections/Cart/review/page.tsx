"use client";
import React, { useState } from "react";
import { HeaderSteps } from "@/app/components/shop";
import UserInfo from "@/app/components/shop/revisar/userinfo";
import ShippingMethod from "@/app/components/shop/revisar/shippingmethod";
import OrderSummary from "@/app/components/shop/revisar/ordersummary";
import { useRouter } from "next/navigation";
import CustomButton from "@/app/components/common/button";

interface ReviewPageProps {
  user: {
    name: string;
    address: string;
  };
  order: {
    items: Array<{
      id: number;
      name: string;
      price: number;
      quantity: number;
      color?: string;
      image: string;
    }>;
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
  };
}

export default function ReviewPage() {
  const router = useRouter();
  const [shippingMethod, setShippingMethod] = useState({
    type: "express",
    cost: 22.5,
    days: "1-3 días hábiles",
  });

  const products = [
    {
      name: "MacBook Pro M2",
      color: "Negro",
      quantity: 1,
      price: 433.0,
      originalPrice: 1299.0,
      image: "/libros/Actividades-de-M1.png",
    },
    {
      name: "Funda para Laptop",
      color: "Azul",
      quantity: 1,
      price: 63.26,
      image: "/libros/Actividades-de-M1.png",
    },
    {
      name: "Pantalla de privacidad",
      color: "Negro",
      quantity: 1,
      price: 23.26,
      image: "/libros/Actividades-de-M1.png",
    },
  ];

  const handleApplyDiscount = (code: string) => {
    console.log("Applying discount code:", code);
  };

  const handleContinue = () => {
    console.log("Continuing to payment...");
  };

  const handleBackToCart = () => {
    router.push("../../../Sections/Cart/buy");
  };

  return (
    <main className="py-10 px-4 md:px-28 font-inter">
      <div className="container mx-auto flex flex-col gap-6">
        <HeaderSteps currentStep="revisar" />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-6">
            <div className="rounded-lg bg-white shadow p-6">
              <UserInfo />
              <ShippingMethod
                selectedMethod={shippingMethod}
                onMethodChange={setShippingMethod}
              />
            </div>
          </div>
          <div className="w-full lg:w-[380px]">
              <div className="sticky top-6">
                <OrderSummary
                  products={products}
                  subtotal={519.52}
                  discount={111.87}
                  shippingCost={22.5}
                  total={543.02}
                  onApplyDiscount={handleApplyDiscount}
                  onContinue={handleContinue}
                />
              </div>
            </div>
        </div>
        <span
          onClick={handleBackToCart}
          className="text-blue-500 hover:text-blue-600 cursor-pointer mt-6 block"
        >
          Regresar al carrito
        </span>
      </div>
    </main>
  );
}
