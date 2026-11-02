import React, { useState } from 'react';

export type VisualType = 
  | 'campus' 
  | 'equestrian' 
  | 'swimming' 
  | 'stem' 
  | 'archery' 
  | 'shooting' 
  | 'hostel' 
  | 'kindergarten' 
  | 'cultural' 
  | 'library' 
  | 'classroom'
  | 'organic-farm'
  | 'sports'
  | 'academics';

interface CampusImageProps {
  type: VisualType;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  showBadge?: boolean;
  customSrc?: string;
}

// Authentic real school photographs downloaded directly from sanskruthiglobalschool.in
export const REAL_IMAGE_MAP: Record<VisualType, { src: string; badge: string; sub: string }> = {
  campus: {
    src: '/images/Slider_20230727040104AM_20220709_140451.jpg',
    badge: '10-Acre Campus',
    sub: 'Bonangi, Visakhapatnam'
  },
  equestrian: {
    src: '/images/Slider_20240202051058AM_IMG_2746.JPG',
    badge: 'Horse Riding Academy',
    sub: 'Equestrian Sand Manege'
  },
  swimming: {
    src: '/images/Slider_20240202050958AM_SIRI8425.JPG',
    badge: 'Semi-Olympic Pool',
    sub: 'Ozonated 25m Swimming Arena'
  },
  stem: {
    src: '/images/Slider_20240202051204AM_SIRI8431.JPG',
    badge: 'THINKEDGE STEM Lab',
    sub: 'Digital Interactive Innovation Studio'
  },
  classroom: {
    src: '/images/Slider_20240202051204AM_SIRI8431.JPG',
    badge: 'Smart Digital Classrooms',
    sub: 'Educomp SmartClass Technology'
  },
  archery: {
    src: '/images/slider-3.jpg',
    badge: 'Archery & Target Sports',
    sub: '50m Target Range'
  },
  shooting: {
    src: '/images/slider-3.jpg',
    badge: '10m Air Rifle Range',
    sub: 'Precision Target Shooting'
  },
  sports: {
    src: '/images/slider-3.jpg',
    badge: 'Athletics & Games',
    sub: '400m Track & Courts'
  },
  hostel: {
    src: '/images/slider-7.jpg',
    badge: 'Residential Campus',
    sub: 'Dormitories & Dining Hall'
  },
  library: {
    src: '/images/A_20260122021047PM_IMG_20260117_174339.jpg',
    badge: 'Knowledge Library',
    sub: '5,500+ Books & Reading Decathlon'
  },
  cultural: {
    src: '/images/slider-8.jpg',
    badge: 'SGS Cultural Performers',
    sub: 'Music, Dance & Annual Celebrations'
  },
  kindergarten: {
    src: '/images/A_20260114061238PM_IMG20260108101629.jpg',
    badge: 'Kindergarten & Early Years',
    sub: 'Playground & Activity Center'
  },
  'organic-farm': {
    src: '/images/slider-7.jpg',
    badge: 'Green Campus & Nature',
    sub: 'Organic Farming & Serene Hills'
  },
  academics: {
    src: '/images/Slider_20251227065326AM_IMG-20251227-WA0006.jpg',
    badge: 'Academic Excellence',
    sub: 'CBSE Curriculum & IIT-JEE Foundation'
  }
};

export const CampusImage: React.FC<CampusImageProps> = ({
  type,
  alt,
  className = '',
  aspectRatio = '4:3',
  showBadge = true,
  customSrc
}) => {
  const [imgError, setImgError] = useState(false);
  const info = REAL_IMAGE_MAP[type] || REAL_IMAGE_MAP.campus;
  const imageSource = customSrc || info.src;

  const aspectClass = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  }[aspectRatio];

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/90 group bg-[#0B2514] ${aspectClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Real Photograph with graceful transition */}
      <img
        src={imageSource}
        alt={alt}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          // If custom path fails, fall back to default school campus banner
          if (!imgError) {
            setImgError(true);
            (e.target as HTMLImageElement).src = '/images/Slider_20230727040104AM_20220709_140451.jpg';
          }
        }}
        loading="lazy"
      />

      {/* Subtle Bottom Gradient Scrim for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

      {/* Real Photo Tag & Information Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white z-10">
        {showBadge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D01C24] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow-sm">
            {info.badge}
          </div>
        )}
        <h4 className="text-sm sm:text-base md:text-lg font-bold font-heading text-white drop-shadow-md leading-tight">
          {alt}
        </h4>
        <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5 font-medium drop-shadow">
          {info.sub}
        </p>
      </div>
    </div>
  );
};
