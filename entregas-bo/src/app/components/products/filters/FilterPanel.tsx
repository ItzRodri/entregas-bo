import React, { useState } from "react";
import Image from "next/image";

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

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Verificar si hay filtros seleccionados
  const hasSelectedFilters = filters.some((category) =>
    category.options.some((option) => option.selected)
  );

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
        {hasSelectedFilters && (
          <button
            onClick={onClearAll}
            className="text-blue-400 hover:text-blue-500 text-sm"
          >
            Borrar todo
          </button>
        )}
      </div>

      {/* Categorías de filtros */}
      {filters.map((filterCategory) => (
        <div key={filterCategory.category} className="mb-6">
          {/* Encabezado de categoría */}
          <h4
            className="text-gray-700 mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleCategory(filterCategory.category)}
          >
            {filterCategory.category}
            <span>
              <Image
                src={
                  expandedCategories.includes(filterCategory.category)
                    ? "/icons/rowUp.svg"
                    : "/icons/rowDown.svg"
                }
                alt="Toggle"
                width={16}
                height={16}
              />
            </span>
          </h4>

          {/* Opciones de categoría con animación */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              expandedCategories.includes(filterCategory.category)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
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
          </div>
        </div>
      ))}

      {/* Rango de precios */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-2">Precio</h4>
        <div className="flex sm:flex-row md:flex-col lg:flex-row items-center gap-2">
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                min: Number(e.target.value),
              }))
            }
            className="border border-gray-300 rounded-lg p-2 w-16 sm:w-16 md:w-full lg:w-8/12"
            placeholder="min."
          />
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                max: Number(e.target.value),
              }))
            }
            className="border border-gray-300 rounded-lg p-2 w-16 sm:w-16 md:w-full lg:w-8/12"
            placeholder="max."
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
