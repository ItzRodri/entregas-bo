'use client';

import dynamic from 'next/dynamic';

const HomePageCarousel = dynamic(() => import('./home-page-carousel'), { ssr: false });

const ClientWrapper = () => {
  return <HomePageCarousel />;
};

export default ClientWrapper;