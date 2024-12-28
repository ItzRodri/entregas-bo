import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from '../products';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  imageUrl: string;
  rating?: number;
  isFavorite?: boolean;
}

interface RecommendationSectionProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const RecommendationsSection: React.FC<RecommendationSectionProps> = ({ products, onAddToCart }) => {
    const handleToggleFavorite = (productId: number) => {
      // Implementar lógica de favoritos
    };
  
    const handleProductClick = (product: Product) => {
      // Implementar lógica de navegación al producto
    };
  
    const handleAddToCart = (product: Product) => {
      // Implementar lógica de agregar al carrito
    };
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recomendaciones para ti</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onToggleFavorite={handleToggleFavorite}
                onProductClick={handleProductClick}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default RecommendationsSection;
