import React from 'react';
import Image from 'next/image';

interface CustomInputProps {
  placeholder: string;
  value: string;
  icon?: string; // Ruta del ícono opcional
  editable?: boolean; // Si tiene botón de edición
  onEdit?: () => void; // Función para el botón de edición
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  icon,
  editable = false,
  onEdit,
}) => {
  return (
    <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm overflow-hidden">
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
        <p className="text-sm font-medium text-gray-800 truncate">{value}</p>
      </div>
      {editable && onEdit && (
        <button
          onClick={onEdit}
          className="ml-3 flex-shrink-0 text-blue-500 hover:text-blue-700"
          aria-label="Edit"
        >
          <Image
            src="/icons/edit.svg" // Cambia esta ruta al ícono de edición
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
