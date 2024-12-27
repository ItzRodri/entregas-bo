import React, { useState } from "react";

interface FilterOption {
  id: number;
  label: string;
  selected: boolean; // Si la opción está seleccionada
}

interface FilterCategory {
  category: string; // Nombre de la categoría (ej. "Marca")
  options: FilterOption[]; // Opciones dentro de la categoría
}

interface FilterPanelProps {
  filters: FilterCategory[]; // Lista de categorías de filtros
  onFilterChange: (category: string, optionId: number) => void; // Maneja cambios en los filtros
  onClearAll: () => void; // Limpia todos los filtros
  onPriceChange: (min: number, max: number) => void; // Maneja cambios en el rango de precios
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onClearAll,
  onPriceChange,
}) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); // Estado para rango de precios
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]); // Control de categorías expandibles

  // Maneja la expansión/colapso de categorías
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Actualiza el rango de precios y notifica el cambio
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    onPriceChange(min, max);
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      {/* Encabezado de filtros */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filtros</h3>
        <button
          onClick={onClearAll}
          className="text-blue-400 hover:text-blue-500 text-sm"
        >
          Borrar todo
        </button>
      </div>

      {/* Categorías de filtros */}
      {filters.map((filterCategory) => (
        <div key={filterCategory.category} className="mb-6">
          {/* Encabezado de categoría */}
          <h4
            className="font-medium text-gray-700 mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleCategory(filterCategory.category)}
          >
            {filterCategory.category}
            <span>
              {expandedCategories.includes(filterCategory.category) ? "▾" : "▸"}
            </span>
          </h4>

          {/* Opciones de categoría (expandibles) */}
          {expandedCategories.includes(filterCategory.category) && (
            <div className="flex flex-col gap-2">
              {filterCategory.options.map((option) => (
                <label key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={option.selected}
                    onChange={() =>
                      onFilterChange(filterCategory.category, option.id)
                    }
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Rango de precios */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Precio</h4>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              handlePriceChange(Number(e.target.value), priceRange.max)
            }
            className="border border-gray-300 rounded-lg p-2 w-16"
            placeholder="min."
          />
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              handlePriceChange(priceRange.min, Number(e.target.value))
            }
            className="border border-gray-300 rounded-lg p-2 w-16"
            placeholder="max."
          />
        </div>
      </div>

      {/* Botón de Descuento */}
      <div className="mb-6 flex items-center justify-between">
        <span className="font-medium text-gray-700">Descuento</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() => console.log("Descuento activado/desactivado")}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-300 peer-checked:after:translate-x-5 peer-checked:after:border-white peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
