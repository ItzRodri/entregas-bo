import HomePageHeader from "./Sections/HomePage/home-page-header";
import HomePageSponsors from "./Sections/HomePage/home-page-sponsors";
import ClientWrapper from "./Sections/HomePage/client-wrapper";
import Blogs from "./Sections/HomePage/home-page-blogs";
import ServicePage from "./Sections/HomePage/home-page-servicepage";
import HeroBannerPrimary from "./Sections/Banners/banner-primary";
import HeroBannerSecondary from "./Sections/Banners/banner-secondary";

export default function Home() {
  return (
    <>
      <HomePageHeader/>
      <ClientWrapper />
      <HeroBannerSecondary />
      <HomePageSponsors/>
      <HeroBannerPrimary/>
      <Blogs/>
      <ServicePage/>
    </>
  );
}
