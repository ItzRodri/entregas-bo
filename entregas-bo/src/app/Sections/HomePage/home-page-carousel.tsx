import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const carouselItems = [
  {
    type: "Medio Oficio Araña",
    options: [
      { hojas: 50, tapa: "Tapa Blanda", mayorista: 5, individual: 10, personalizado: 15 },
      { hojas: 100, tapa: "Tapa Blanda", mayorista: 10, individual: 15, personalizado: 20 },
      { hojas: 200, tapa: "Tapa Blanda", mayorista: 15, individual: 25, personalizado: 30 },
    ],
  },
  {
    type: "Carta Araña",
    options: [
      { hojas: 100, tapa: "Tapa Dura", mayorista: 15, individual: 20, personalizado: 25 },
      { hojas: 200, tapa: "Empastado", mayorista: 30, individual: 35, personalizado: 40 },
    ],
  },
  {
    type: "Oficio Araña",
    options: [
      { hojas: 100, tapa: "Anillado", mayorista: 25, individual: 30, personalizado: 35 },
      { hojas: 200, tapa: "Anillado o Empastado", mayorista: 40, individual: 45, personalizado: 50 },
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
    <Slider {...settings}>
      {carouselItems.map((item, index) => (
        <div key={index}>
          <h3>{item.type}</h3>
          <ul>
            {item.options.map((option, idx) => (
              <li key={idx}>
                {option.hojas} hojas, {option.tapa}, Mayorista: {option.mayorista}, Individual: {option.individual}, Personalizado: {option.personalizado}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Slider>
  );
};

export default HomePageCarousel;