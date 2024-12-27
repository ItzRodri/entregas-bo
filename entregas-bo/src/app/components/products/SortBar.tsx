import React from "react";

interface SortOption {
  value: string; // Valor del criterio (por ejemplo, "price_asc")
  label: string; // Etiqueta visible para el usuario
}

interface SortBarProps {
  options: SortOption[]; // Lista de opciones de ordenamiento
  selectedOption: string; // Opción actualmente seleccionada
  onChange: (value: string) => void; // Función para manejar el cambio de criterio
}

const SortBar: React.FC<SortBarProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="container mx-auto flex items-center justify-end space-x-3 rounded-md">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Ordenar por:
      </label>
      <select
        id="sort"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBar;
