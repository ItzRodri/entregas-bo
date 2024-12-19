
import Carousel from "./itemscarousel";
import NavBar from "./NavBar";
import Image from "next/image";
import HomePageHeader from "./Sections/HomePage/home-page-header";
import HomePageSponsors from "./Sections/HomePage/home-page-sponsors";
import LottieAnimation from "./Sections/HomePage/home-page-categories";
export default function Home() {
  return (
    <>
      <HomePageHeader/>
      
      <LottieAnimation
        animationData='/lacteos.json'
        loop={true}
        autoplay={true}
        className="w-96 h-96"
      />
     <HomePageSponsors/>
    </>
  );
}
