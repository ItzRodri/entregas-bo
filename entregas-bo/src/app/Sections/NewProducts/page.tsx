"use client";
import React, { useState } from "react";
import {
  AppliedFiltersBar,
  FilterPanel,
  SortOption,
  ProductList,
  Pagination,
} from "@/app/components/products";
import ProductDetail from "@/app/components/products/productdetail";
// Importar el componente de detalles del producto

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // Precio original para calcular el descuento
  discount?: number; // Porcentaje de descuento
  imageUrl: string; // URL de la imagen del producto
  rating?: number; // Puntuación del producto
  isFavorite?: boolean; // Indica si el producto es favorito
}

const NewProductsPage: React.FC = () => {
  // Estado para filtros aplicados
  const [filters, setFilters] = useState<{ id: number; label: string }[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Número total de páginas

  // Lista de productos (datos simulados)
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Producto 1",
      price: 450,
      originalPrice: 500,
      discount: 10,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.9,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 800,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.7,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 1020,
      originalPrice: 1200,
      discount: 15,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.8,
      isFavorite: true,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 600,
      originalPrice: 700,
      discount: 14,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.5,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Producto 5",
      price: 900,
      originalPrice: 1000,
      discount: 10,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.6,
      isFavorite: true,
    },
    {
      id: 6,
      name: "Producto 6",
      price: 750,
      originalPrice: 850,
      discount: 12,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.4,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Producto 7",
      price: 1100,
      originalPrice: 1200,
      discount: 8,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 8,
      name: "Producto 8",
      price: 500,
      originalPrice: 600,
      discount: 16,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.3,
      isFavorite: false,
    },
    {
      id: 9,
      name: "Producto 9",
      price: 650,
      originalPrice: 750,
      discount: 13,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.5,
      isFavorite: true,
    },
    {
      id: 10,
      name: "Producto 10",
      price: 1200,
      originalPrice: 1300,
      discount: 7,
      imageUrl: "/libros/Actividades-de-M1.png",
      rating: 4.8,
      isFavorite: false,
    },
  ]);

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

  // Manejar acción de añadir al carrito
  const handleAddToCart = (productId: number) => {
    console.log(`Producto con ID ${productId} añadido al carrito`);
  };

  // Manejar acción de marcar/desmarcar como favorito
  const handleToggleFavorite = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  // Manejar clic en el producto para mostrar detalles
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  // Estado y opciones para ordenamiento
  const [sortOption, setSortOption] = useState("price_asc");
  const sortOptions = [
    { value: "price_asc", label: "Precio ascendente" },
    { value: "price_desc", label: "Precio descendente" },
    { value: "popularity", label: "Popularidad" },
    { value: "newest", label: "Nuevos lanzamientos" },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Simular carga de datos
  };

  return (
    <div className="py-10 px-4 md:px-20 font-inter">
      <div className="container mx-auto flex flex-col gap-6">
        {selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <>
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

                {/* Lista de productos */}
                <ProductList
                  products={products}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  onProductClick={handleProductClick}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewProductsPage;
