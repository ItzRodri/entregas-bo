import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const carouselItems = [
  {
    title: "Sección 1",
    images: [
      "/libros/Actividades-de-M1.png",
      "/libros/Actividades-de-M1.png",
      "/libros/Actividades-de-M1.png",
      "/libros/Actividades-de-M1.png",
      "/libros/Actividades-de-M1.png",
      "/libros/Actividades-de-M1.png",
    ],
  },
  {
    title: "Sección 2",
    images: [
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
    ],
  },
  {
    title: "Sección 3",
    images: [
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
    ],
  },
  {
    title: "Sección 4",
    images: [
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
        "/libros/Actividades-de-M1.png",
    ],
  },
];

const HomePageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='px-4 md:px-10 my-10'>
         <h3 className="text-2xl font-bold mb-4">Productos Especiales</h3>
         <hr />
        <Slider {...settings}>
      {carouselItems.map((section, index) => (
        <div key={index} className='mb-10'>
         
          <div className="flex justify-center space-x-4">
            {section.images.map((image, idx) => (
              <div key={idx} className="w-auto  h-auto rounded-full items-center justify-center bg-imagecontainer   ">
                <Image src={image} alt={`Image ${idx + 1}`} width={200} height={200} className='mx-4'/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Slider>

    </div>
    
  );
};

export default HomePageCarousel;