import React from 'react';

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
}

export const CampusImage: React.FC<CampusImageProps> = ({
  type,
  alt,
  className = '',
  aspectRatio = '4:3',
  showBadge = true
}) => {
  const aspectClass = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  }[aspectRatio];

  const renderScene = () => {
    switch (type) {
      case 'campus':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#0B2514] via-[#114B25] to-[#0B1930] overflow-hidden flex flex-col justify-end p-5 select-none">
            {/* Sunrise sky and hill silhouette */}
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EAC775" stopOpacity="0.4" />
                  <stop offset="40%" stopColor="#D01C24" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#114B25" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="hillGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1B4D2E" />
                  <stop offset="100%" stopColor="#0B2514" />
                </linearGradient>
              </defs>
              <rect width="500" height="300" fill="url(#skyGrad)" />
              {/* Rolling Hills of Bonangi */}
              <path d="M0 160 Q120 70 260 120 T500 90 L500 300 L0 300 Z" fill="url(#hillGrad1)" opacity="0.85" />
              <path d="M40 180 Q180 110 320 150 T500 130 L500 300 L0 300 Z" fill="#0A3319" opacity="0.95" />
              
              {/* Grand Main School Academic Block */}
              <g transform="translate(60, 140)">
                {/* Central Dome / Tower */}
                <rect x="160" y="-30" width="60" height="90" fill="#FFFFFF" opacity="0.95" rx="3" />
                <path d="M155 -30 Q190 -65 225 -30 Z" fill="#D4AF37" />
                <line x1="190" y1="-65" x2="190" y2="-80" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="190" cy="-80" r="3" fill="#D01C24" />
                {/* Clock on central tower */}
                <circle cx="190" cy="-12" r="9" fill="#114B25" stroke="#D4AF37" strokeWidth="1.5" />

                {/* Left & Right Wings */}
                <rect x="20" y="0" width="140" height="60" fill="#F0F3EE" rx="2" />
                <rect x="220" y="0" width="140" height="60" fill="#F0F3EE" rx="2" />
                {/* Roof trims in forest green */}
                <rect x="15" y="-4" width="150" height="6" fill="#114B25" rx="1" />
                <rect x="215" y="-4" width="150" height="6" fill="#114B25" rx="1" />

                {/* Windows Grids */}
                {[0, 1, 2, 3].map(i => (
                  <g key={`w-l-${i}`} fill="#114B25" opacity="0.75">
                    <rect x={35 + i * 30} y="12" width="14" height="18" rx="2" />
                    <rect x={35 + i * 30} y="36" width="14" height="18" rx="2" />
                  </g>
                ))}
                {[0, 1, 2, 3].map(i => (
                  <g key={`w-r-${i}`} fill="#114B25" opacity="0.75">
                    <rect x={235 + i * 30} y="12" width="14" height="18" rx="2" />
                    <rect x={235 + i * 30} y="36" width="14" height="18" rx="2" />
                  </g>
                ))}
                {/* Pillars on entrance */}
                <rect x="170" y="20" width="8" height="40" fill="#EAC775" />
                <rect x="202" y="20" width="8" height="40" fill="#EAC775" />
                <rect x="165" y="30" width="50" height="30" fill="#0B2514" rx="2" />
              </g>

              {/* Manicured Front Green Lawns and Palm Trees */}
              <ellipse cx="250" cy="270" rx="300" ry="80" fill="#176536" />
              {/* Palm trees */}
              <g transform="translate(40, 170)">
                <path d="M15 80 Q10 40 20 0" stroke="#854D0E" strokeWidth="3" fill="none" />
                <path d="M20 0 Q-5 -20 -15 0 M20 0 Q10 -30 30 -20 M20 0 Q40 -20 50 0 M20 0 Q30 20 15 25" stroke="#15803D" strokeWidth="2.5" fill="none" />
              </g>
              <g transform="translate(440, 175)">
                <path d="M10 80 Q15 40 5 0" stroke="#854D0E" strokeWidth="3" fill="none" />
                <path d="M5 0 Q-20 -20 -10 -5 M5 0 Q-5 -30 15 -20 M5 0 Q25 -20 35 0 M5 0 Q15 20 0 25" stroke="#15803D" strokeWidth="2.5" fill="none" />
              </g>
            </svg>

            {/* Gradient Scrim for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2514] via-[#0B2514]/40 to-transparent pointer-events-none" />

            {/* Foreground Content */}
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D01C24] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  10-Acre Scenic Campus
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Sanskruthi Global School Campus
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Bonangi, Visakhapatnam · Star Infrastructure
              </p>
            </div>
          </div>
        );

      case 'equestrian':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#114B25] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-75" preserveAspectRatio="none">
              {/* Sunset / golden hour backdrop */}
              <defs>
                <linearGradient id="eqSky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EA580C" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1C1917" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <rect width="500" height="300" fill="url(#eqSky)" />
              {/* Sand manege arena floor */}
              <ellipse cx="250" cy="250" rx="280" ry="100" fill="#D97706" opacity="0.3" />
              <ellipse cx="250" cy="260" rx="260" ry="80" fill="#92400E" opacity="0.4" />

              {/* Wooden Post & Rail Fence */}
              <path d="M0 160 L500 160 M0 180 L500 180" stroke="#78350F" strokeWidth="3" opacity="0.6" />
              {[30, 90, 150, 210, 270, 330, 390, 450].map(x => (
                <rect key={`p-${x}`} x={x} y="145" width="6" height="55" fill="#78350F" opacity="0.7" rx="1" />
              ))}

              {/* Equestrian Show Jump Obstacle */}
              <g transform="translate(80, 160)">
                <rect x="0" y="0" width="10" height="50" fill="#FFFFFF" stroke="#D01C24" strokeWidth="2" />
                <rect x="90" y="0" width="10" height="50" fill="#FFFFFF" stroke="#D01C24" strokeWidth="2" />
                <rect x="5" y="15" width="90" height="6" fill="#D01C24" rx="2" />
                <rect x="5" y="30" width="90" height="6" fill="#D4AF37" rx="2" />
              </g>

              {/* Horse & Rider Silhouette */}
              <g transform="translate(250, 100)" fill="#114B25">
                {/* Horse body */}
                <ellipse cx="60" cy="65" rx="35" ry="22" />
                {/* Horse neck and head */}
                <path d="M75 55 Q95 20 100 15 Q105 10 115 15 Q115 25 100 45 Q85 65 75 75 Z" />
                {/* Horse ears */}
                <polygon points="102,12 106,5 110,13" />
                <polygon points="108,12 112,6 116,14" />
                {/* Horse legs in canter */}
                <path d="M35 75 L20 125 L15 130 M45 75 L40 120 M75 75 L85 125 L95 130 M85 75 L100 120" stroke="#114B25" strokeWidth="6" strokeLinecap="round" />
                {/* Horse tail */}
                <path d="M28 60 Q5 70 0 100" stroke="#114B25" strokeWidth="5" fill="none" strokeLinecap="round" />
                {/* Saddle & Bridle */}
                <path d="M50 50 Q60 62 70 50" fill="#D4AF37" />
                {/* Rider */}
                <circle cx="58" cy="22" r="7" fill="#D01C24" /> {/* Helmet */}
                <path d="M50 30 L66 30 L62 55 L54 55 Z" fill="#F0F3EE" /> {/* Uniform Jacket */}
                <path d="M58 40 L70 55 M58 40 L45 55" stroke="#F0F3EE" strokeWidth="3" />
              </g>
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/50 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0B2514] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Equestrian Academy
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Horse Riding & Manege
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Thoroughbred Stables · Certified Riding Master
              </p>
            </div>
          </div>
        );

      case 'swimming':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#0C4A6E] via-[#0284C7] to-[#114B25] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-80" preserveAspectRatio="none">
              {/* Pool Deck and Water */}
              <defs>
                <linearGradient id="poolWater" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#0369A1" />
                </linearGradient>
              </defs>
              <rect width="500" height="300" fill="#E2E8F0" />
              {/* Pool Basin */}
              <polygon points="40,80 460,80 490,290 10,290" fill="url(#poolWater)" />
              {/* Tile grid lines in water */}
              <path d="M60 110 L440 110 M45 150 L455 150 M30 200 L470 200 M15 250 L485 250" stroke="#BAE6FD" strokeWidth="1" opacity="0.4" />
              {/* 6 Swimming Lanes with floating markers */}
              {[1, 2, 3, 4, 5].map(lane => (
                <g key={`lane-${lane}`}>
                  <line 
                    x1={40 + lane * 70} 
                    y1="80" 
                    x2={10 + lane * 80} 
                    y2="290" 
                    stroke={lane % 2 === 0 ? '#D01C24' : '#D4AF37'} 
                    strokeWidth="3.5" 
                    strokeDasharray="8 4" 
                  />
                </g>
              ))}

              {/* Starting Blocks at Far Edge */}
              {[0, 1, 2, 3, 4, 5].map(b => (
                <g key={`block-${b}`} transform={`translate(${60 + b * 65}, 60)`}>
                  <rect x="0" y="5" width="22" height="15" fill="#114B25" rx="2" />
                  <rect x="2" y="0" width="18" height="6" fill="#D4AF37" rx="1" />
                  <text x="11" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">{b + 1}</text>
                </g>
              ))}

              {/* Shaded Spectator Pavilion Roof */}
              <path d="M0 0 L500 0 L480 45 L20 45 Z" fill="#114B25" opacity="0.9" />
              <rect x="0" y="42" width="500" height="5" fill="#D4AF37" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E] via-[#0C4A6E]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0284C7] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  25m Semi-Olympic
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Semi-Olympic Swimming Arena
              </h4>
              <p className="text-xs text-sky-200 line-clamp-1 mt-0.5">
                6 Competition Lanes · Ozonated Filtration
              </p>
            </div>
          </div>
        );

      case 'stem':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#1E1B4B] via-[#0B1930] to-[#114B25] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-70" preserveAspectRatio="none">
              {/* Circuit board lines and nodes */}
              <defs>
                <pattern id="circuitPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 L 20 20 L 25 15 L 35 15 M 20 20 L 20 35 L 30 35" stroke="#10B981" strokeWidth="1" fill="none" opacity="0.3" />
                  <circle cx="35" cy="15" r="2" fill="#D4AF37" />
                  <circle cx="30" cy="35" r="2" fill="#38BDF8" />
                </pattern>
              </defs>
              <rect width="500" height="300" fill="url(#circuitPattern)" />

              {/* Modern Lab Benches and Robotic Arm */}
              <g transform="translate(180, 110)">
                {/* Workstation Monitor */}
                <rect x="40" y="20" width="80" height="50" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                <rect x="75" y="70" width="10" height="15" fill="#64748B" />
                <rect x="60" y="85" width="40" height="5" fill="#64748B" rx="2" />
                {/* Code on screen */}
                <line x1="48" y1="32" x2="85" y2="32" stroke="#10B981" strokeWidth="2" />
                <line x1="48" y1="40" x2="105" y2="40" stroke="#38BDF8" strokeWidth="2" />
                <line x1="48" y1="48" x2="75" y2="48" stroke="#D4AF37" strokeWidth="2" />
                <line x1="48" y1="56" x2="95" y2="56" stroke="#D01C24" strokeWidth="2" />

                {/* Robotic Arm */}
                <g transform="translate(150, 40)" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round">
                  <circle cx="0" cy="50" r="10" fill="#114B25" stroke="#D4AF37" strokeWidth="3" />
                  <line x1="0" y1="50" x2="25" y2="20" />
                  <circle cx="25" cy="20" r="5" fill="#D01C24" />
                  <line x1="25" y1="20" x2="55" y2="35" />
                  {/* Gripper */}
                  <path d="M55 35 L65 30 M55 35 L65 40" stroke="#D4AF37" strokeWidth="3" />
                </g>
              </g>

              {/* Lab Bench */}
              <rect x="0" y="200" width="500" height="100" fill="#0F172A" />
              <rect x="0" y="195" width="500" height="6" fill="#D4AF37" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1930] via-[#0B1930]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#114B25] text-[#EAC775] text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-[#D4AF37]/40">
                  THINKEDGE Innovation Lab
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Robotics, AI & STEM Studio
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Micro-controllers · 3D Prototyping · IoT Sensors
              </p>
            </div>
          </div>
        );

      case 'archery':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#114B25] via-[#165B33] to-[#0A3319] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-75" preserveAspectRatio="none">
              {/* Green field range */}
              <rect width="500" height="300" fill="#14532D" />
              <ellipse cx="250" cy="240" rx="300" ry="100" fill="#15803D" opacity="0.6" />

              {/* Olympic Concentric Target Boss */}
              <g transform="translate(320, 70)">
                {/* Wooden Tripod Stand */}
                <line x1="60" y1="80" x2="20" y2="180" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
                <line x1="60" y1="80" x2="100" y2="180" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
                <line x1="60" y1="80" x2="60" y2="190" stroke="#451A03" strokeWidth="5" strokeLinecap="round" />

                {/* Target rings */}
                <circle cx="60" cy="80" r="55" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
                <circle cx="60" cy="80" r="44" fill="#000000" />
                <circle cx="60" cy="80" r="33" fill="#0284C7" />
                <circle cx="60" cy="80" r="22" fill="#D01C24" />
                <circle cx="60" cy="80" r="11" fill="#D4AF37" />
                <circle cx="60" cy="80" r="4" fill="#EAC775" />

                {/* Arrows stuck in Bullseye */}
                <line x1="60" y1="80" x2="110" y2="50" stroke="#E2E8F0" strokeWidth="2.5" />
                <polygon points="110,50 118,45 115,53" fill="#D01C24" />
                <line x1="62" y1="78" x2="105" y2="70" stroke="#E2E8F0" strokeWidth="2.5" />
                <polygon points="105,70 113,67 111,74" fill="#D4AF37" />
              </g>

              {/* Recurve Bow in Foreground */}
              <g transform="translate(60, 90)">
                <path d="M20 20 Q5 90 20 160 Q10 180 5 190" stroke="#D4AF37" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M20 20 L20 160" stroke="#E2E8F0" strokeWidth="1.5" />
                <rect x="15" y="85" width="8" height="20" fill="#114B25" rx="2" />
              </g>
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3319] via-[#0A3319]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D01C24] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  50m Target Range
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Recurve & Compound Archery
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Olympic Bows · National Medalist Coaches
              </p>
            </div>
          </div>
        );

      case 'shooting':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#114B25] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-75" preserveAspectRatio="none">
              <rect width="500" height="300" fill="#111827" />
              {/* Range lane dividers */}
              <path d="M0 50 L500 50 M0 220 L500 220" stroke="#374151" strokeWidth="2" />
              {/* Target lines perspective */}
              <line x1="50" y1="220" x2="200" y2="80" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="6 4" />
              <line x1="250" y1="220" x2="250" y2="80" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="6 4" />
              <line x1="450" y1="220" x2="300" y2="80" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="6 4" />

              {/* Electronic Target Boxes at 10m */}
              {[190, 240, 290].map((tx, idx) => (
                <g key={`t-${idx}`} transform={`translate(${tx}, 60)`}>
                  <rect x="0" y="0" width="30" height="30" fill="#F8FAFC" rx="2" />
                  <circle cx="15" cy="15" r="10" fill="#000000" />
                  <circle cx="15" cy="15" r="2" fill="#FFFFFF" />
                  <circle cx="15" cy="-8" r="4" fill="#D01C24" /> {/* Red laser indicator */}
                </g>
              ))}

              {/* Shooting Table & Air Rifle silhouette */}
              <rect x="30" y="215" width="440" height="40" fill="#1E293B" rx="3" stroke="#D4AF37" strokeWidth="1.5" />
              <g transform="translate(160, 200)">
                {/* Precision Match Rifle */}
                <rect x="0" y="10" width="130" height="8" fill="#D4AF37" rx="2" />
                <rect x="120" y="12" width="50" height="4" fill="#94A3B8" /> {/* Barrel */}
                <rect x="15" y="18" width="35" height="18" fill="#114B25" rx="3" /> {/* Grip / Stock */}
                <circle cx="45" cy="6" r="4" fill="#38BDF8" /> {/* Diopter sight */}
              </g>
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0B2514] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  10m ISSF Spec Range
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Precision Air Rifle & Pistol
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Laser Electronic Targets · Breath Regulation
              </p>
            </div>
          </div>
        );

      case 'hostel':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#0B2514] via-[#1E293B] to-[#114B25] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-80" preserveAspectRatio="none">
              {/* Dusk sky with stars */}
              <rect width="500" height="300" fill="#0B1930" />
              <circle cx="400" cy="60" r="16" fill="#FEF08A" opacity="0.8" />
              
              {/* Residential Hostel Buildings with Warm Lit Windows */}
              <g transform="translate(50, 80)">
                <rect x="20" y="20" width="160" height="120" fill="#1E293B" rx="3" />
                <rect x="220" y="20" width="160" height="120" fill="#1E293B" rx="3" />
                {/* Pitched roofs */}
                <polygon points="10,20 100,-15 190,20" fill="#114B25" />
                <polygon points="210,20 300,-15 390,20" fill="#114B25" />

                {/* Warm glowing windows */}
                {[0, 1, 2].map(r => (
                  <g key={`row-${r}`}>
                    {[0, 1, 2, 3].map(c => (
                      <rect 
                        key={`hw1-${r}-${c}`} 
                        x={38 + c * 35} 
                        y={35 + r * 30} 
                        width="18" 
                        height="20" 
                        fill="#FDE047" 
                        opacity={0.85} 
                        rx="2" 
                      />
                    ))}
                    {[0, 1, 2, 3].map(c => (
                      <rect 
                        key={`hw2-${r}-${c}`} 
                        x={238 + c * 35} 
                        y={35 + r * 30} 
                        width="18" 
                        height="20" 
                        fill="#FDE047" 
                        opacity={0.85} 
                        rx="2" 
                      />
                    ))}
                  </g>
                ))}
              </g>

              {/* Garden paths with warm lamps */}
              <ellipse cx="250" cy="270" rx="300" ry="70" fill="#14532D" />
              <path d="M210 220 Q250 250 280 300 M250 220 Q290 260 320 300" stroke="#E2E8F0" strokeWidth="15" fill="none" opacity="0.3" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2514] via-[#0B2514]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#114B25] text-[#EAC775] text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-[#D4AF37]/50">
                  Residential Campus
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Separate Boys & Girls Hostels
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                24/7 Security · Resident Wardens · Supervised Study
              </p>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#1E293B] via-[#0B2514] to-[#114B25] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-75" preserveAspectRatio="none">
              {/* Library Bookshelves Wallpaper */}
              <rect width="500" height="300" fill="#1C1917" />
              {/* Wooden Stacks */}
              {[30, 130, 230, 330, 430].map((shelf, sIdx) => (
                <g key={`shelf-${sIdx}`} transform={`translate(${shelf}, 30)`}>
                  <rect x="0" y="0" width="80" height="190" fill="#78350F" opacity="0.7" rx="3" />
                  {[0, 1, 2, 3].map(row => (
                    <g key={`sr-${row}`}>
                      <rect x="5" y={15 + row * 45} width="70" height="4" fill="#B45309" />
                      {/* Books */}
                      {[0, 1, 2, 3, 4, 5].map(b => (
                        <rect 
                          key={`sb-${row}-${b}`} 
                          x={8 + b * 11} 
                          y={row * 45 - 20} 
                          width="9" 
                          height="35" 
                          fill={['#D01C24', '#114B25', '#D4AF37', '#0284C7', '#E2E8F0'][b % 5]} 
                          rx="1" 
                        />
                      ))}
                    </g>
                  ))}
                </g>
              ))}

              {/* Reading Table and Brass Lamp */}
              <rect x="60" y="210" width="380" height="45" fill="#451A03" rx="4" />
              {/* Green banker lamps */}
              <g transform="translate(180, 185)">
                <ellipse cx="20" cy="10" rx="14" ry="7" fill="#15803D" stroke="#D4AF37" strokeWidth="2" />
                <rect x="18" y="15" width="4" height="15" fill="#D4AF37" />
              </g>
              <g transform="translate(300, 185)">
                <ellipse cx="20" cy="10" rx="14" ry="7" fill="#15803D" stroke="#D4AF37" strokeWidth="2" />
                <rect x="18" y="15" width="4" height="15" fill="#D4AF37" />
              </g>
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0B2514] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  5,500+ Volumes
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                Central Knowledge Library
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Digital Archives · Quiet Reading Carrels
              </p>
            </div>
          </div>
        );

      default:
        // Default rich educational scene
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#114B25] via-[#0B2514] to-[#0B1930] overflow-hidden flex flex-col justify-end p-5 select-none">
            <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full object-cover opacity-60" preserveAspectRatio="none">
              <circle cx="250" cy="150" r="120" fill="#D4AF37" opacity="0.1" />
              <circle cx="250" cy="150" r="80" fill="#D01C24" opacity="0.1" />
              <path d="M0 200 Q150 140 300 180 T500 160 L500 300 L0 300 Z" fill="#165B33" opacity="0.5" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2514] via-[#0B2514]/40 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white">
              {showBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D01C24] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  Sanskruthi Global School
                </div>
              )}
              <h4 className="text-base sm:text-lg font-bold font-heading text-white drop-shadow">
                {alt}
              </h4>
              <p className="text-xs text-[#EAC775] line-clamp-1 mt-0.5">
                Education for Life · Visakhapatnam
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 group ${aspectClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      {renderScene()}
    </div>
  );
};
