import HomePageHeader from "./Sections/HomePage/home-page-header";
import HomePageSponsors from "./Sections/HomePage/home-page-sponsors";
import ClientWrapper from "./Sections/HomePage/client-wrapper";
import Blogs from "./Sections/HomePage/home-page-blogs";
import ServicePage from "./Sections/HomePage/home-page-servicepage";
import HeroBannerPrimary from "./components/banner-primary";
import HeroBannerSecondary from "./components/banner-secondary";
import HeroBannerTertiary from "./components/banner-tertiary";

export default function Home() {
  return (
    <>
      <HeroBannerPrimary/>
      <ClientWrapper />
      <HomePageSponsors/>
      <HeroBannerSecondary/>
      <HeroBannerTertiary/>
      <Blogs/>
      <ServicePage/>
    </>
  );
}
