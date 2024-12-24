import React, { useState } from 'react';
import Image from 'next/image';

interface SidebarItem {
  label: string;
  icon: string;
  className?: string; // Para estilos adicionales (por ejemplo, `Cerrar sesión`)
}

interface SidebarProps {
  onSelect: (option: string) => void;
  selectedSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect, selectedSection }) => {

  const handleSelect = (option: string) => {
    onSelect(option);
  };

  const sidebarItems: SidebarItem[] = [
    { label: "Datos Personales", icon: "/logo/user-edit.svg" },
    { label: "Pago e Instalaciones", icon: "/logo/dollar-circle.svg" },
    { label: "Pedidos", icon: "/logo/bag.svg" },
    { label: "Lista de deseos", icon: "/logo/heart.svg" },
    { label: "Descuentos", icon: "/logo/gift.svg" },
    { label: "Seguridad y acceso", icon: "/logo/security-safe.svg" },
    { label: "Notificación", icon: "/logo/notification.svg" },
    { label: "Contáctanos", icon: "/logo/24-support.svg" },
    {
      label: "Cerrar sesión",
      icon: "/logo/logout.svg",
      className: "text-red-500",
    },
  ];

  return (
    <div className="flex md:flex-col md:w-64 w-full overflow-x-auto no-scrollbar bg-[#F9F9F9] border-b md:border-b-0 border-gray-300">
      {sidebarItems.map(({ label, icon, className }) => (
        <button
          key={label}
          className={`flex items-center justify-center md:justify-start py-4 px-8 whitespace-nowrap ${
            selectedSection === label
              ? "border-b-2 md:border-b-0 md:border-l-2 border-blue-500 text-blue-500"
              : "border-transparent"
          }`}
          onClick={() => handleSelect(label)}
          aria-selected={selectedSection === label}
        >
          <Image
            src={icon}
            alt={`${label} Icon`}
            width={24}
            height={24}
            className={`w-6 h-6 mr-2 ${
              selectedSection === label ? "text-blue-500" : "text-gray-500"
            }`}
          />
          <span className={`text-sm md:text-base ${className || ""}`}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;