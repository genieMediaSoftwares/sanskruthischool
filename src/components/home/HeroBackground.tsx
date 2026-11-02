import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* High-Fidelity Architectural & Landscape Panoramic SVG Scene */}
      <svg
        viewBox="0 0 1600 900"
        className="w-full h-full object-cover object-center"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dawn sky gradient */}
          <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B1930" />
            <stop offset="35%" stopColor="#1E3A5F" />
            <stop offset="65%" stopColor="#C28B38" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#E2A645" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#114B25" />
          </linearGradient>

          {/* Morning Sunburst Glow */}
          <radialGradient id="sunGlow" cx="65%" cy="32%" r="45%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#FDE68A" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0B1930" stopOpacity="0" />
          </radialGradient>

          {/* Hillock gradients for deep aerial perspective */}
          <linearGradient id="hillLayer1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3E2B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0E2317" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="hillLayer2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#255938" />
            <stop offset="100%" stopColor="#10331D" />
          </linearGradient>

          {/* Golden Colonnade Stone Gradient */}
          <linearGradient id="buildingStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="50%" stopColor="#F4EBD9" />
            <stop offset="100%" stopColor="#E5D3B8" />
          </linearGradient>

          {/* Green Roof Tile Gradient */}
          <linearGradient id="roofTile" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#114B25" />
            <stop offset="50%" stopColor="#1C6836" />
            <stop offset="100%" stopColor="#0E3D1E" />
          </linearGradient>

          {/* Athletics Track Color */}
          <linearGradient id="trackGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B91C1C" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
        </defs>

        {/* Base Sky */}
        <rect width="1600" height="900" fill="url(#heroSky)" />

        {/* Radiant Morning Sun over the hills */}
        <circle cx="1040" cy="280" r="320" fill="url(#sunGlow)" />

        {/* Distant Rolling Hills of Bonangi (Layer 1) */}
        <path
          d="M0 480 Q250 320 550 420 T1100 360 Q1350 300 1600 400 L1600 900 L0 900 Z"
          fill="url(#hillLayer1)"
        />

        {/* Midground Hills with lush vegetation (Layer 2) */}
        <path
          d="M0 520 Q320 410 700 480 T1350 430 Q1480 410 1600 460 L1600 900 L0 900 Z"
          fill="url(#hillLayer2)"
        />

        {/* Sunbeam Light Rays */}
        <g opacity="0.18">
          <polygon points="1040,280 400,900 650,900" fill="#FEF08A" />
          <polygon points="1040,280 800,900 1100,900" fill="#FEF08A" />
          <polygon points="1040,280 1200,900 1500,900" fill="#FEF08A" />
        </g>

        {/* ==============================================================
            GRAND CAMPUS ARCHITECTURE SILHOUETTE & FAÇADE (Right & Center)
           ============================================================== */}
        <g transform="translate(680, 360)">
          {/* Main Central Tower / Clock Pavilion */}
          <rect x="240" y="-80" width="120" height="240" fill="url(#buildingStone)" rx="4" />
          {/* Central Dome & Spire */}
          <path d="M230 -80 Q300 -160 370 -80 Z" fill="url(#roofTile)" stroke="#D4AF37" strokeWidth="3" />
          <line x1="300" y1="-160" x2="300" y2="-200" stroke="#D4AF37" strokeWidth="4" />
          <circle cx="300" cy="-200" r="8" fill="#D01C24" stroke="#D4AF37" strokeWidth="2" />
          
          {/* Clock Dial */}
          <circle cx="300" cy="-25" r="22" fill="#114B25" stroke="#D4AF37" strokeWidth="3" />
          <circle cx="300" cy="-25" r="16" fill="#FFFBEB" />
          <line x1="300" y1="-25" x2="300" y2="-35" stroke="#0B1930" strokeWidth="2.5" />
          <line x1="300" y1="-25" x2="308" y2="-25" stroke="#0B1930" strokeWidth="2" />

          {/* Left Wing (Academic Classrooms) */}
          <rect x="-80" y="0" width="320" height="160" fill="url(#buildingStone)" rx="3" />
          <polygon points="-90,0 80,-35 240,0" fill="url(#roofTile)" />
          {/* Golden Balustrade */}
          <rect x="-85" y="-5" width="325" height="7" fill="#D4AF37" />

          {/* Right Wing (Science & STEM Block) */}
          <rect x="360" y="0" width="340" height="160" fill="url(#buildingStone)" rx="3" />
          <polygon points="360,0 520,-35 710,0" fill="url(#roofTile)" />
          <rect x="355" y="-5" width="350" height="7" fill="#D4AF37" />

          {/* Arched Colonnade on Ground Floor */}
          {[0, 1, 2, 3, 4].map(idx => (
            <g key={`col-l-${idx}`}>
              <rect x={-60 + idx * 55} y="80" width="12" height="80" fill="#E5D3B8" />
              <path d={`M ${-60 + idx * 55} 80 Q ${-35 + idx * 55} 55 ${-10 + idx * 55} 80`} fill="none" stroke="#D4AF37" strokeWidth="2" />
            </g>
          ))}
          {[0, 1, 2, 3, 4, 5].map(idx => (
            <g key={`col-r-${idx}`}>
              <rect x={380 + idx * 50} y="80" width="12" height="80" fill="#E5D3B8" />
              <path d={`M ${380 + idx * 50} 80 Q ${402 + idx * 50} 55 ${425 + idx * 50} 80`} fill="none" stroke="#D4AF37" strokeWidth="2" />
            </g>
          ))}

          {/* Upper Windows with Warm Golden Morning Glow */}
          {[0, 1, 2, 3, 4].map(idx => (
            <rect key={`win-l-${idx}`} x={-60 + idx * 55} y="25" width="30" height="38" rx="4" fill="#FEF08A" opacity="0.85" stroke="#114B25" strokeWidth="1.5" />
          ))}
          {[0, 1, 2, 3, 4, 5].map(idx => (
            <rect key={`win-r-${idx}`} x={380 + idx * 50} y="25" width="28" height="38" rx="4" fill="#FEF08A" opacity="0.85" stroke="#114B25" strokeWidth="1.5" />
          ))}

          {/* Grand Main Portico Entrance */}
          <polygon points="230,160 300,80 370,160" fill="url(#buildingStone)" stroke="#D4AF37" strokeWidth="2" />
          <rect x="250" y="100" width="100" height="60" fill="#0E2317" rx="3" />
        </g>

        {/* ==============================================================
            EXTENSIVE MANICURED LAWNS, SPORTS GROUNDS & PALM AVENUES
           ============================================================== */}
        {/* Main Campus Grounds Base */}
        <path d="M0 580 Q800 500 1600 560 L1600 900 L0 900 Z" fill="#14532D" />

        {/* 400m Athletic Running Track Curve */}
        <g transform="translate(100, 640)" opacity="0.85">
          <ellipse cx="600" cy="180" rx="550" ry="120" fill="url(#trackGrad)" />
          <ellipse cx="600" cy="180" rx="480" ry="85" fill="#15803D" />
          {/* White Lane Markings */}
          <ellipse cx="600" cy="180" rx="530" ry="110" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="16 8" />
          <ellipse cx="600" cy="180" rx="510" ry="100" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="16 8" />
        </g>

        {/* Equestrian Arena Fencing & Sand Manege (Far Left) */}
        <g transform="translate(40, 520)" opacity="0.75">
          <ellipse cx="140" cy="80" rx="120" ry="50" fill="#D97706" opacity="0.4" />
          <path d="M20 70 Q140 30 260 70 M20 90 Q140 50 260 90" stroke="#78350F" strokeWidth="2.5" fill="none" />
        </g>

        {/* Palm Tree Boulevard along entry drive */}
        {[
          { x: 300, y: 500, s: 0.9 },
          { x: 420, y: 520, s: 1.1 },
          { x: 560, y: 510, s: 1.0 },
          { x: 1250, y: 490, s: 1.0 },
          { x: 1380, y: 510, s: 1.15 },
          { x: 1520, y: 495, s: 0.95 }
        ].map((tree, tIdx) => (
          <g key={`tree-${tIdx}`} transform={`translate(${tree.x}, ${tree.y}) scale(${tree.s})`}>
            {/* Trunk */}
            <path d="M15 140 Q10 70 20 0" stroke="#713F12" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Palm fronds */}
            <path d="M20 0 Q-25 -35 -40 0" stroke="#166534" strokeWidth="4" fill="none" />
            <path d="M20 0 Q-10 -50 25 -30" stroke="#15803D" strokeWidth="4" fill="none" />
            <path d="M20 0 Q50 -40 70 -5" stroke="#166534" strokeWidth="4" fill="none" />
            <path d="M20 0 Q40 25 20 45" stroke="#15803D" strokeWidth="3.5" fill="none" />
            <path d="M20 0 Q-20 25 -10 40" stroke="#166534" strokeWidth="3.5" fill="none" />
          </g>
        ))}

        {/* Indian National Flag Mast at Central Circle */}
        <g transform="translate(680, 520)">
          <line x1="0" y1="0" x2="0" y2="100" stroke="#E2E8F0" strokeWidth="4" />
          <polygon points="0,0 35,10 0,20" fill="#FF9933" />
          <polygon points="0,20 35,30 0,40" fill="#FFFFFF" />
          <polygon points="0,40 35,50 0,60" fill="#138808" />
          <circle cx="15" cy="30" r="4" fill="#000080" />
        </g>
      </svg>

      {/* ==============================================================
          CINEMATIC OVERLAY GRADIENTS (ENSURES 100% CONTRAST & MOOD)
         ============================================================== */}
      {/* Heavy left-side scrim to make text 100% legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071E10]/95 via-[#071E10]/80 to-[#071E10]/45" />

      {/* Bottom fade into the white stats section */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#071E10] via-[#071E10]/70 to-transparent" />

      {/* Subtle gold atmospheric shimmer in top corner */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
