import React, { useState } from "react";
import Image from "next/image";

// props del input
interface CustomInputProps {
  label: string; // Nuevo prop para la etiqueta
  placeholder: string;
  value: string;
  icon: string;
  editable: boolean;
  type?: string;
  onEdit: () => void; // para manejar la edición
  onChange?: (newValue: string) => void; // Nueva prop para manejar cambios
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  icon,
  editable,
  type = "text",
  onEdit,
  onChange,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Función para cambiar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col">
      {/* Etiqueta fuera del input */}
      <label
        className="text-sm font-medium text-gray-600 mb-1"
        style={{ color: "#717171" }}
      >
        {label}
      </label>
      <div className="flex items-center border border-gray-300 rounded-md p-2 bg-gray-50">
        {icon && (
          <Image
            src={icon}
            alt="Input Icon"
            width={24}
            height={24}
            className="mr-3 filter-gray"
          />
        )}
        <div className="flex-grow min-w-0">
          <input
            type={type === "password" && !isPasswordVisible ? "password" : "text"}
            value={value}
            placeholder={editable ? placeholder : value}
            readOnly={!editable}
            onChange={(e) => onChange && onChange(e.target.value)}
            className="text-sm font-medium truncate bg-transparent outline-none w-full"
            style={{ color: "#717171" }}
          />
        </div>
        {editable && type === "password" && (
          <button
            onClick={togglePasswordVisibility}
            className="ml-3 flex-shrink-0 text-blue-500 hover:text-blue-700"
            aria-label="Toggle Password Visibility"
          >
            <Image
              src={isPasswordVisible ? "/icons/eye-close.svg" : "/icons/eye.svg"}
              alt="Toggle Password Visibility"
              width={20}
              height={20}
            />
          </button>
        )}
        {editable && onEdit && (
          <button
            onClick={onEdit}
            className="ml-3 flex-shrink-0 text-blue-500 hover:text-blue-700"
            aria-label="Edit"
          >
            <Image
              src="/icons/edit.svg"
              alt="Edit Icon"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
