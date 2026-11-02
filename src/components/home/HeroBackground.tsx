import React, { useState, useEffect } from 'react';

interface HeroBackgroundProps {
  currentSlide?: number;
}

export const HERO_REAL_SLIDES = [
  {
    image: '/images/Slider_20230727040104AM_20220709_140451.jpg',
    title: '10-Acre Scenic Green Campus',
    subtitle: 'Bonangi, Parwada Mandal, Visakhapatnam'
  },
  {
    image: '/images/Slider_20240202051058AM_IMG_2746.JPG',
    title: 'Horse Riding & Sports Academies',
    subtitle: 'Equestrian manege, swimming pool & athletics'
  },
  {
    image: '/images/Slider_20251227065326AM_IMG-20251227-WA0006.jpg',
    title: 'Academic & Cultural Vibrancy',
    subtitle: '100% CBSE Board pass record with holistic character'
  },
  {
    image: '/images/promotion-1.jpg',
    title: 'Education for Life',
    subtitle: 'Annapurna Educational Society · Heritage Since 1984'
  }
];

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ currentSlide: externalSlide }) => {
  const [internalSlide, setInternalSlide] = useState(0);

  // Auto rotate slide every 6 seconds if not externally controlled
  useEffect(() => {
    if (externalSlide !== undefined) return;
    const interval = setInterval(() => {
      setInternalSlide((prev) => (prev + 1) % HERO_REAL_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [externalSlide]);

  const activeIndex = externalSlide !== undefined ? externalSlide : internalSlide;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      {/* Real School Photographs Stack */}
      {HERO_REAL_SLIDES.map((slide, idx) => (
        <div
          key={slide.image}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-0 scale-100' : 'opacity-0 -z-10 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Cinematic Dual-Gradient Scrims (strictly beneath foreground text) */}
      {/* Left-to-right gradient for text column */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#071E10]/90 via-[#071E10]/70 to-[#071E10]/30 pointer-events-none" />

      {/* Top and Bottom soft fades */}
      <div className="absolute inset-x-0 top-0 h-28 z-[1] bg-gradient-to-b from-[#071E10]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-[#071E10] via-[#071E10]/80 to-transparent pointer-events-none" />

      {/* Subtle school gold decorative ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 z-[1] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
