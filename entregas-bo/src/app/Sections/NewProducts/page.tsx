"use client";
import React, { useState } from "react";
import { AppliedFiltersBar, SortOption, FilterPanel } from "@/app/components/products";

const NewProductsPage: React.FC = () => {
  // Estado para filtros aplicados
  const [filters, setFilters] = useState<{ id: number; label: string }[]>([]);

  // Estado para las categorías de filtros
  const [filterCategories, setFilterCategories] = useState([
    {
      category: "Formato de papel",
      options: [
        { id: 1, label: "Medio Oficio", selected: false },
        { id: 2, label: "Carta", selected: false },
        { id: 3, label: "Oficio", selected: false },
      ],
    },
    {
      category: "Cantidad de hojas",
      options: [
        { id: 4, label: "50 hojas", selected: false },
        { id: 5, label: "100 hojas", selected: false },
        { id: 6, label: "200 hojas", selected: false },
      ],
    },
    {
      category: "Tipo de encuadernación",
      options: [
        { id: 7, label: "Grapado", selected: false },
        { id: 8, label: "Anillado", selected: false },
        { id: 9, label: "Empastado", selected: false },
      ],
    },
    {
      category: "Material de tapa",
      options: [
        { id: 10, label: "Tapa blanda", selected: false },
        { id: 11, label: "Tapa dura", selected: false },
      ],
    },
    {
      category: "Personalización",
      options: [
        { id: 12, label: "Sin personalización", selected: false },
        { id: 13, label: "Con logo o diseño", selected: false },
        { id: 14, label: "Libro de acta", selected: false },
      ],
    },
  ]);

  // Manejar cambios en los filtros (vincula `FilterPanel` y `AppliedFiltersBar`)
  const handleFilterChange = (category: string, optionId: number) => {
    setFilterCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.category === category
          ? {
              ...cat,
              options: cat.options.map((option) =>
                option.id === optionId
                  ? { ...option, selected: !option.selected }
                  : option
              ),
            }
          : cat
      )
    );

    // Sincronizar los filtros aplicados
    const selectedOption = filterCategories
      .find((cat) => cat.category === category)
      ?.options.find((option) => option.id === optionId);

    if (selectedOption?.selected) {
      setFilters((prevFilters) =>
        prevFilters.filter((filter) => filter.id !== optionId)
      );
    } else if (selectedOption) {
      setFilters((prevFilters) => [
        ...prevFilters,
        { id: optionId, label: selectedOption.label },
      ]);
    }
  };

  // Limpiar todos los filtros
  const handleClearAllFilters = () => {
    setFilterCategories((prevCategories) =>
      prevCategories.map((cat) => ({
        ...cat,
        options: cat.options.map((option) => ({
          ...option,
          selected: false,
        })),
      }))
    );
    setFilters([]);
  };

  // Estado para el rango de precios
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Función para manejar cambios en el rango de precios
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Estado y opciones para ordenamiento
  const [sortOption, setSortOption] = useState("price_asc");
  const sortOptions = [
    { value: "price_asc", label: "Precio ascendente" },
    { value: "price_desc", label: "Precio descendente" },
    { value: "popularity", label: "Popularidad" },
    { value: "newest", label: "Nuevos lanzamientos" },
  ];

  return (
    <div className="py-10 px-4 md:px-20 font-inter">
      <div className="container mx-auto flex flex-col gap-6">
        {/* Barra de filtros aplicados */}
        <AppliedFiltersBar
          filters={filters}
          onRemoveFilter={(id) =>
            setFilters((prevFilters) =>
              prevFilters.filter((filter) => filter.id !== id)
            )
          }
          onClearFilters={handleClearAllFilters}
        />

        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Panel lateral de filtros */}
          <div className="w-full md:w-1/4">
            <FilterPanel
              filters={filterCategories}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAllFilters}
              onPriceChange={handlePriceChange}
            />
          </div>

          {/* Contenedor para productos */}
          <div className="w-full md:w-3/4">
            {/* Barra de ordenamiento */}
            <div className="flex justify-between items-center mb-4">
              <SortOption
                options={sortOptions}
                selectedOption={sortOption}
                onChange={setSortOption}
              />
            </div>

            {/* Lista de productos (placeholder) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border p-4 rounded-lg shadow">
                <h4 className="font-semibold">Producto 1</h4>
                <p className="text-sm text-gray-500">$500</p>
              </div>
              <div className="border p-4 rounded-lg shadow">
                <h4 className="font-semibold">Producto 2</h4>
                <p className="text-sm text-gray-500">$800</p>
              </div>
              <div className="border p-4 rounded-lg shadow">
                <h4 className="font-semibold">Producto 3</h4>
                <p className="text-sm text-gray-500">$1,200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsPage;
