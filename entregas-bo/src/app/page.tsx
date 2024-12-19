
import NavBar from "./NavBar";
import Image from "next/image";
import HomePageHeader from "./Sections/HomePage/home-page-header";
import HomePageSponsors from "./Sections/HomePage/home-page-sponsors";
import dynamic from 'next/dynamic';
import ClientWrapper from "./Sections/HomePage/client-wrapper";


export default function Home() {
  return (
    <>
      <HomePageHeader/>
      <ClientWrapper />
     <HomePageSponsors/>
    </>
  );
}
