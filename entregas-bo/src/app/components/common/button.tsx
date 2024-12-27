import React from "react";
import Image from "next/image";

interface CustomButtonProps {
  text: string;
  variant?: "primary" | "outline"; // Estilo del botón
  size?: "small" | "medium" | "large"; // Tamaño
  icon?: string; // Ruta del ícono (opcional)
  onClick?: () => void; // Evento de clic
  className?: string; // Clases adicionales
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "primary",
  size = "medium",
  icon,
  onClick,
  className,
}) => {
  const baseStyle =
    "flex items-center justify-center rounded transition-all focus:outline-none";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "border border-blue-500 text-blue-500 hover:bg-blue-100";
  const sizeStyle =
    size === "small"
      ? "px-4 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-5 py-2 text-md";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="mr-2"
        />
      )}
      {text}
    </button>
  );
};

export default CustomButton;
