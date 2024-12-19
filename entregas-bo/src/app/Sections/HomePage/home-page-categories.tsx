"use client";

import React from 'react';
import Lottie from 'react-lottie-player';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
}) => {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={loop}
        play={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;
