import HomePageSponsors from "./Sections/HomePage/home-page-sponsors";
import ClientWrapper from "./Sections/HomePage/client-wrapper";
import Blogs from "./Sections/HomePage/home-page-blogs";
import ServicePage from "./Sections/HomePage/home-page-servicepage";
import HeroBannerPrimary from "./components/layout/banner-primary";
import HeroBannerSecondary from "./components/layout/banner-secondary";
import HeroBannerTertiary from "./components/layout/banner-tertiary";

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
