import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

/**
 * WatchDial Component
 * Renders the ivory dial base, guilloché wave ripples, railway track, and center cartouche.
 */
export default function WatchDial({ onMonogramClick }) {
  // Generate 60 minute ticks around the railway track
  const railwayTicks = Array.from({ length: 60 }, (_, i) => {
    const angle = i * 6; // 360 / 60
    const isHour = i % 5 === 0;
    return (
      <line
        key={`rail-${i}`}
        x1="400"
        y1={isHour ? "134" : "138"}
        x2="400"
        y2="146"
        stroke={isHour ? "#211915" : "#6E5B4F"}
        strokeWidth={isHour ? "2" : "0.9"}
        transform={`rotate(${angle} 400 400)`}
      />
    );
  });

  // Diamond/Dot cabochon indices at 5-minute intervals
  const hourStuds = Array.from({ length: 12 }, (_, i) => {
    const angle = i * 30;
    return (
      <g key={`stud-${i}`} transform={`rotate(${angle} 400 400)`}>
        <circle cx="400" cy="126" r="2.8" fill="url(#caseRimGradient)" stroke="#38271F" strokeWidth="0.8" />
        <circle cx="399.2" cy="125.2" r="0.8" fill="#FFF9F2" />
      </g>
    );
  });

  // Guilloché concentric undulating wave curves (engine-turned texture)
  const guillocheWaves = [110, 126, 142, 158, 174, 190, 206, 222].map((r, idx) => {
    let path = `M ${400 + r} 400 `;
    const points = 72;
    for (let p = 1; p <= points; p++) {
      const theta = (p * 2 * Math.PI) / points;
      const wave = Math.sin(theta * 24) * 2.2;
      const curR = r + wave;
      const x = 400 + curR * Math.cos(theta);
      const y = 400 + curR * Math.sin(theta);
      path += `L ${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    path += "Z";
    return (
      <path
        key={`guilloche-${idx}`}
        d={path}
        fill="none"
        stroke="#D8C7AC"
        strokeWidth="0.65"
        opacity={0.65 - idx * 0.04}
      />
    );
  });

  return (
    <g className="watch-dial-assembly">
      {/* 1. MASTER IVORY DIAL FACE PLATE */}
      <circle
        cx="400"
        cy="400"
        r="278"
        fill="url(#dialIvoryGradient)"
        filter="url(#rehautInnerShadow)"
      />

      {/* Dial Rim Accent Rings */}
      <circle cx="400" cy="400" r="276" fill="none" stroke="#B87956" strokeWidth="0.8" opacity="0.6" />
      <circle cx="400" cy="400" r="270" fill="none" stroke="#261C14" strokeWidth="1.2" />

      {/* 2. GUILLOCHÉ ENGINE-TURNED WAVE RIPPLES */}
      <g className="guilloche-waves-layer" style={{ pointerEvents: 'none' }}>
        {guillocheWaves}
      </g>

      {/* 3. RAILWAY MINUTE TRACK */}
      <g className="railway-track-layer" style={{ pointerEvents: 'none' }}>
        <circle cx="400" cy="400" r="266" fill="none" stroke="#2E1F18" strokeWidth="1.4" />
        <circle cx="400" cy="400" r="254" fill="none" stroke="#2E1F18" strokeWidth="1.4" />
        {railwayTicks}
        {hourStuds}
      </g>

      {/* Inner dial frame ring before Roman Numerals */}
      <circle cx="400" cy="400" r="214" fill="none" stroke="#8C5E3C" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.75" />

      {/* 4. CENTER ENGRAVED CARTOUCHE & MONOGRAM PLAQUE */}
      <g
        className="center-cartouche-plaque"
        transform="translate(400, 345)"
        onClick={onMonogramClick}
        style={{ cursor: 'pointer', pointerEvents: 'all' }}
        title="Triple-click the R monogram for a horologist's secret"
        role="button"
        tabIndex={0}
      >
        <rect
          x="-96"
          y="-22"
          width="192"
          height="44"
          rx="6"
          fill="url(#dialIvoryGradient)"
          stroke="#8C5E3C"
          strokeWidth="1.5"
          filter="url(#caseBevel)"
        />
        <rect
          x="-92"
          y="-18"
          width="184"
          height="36"
          rx="4"
          fill="none"
          stroke="#D5C1A3"
          strokeWidth="0.8"
        />

        {/* Brand: RAVIKIRAN S */}
        <text
          x="0"
          y="-4"
          fontFamily="Cinzel, serif"
          fontSize="11"
          fontWeight="800"
          letterSpacing="2.8"
          fill="#1C140F"
          textAnchor="middle"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </text>

        {/* Subtitle: CSE · AI · TECHNOLOGY */}
        <text
          x="0"
          y="10"
          fontFamily="Cinzel, serif"
          fontSize="5.8"
          fontWeight="600"
          letterSpacing="1.4"
          fill="#704D36"
          textAnchor="middle"
        >
          {PERSONAL_INFO.subtitle}
        </text>

        {/* Small Golden Corner Stars */}
        <circle cx="-82" cy="0" r="1.5" fill="#C8A46A" />
        <circle cx="82" cy="0" r="1.5" fill="#C8A46A" />
      </g>

      {/* Dial Origin Bottom Stamp */}
      <text
        x="400"
        y="672"
        fontFamily="Cinzel, serif"
        fontSize="5.5"
        fontWeight="600"
        fill="#8C5E3C"
        textAnchor="middle"
        letterSpacing="1.5"
        style={{ pointerEvents: 'none' }}
      >
        CRAFTED · IN HOROLOGY
      </text>
    </g>
  );
}
