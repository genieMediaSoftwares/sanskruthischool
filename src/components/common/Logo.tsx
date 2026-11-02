import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  size = 'md' 
}) => {
  // Height classes for consistent rendering
  const heightClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24'
  };

  const isDarkSurface = variant === 'white';

  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center shrink-0 ${className}`}>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white p-0.5 shadow-sm border border-[#D4AF37]/40 flex items-center justify-center">
          {/* Target the circular crest portion from the logo */}
          <img
            src="/assets/aistudio/image_a1e1217d.png"
            alt="Sanskruthi Global School Crest"
            className="w-[140%] h-[140%] max-w-none object-left object-contain"
            style={{ objectPosition: '0% 50%' }}
            loading="eager"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Container providing maximum contrast and protection on all surfaces */}
      <div className={`flex items-center ${isDarkSurface ? 'bg-white/95 rounded-xl px-3 py-1.5 shadow-md border border-[#D4AF37]/50 backdrop-blur-sm' : ''}`}>
        <img
          src="/assets/aistudio/image_a1e1217d.png"
          alt="Sanskruthi Global School - Affiliated to CBSE, New Delhi - Education for Life"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
          loading="eager"
        />
      </div>
    </div>
  );
};
