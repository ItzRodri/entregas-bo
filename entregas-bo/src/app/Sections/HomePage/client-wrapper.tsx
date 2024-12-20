'use client';

import dynamic from 'next/dynamic';

const HomePageCarousel = dynamic(() => import('./home-page-books'), { ssr: false });

const ClientWrapper = () => {
  return <HomePageCarousel />;
};

export default ClientWrapper;