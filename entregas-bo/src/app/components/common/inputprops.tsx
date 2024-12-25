import React, { useState } from 'react';
import Image from 'next/image';

// props del input
interface CustomInputProps {
  placeholder: string;
  value: string;
  icon: string;
  editable: boolean;
  type?: string;
  onEdit: () => void; // para manejar la edicion
  onChange?: (newValue: string) => void; // Nueva prop para manejar cambios
}


const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, icon, editable, type = "text", onEdit, onChange }) => {
  
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Función para cambiar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2">
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
        <p className="text-xs text-gray-500 truncate">{placeholder}</p>
        <input
          type={type === "password" && !isPasswordVisible ? "password" : "text"}
          value={value}
          readOnly={!editable}
          onChange={(e) => onChange && onChange(e.target.value)} // Llamada al manejador de cambios
          className="text-sm font-medium text-gray-800 truncate bg-transparent outline-none w-full"
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
  );
};


export default CustomInput;