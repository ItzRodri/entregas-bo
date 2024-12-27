import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interface para definir la estructura de un filtro
interface Filter {
  id: number;
  label: string;
}

// Props del componente
interface Props {
  filters: Filter[]; // Arreglo de filtros
  onRemoveFilter: (id: string | number) => void; // Función para remover un filtro
  onClearFilters: () => void; // Función para limpiar todos los filtros
}

const AppliedFiltersBar: React.FC<Props> = ({
  filters,
  onRemoveFilter,
  onClearFilters,
}) => {
  const [isCarousel, setIsCarousel] = useState(false); // Estado para determinar si usamos carrusel
  const containerRef = useRef<HTMLDivElement>(null);

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6, // Número de filtros visibles al mismo tiempo
    slidesToScroll: 1, // Número de filtros que se desplazan al hacer clic
    responsive: [
      {
        breakpoint: 1280, // Pantallas grandes
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Pantallas medianas
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Pantallas pequeñas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Pantallas extra pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Detectar el ancho del contenedor y cambiar a carrusel si es necesario
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const filtersWidth = filters.length * 150; // Asume que cada filtro ocupa 150px de ancho
        setIsCarousel(filtersWidth > containerWidth); // Activa el carrusel si los filtros no caben
      }
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño
    return () => window.removeEventListener("resize", handleResize); // Limpiar evento
  }, [filters]);

  return (
    <div className="container mx-auto">
      {/* Contenedor para filtros */}
      <div ref={containerRef} className="w-full">
        {isCarousel ? (
          <Slider {...settings}>
            {filters.map((filter) => (
              <div key={filter.id} className="p-2">
                <div className="flex items-center justify-between w-32 h-10 px-2 py-1 border border-black rounded-lg text-sm overflow-hidden">
                  <span>{filter.label}</span>
                  <button
                    onClick={() => onRemoveFilter(filter.id)}
                    className="ml-2"
                  >
                    <Image
                      src="/icons/closefilter.svg"
                      alt="Close"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex items-center gap-2">
            {filters.map((filter) => (
              <div
                key={filter.id}
                className="flex items-center justify-between w-32 h-10 px-2 py-1 border border-black rounded-lg text-sm overflow-hidden"
              >
                <span>{filter.label}</span>
                <button
                  onClick={() => onRemoveFilter(filter.id)}
                  className="ml-2"
                >
                  <Image
                    src="/icons/closefilter.svg"
                    alt="Close"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedFiltersBar;
