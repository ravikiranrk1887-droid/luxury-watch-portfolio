import React from 'react';

/**
 * WatchCase Component
 * Renders the rose-gold engraved case inspired by Patek Philippe Grandmaster Chime:
 * - Alligator grain leather strap (top & bottom) with gold saddle stitching
 * - Fluted/ribbed rose gold lugs with ornate scrolls
 * - Multiple stepped rose-gold metallic bezel rings
 * - Intricate engraved laurel leaf wreath / relief border
 * - Fluted winding crown at 3 o'clock with knurled ridges
 * - Mechanical pushers at 2, 4, 8, 10 o'clock
 */
export default function WatchCase() {
  // Generate 40 engraved laurel/acanthus leaf elements for the ornate bezel
  const bezelLeaves = Array.from({ length: 44 }, (_, i) => {
    const angle = (i * 360) / 44;
    return (
      <g key={i} transform={`rotate(${angle} 400 400)`}>
        {/* Leaf relief / chevron carving */}
        <path
          d="M 397 52 C 393 63 388 74 382 82 C 392 78 400 78 408 82 C 404 73 401 62 397 52 Z"
          fill="url(#leafGradientLight)"
          stroke="#514431"
          strokeWidth="0.8"
        />
        {/* Inner spine highlight */}
        <line
          x1="397"
          y1="55"
          x2="397"
          y2="80"
          stroke="url(#goldSpecular)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Shadow crevice between leaves */}
        <path
          d="M 382 82 C 388 78 396 79 400 81"
          fill="none"
          stroke="#261C14"
          strokeWidth="1.2"
        />
      </g>
    );
  });

  // Screw accents along the outer bezel flange
  const screws = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12 + 15;
    return (
      <g key={`screw-${i}`} transform={`rotate(${angle} 400 400)`}>
        <circle cx="400" cy="98" r="4" fill="url(#screwHeadGradient)" stroke="#38271F" strokeWidth="0.8" />
        <line x1="397.5" y1="98" x2="402.5" y2="98" stroke="#1D1510" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    );
  });

  return (
    <g className="watch-case-assembly" style={{ pointerEvents: 'none' }}>
      {/* ============================================================== */}
      {/* 1. LEATHER STRAP (TOP & BOTTOM)                                */}
      {/* ============================================================== */}
      {/* Top Leather Strap */}
      <g className="strap-top">
        <path
          d="M 270 20 L 285 -160 L 515 -160 L 530 20 Z"
          fill="url(#alligatorLeather)"
          filter="url(#caseDropShadow)"
        />
        {/* Stitching lines */}
        <line x1="295" y1="15" x2="305" y2="-150" stroke="#C8A46A" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.85" />
        <line x1="505" y1="15" x2="495" y2="-150" stroke="#C8A46A" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.85" />
        {/* Leather texture shading */}
        <path d="M 270 20 L 285 -160 L 320 -160 L 310 20 Z" fill="#000" opacity="0.25" />
        <path d="M 490 20 L 480 -160 L 515 -160 L 530 20 Z" fill="#000" opacity="0.35" />
      </g>

      {/* Bottom Leather Strap */}
      <g className="strap-bottom">
        <path
          d="M 270 780 L 285 960 L 515 960 L 530 780 Z"
          fill="url(#alligatorLeather)"
          filter="url(#caseDropShadow)"
        />
        {/* Stitching lines */}
        <line x1="295" y1="785" x2="305" y2="950" stroke="#C8A46A" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.85" />
        <line x1="505" y1="785" x2="495" y2="950" stroke="#C8A46A" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.85" />
        {/* Leather shading */}
        <path d="M 270 780 L 285 960 L 320 960 L 310 780 Z" fill="#000" opacity="0.25" />
        <path d="M 490 780 L 480 960 L 515 960 L 530 780 Z" fill="#000" opacity="0.35" />
      </g>

      {/* ============================================================== */}
      {/* 2. ORNATE ENGRAVED LUGS & CONNECTORS                           */}
      {/* ============================================================== */}
      {/* Top Lugs */}
      <g className="lug-top-assembly">
        {/* Top-Left Lug */}
        <g transform="translate(255, 30)">
          <path
            d="M 0 50 C -15 20 -10 -25 20 -40 C 45 -48 65 -30 65 10 C 65 30 45 60 20 65 Z"
            fill="url(#lugRoseGoldGradient)"
            stroke="#514431"
            strokeWidth="2"
            filter="url(#caseBevel)"
          />
          {/* Fluted ridges on lug */}
          <path d="M 5 -20 C 15 -10 25 15 25 45" stroke="#F0BC98" strokeWidth="2.5" fill="none" opacity="0.8" />
          <path d="M -2 0 C 8 10 15 25 15 45" stroke="#38271F" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="15" cy="-25" r="5" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="1" />
        </g>
        {/* Top-Right Lug */}
        <g transform="translate(545, 30) scale(-1, 1)">
          <path
            d="M 0 50 C -15 20 -10 -25 20 -40 C 45 -48 65 -30 65 10 C 65 30 45 60 20 65 Z"
            fill="url(#lugRoseGoldGradient)"
            stroke="#514431"
            strokeWidth="2"
            filter="url(#caseBevel)"
          />
          <path d="M 5 -20 C 15 -10 25 15 25 45" stroke="#F0BC98" strokeWidth="2.5" fill="none" opacity="0.8" />
          <path d="M -2 0 C 8 10 15 25 15 45" stroke="#38271F" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="15" cy="-25" r="5" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="1" />
        </g>
        {/* Top Lug Center Arch Bar */}
        <rect x="290" y="2" width="220" height="24" rx="8" fill="url(#caseRimGradient)" stroke="#514431" strokeWidth="1.5" />
        <line x1="295" y1="14" x2="505" y2="14" stroke="#F0BC98" strokeWidth="1" opacity="0.75" />
      </g>

      {/* Bottom Lugs */}
      <g className="lug-bottom-assembly">
        {/* Bottom-Left Lug */}
        <g transform="translate(255, 770) scale(1, -1)">
          <path
            d="M 0 50 C -15 20 -10 -25 20 -40 C 45 -48 65 -30 65 10 C 65 30 45 60 20 65 Z"
            fill="url(#lugRoseGoldGradient)"
            stroke="#514431"
            strokeWidth="2"
            filter="url(#caseBevel)"
          />
          <path d="M 5 -20 C 15 -10 25 15 25 45" stroke="#F0BC98" strokeWidth="2.5" fill="none" opacity="0.8" />
          <circle cx="15" cy="-25" r="5" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="1" />
        </g>
        {/* Bottom-Right Lug */}
        <g transform="translate(545, 770) scale(-1, -1)">
          <path
            d="M 0 50 C -15 20 -10 -25 20 -40 C 45 -48 65 -30 65 10 C 65 30 45 60 20 65 Z"
            fill="url(#lugRoseGoldGradient)"
            stroke="#514431"
            strokeWidth="2"
            filter="url(#caseBevel)"
          />
          <path d="M 5 -20 C 15 -10 25 15 25 45" stroke="#F0BC98" strokeWidth="2.5" fill="none" opacity="0.8" />
          <circle cx="15" cy="-25" r="5" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="1" />
        </g>
        {/* Bottom Lug Center Arch Bar */}
        <rect x="290" y="774" width="220" height="24" rx="8" fill="url(#caseRimGradient)" stroke="#514431" strokeWidth="1.5" />
        <line x1="295" y1="786" x2="505" y2="786" stroke="#F0BC98" strokeWidth="1" opacity="0.75" />
      </g>

      {/* ============================================================== */}
      {/* 3. CROWN & MECHANICAL PUSHERS                                  */}
      {/* ============================================================== */}
      {/* Main Fluted Winding Crown at 3 o'clock (right) */}
      <g className="crown-assembly" transform="translate(760, 400)">
        {/* Crown stem base */}
        <rect x="0" y="-22" width="16" height="44" rx="3" fill="#514431" stroke="#261C14" strokeWidth="1" />
        {/* Fluted crown cylinder with knurled grips */}
        <rect x="12" y="-32" width="38" height="64" rx="6" fill="url(#crownGradient)" stroke="#38271F" strokeWidth="1.5" />
        {/* Knurled grip grooves */}
        {[-24, -18, -12, -6, 0, 6, 12, 18, 24].map((offsetY, idx) => (
          <line
            key={`crown-groove-${idx}`}
            x1="14"
            y1={offsetY}
            x2="48"
            y2={offsetY}
            stroke={idx % 2 === 0 ? "#F0BC98" : "#261C14"}
            strokeWidth="1.8"
          />
        ))}
        {/* Crown domed end-cap with engraved jewel accent */}
        <path d="M 50 -26 C 58 -15 58 15 50 26 Z" fill="url(#goldSpecular)" stroke="#514431" strokeWidth="1" />
        <circle cx="52" cy="0" r="4" fill="#C8A46A" stroke="#514431" strokeWidth="0.8" />
      </g>

      {/* Pusher at 2 o'clock */}
      <g transform="rotate(-34 400 400) translate(760, 400)">
        <rect x="-2" y="-14" width="14" height="28" rx="3" fill="#514431" />
        <rect x="10" y="-18" width="22" height="36" rx="4" fill="url(#pusherGradient)" stroke="#38271F" strokeWidth="1" />
        <line x1="22" y1="-16" x2="22" y2="16" stroke="#F0BC98" strokeWidth="1.2" />
      </g>

      {/* Pusher at 4 o'clock */}
      <g transform="rotate(34 400 400) translate(760, 400)">
        <rect x="-2" y="-14" width="14" height="28" rx="3" fill="#514431" />
        <rect x="10" y="-18" width="22" height="36" rx="4" fill="url(#pusherGradient)" stroke="#38271F" strokeWidth="1" />
        <line x1="22" y1="-16" x2="22" y2="16" stroke="#F0BC98" strokeWidth="1.2" />
      </g>

      {/* Pusher at 8 o'clock */}
      <g transform="rotate(146 400 400) translate(760, 400)">
        <rect x="-2" y="-14" width="14" height="28" rx="3" fill="#514431" />
        <rect x="10" y="-18" width="22" height="36" rx="4" fill="url(#pusherGradient)" stroke="#38271F" strokeWidth="1" />
      </g>

      {/* Pusher at 10 o'clock */}
      <g transform="rotate(-146 400 400) translate(760, 400)">
        <rect x="-2" y="-14" width="14" height="28" rx="3" fill="#514431" />
        <rect x="10" y="-18" width="22" height="36" rx="4" fill="url(#pusherGradient)" stroke="#38271F" strokeWidth="1" />
      </g>

      {/* ============================================================== */}
      {/* 4. MAIN THREE-DIMENSIONAL ROSE-GOLD CASE BODY & BEZEL          */}
      {/* ============================================================== */}
      {/* Master drop shadow beneath case */}
      <circle cx="400" cy="406" r="372" fill="#000000" opacity="0.65" filter="url(#caseDropShadow)" />

      {/* Outer Case Rim 1 (Massive Polished Rose Gold Band) */}
      <circle cx="400" cy="400" r="370" fill="url(#caseRoseGoldDeep)" stroke="#38271F" strokeWidth="2.5" />

      {/* Concentric Bevel Step 2 (Machined Groove) */}
      <circle cx="400" cy="400" r="358" fill="url(#caseRimGradient)" stroke="#514431" strokeWidth="1.5" />

      {/* Recessed Engraved Channel (Bronze Shadow Floor for Laurel Wreath) */}
      <circle cx="400" cy="400" r="348" fill="url(#bezelFloorGradient)" stroke="#261C14" strokeWidth="2" />

      {/* ORNATE ENGRAVED LAUREL LEAF BEZEL (44 3D relief carved leaves) */}
      <g className="bezel-leaves-group">
        {bezelLeaves}
      </g>

      {/* Inner Stepped Bezel Rings */}
      <circle cx="400" cy="400" r="316" fill="none" stroke="url(#goldSpecular)" strokeWidth="3" opacity="0.9" />
      <circle cx="400" cy="400" r="313" fill="none" stroke="#38271F" strokeWidth="1.5" />
      
      {/* Screw Heads along flange */}
      <g className="bezel-screws-group">
        {screws}
      </g>

      {/* Mirror-Polished Inner Rose Gold Bezel Slant (Rehaut / Chapter Flange) */}
      <circle cx="400" cy="400" r="294" fill="url(#rehautGradient)" stroke="#514431" strokeWidth="2" />
      <circle cx="400" cy="400" r="286" fill="none" stroke="#261C14" strokeWidth="1.2" />

      {/* Fine Machined Coin-Edge Ring */}
      <circle
        cx="400"
        cy="400"
        r="283"
        fill="none"
        stroke="#8E5A3D"
        strokeWidth="1.5"
        strokeDasharray="1.5 2.5"
      />
    </g>
  );
}
