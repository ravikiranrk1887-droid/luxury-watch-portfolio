import React from 'react';

/**
 * WatchGradients Component
 * SVG definitions providing photorealistic metallic gradients,
 * 3D lighting drop shadows, and the engine-turned guilloché wave patterns.
 */
export default function WatchGradients() {
  return (
    <defs>
      {/* ============================================================== */}
      {/* 1. METALLIC ROSE-GOLD GRADIENTS                                */}
      {/* ============================================================== */}
      {/* Deep Rose Gold Case Angle Gradient */}
      <linearGradient id="caseRoseGoldDeep" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E5B895" />
        <stop offset="18%" stopColor="#C8A46A" />
        <stop offset="35%" stopColor="#B87956" />
        <stop offset="55%" stopColor="#8E5A3D" />
        <stop offset="75%" stopColor="#B87956" />
        <stop offset="90%" stopColor="#D99B77" />
        <stop offset="100%" stopColor="#514431" />
      </linearGradient>

      {/* High-Luster Bezel Rim Gradient */}
      <radialGradient id="caseRimGradient" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#F9DFCB" />
        <stop offset="25%" stopColor="#E5B895" />
        <stop offset="55%" stopColor="#B87956" />
        <stop offset="85%" stopColor="#6C4229" />
        <stop offset="100%" stopColor="#3E2516" />
      </radialGradient>

      {/* Lugs Metallic Gradient */}
      <linearGradient id="lugRoseGoldGradient" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#F4D2BA" />
        <stop offset="30%" stopColor="#C8A46A" />
        <stop offset="60%" stopColor="#B87956" />
        <stop offset="85%" stopColor="#6E442B" />
        <stop offset="100%" stopColor="#3A2215" />
      </linearGradient>

      {/* Specular Glint Highlight */}
      <linearGradient id="goldSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B87956" stopOpacity="0.4" />
        <stop offset="30%" stopColor="#FDEBD8" stopOpacity="0.95" />
        <stop offset="50%" stopColor="#FFF9F2" stopOpacity="1" />
        <stop offset="70%" stopColor="#FDEBD8" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#B87956" stopOpacity="0.4" />
      </linearGradient>

      {/* Leaf Relief Light */}
      <linearGradient id="leafGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F8DFCE" />
        <stop offset="35%" stopColor="#DEAB88" />
        <stop offset="75%" stopColor="#A86A47" />
        <stop offset="100%" stopColor="#5B3824" />
      </linearGradient>

      {/* Dark Bronze Recessed Floor beneath Bezel */}
      <radialGradient id="bezelFloorGradient" cx="50%" cy="50%" r="50%">
        <stop offset="80%" stopColor="#1E1611" />
        <stop offset="95%" stopColor="#3A2A1E" />
        <stop offset="100%" stopColor="#120D0A" />
      </radialGradient>

      {/* Polished Rehaut (Inner Bezel Slant) */}
      <radialGradient id="rehautGradient" cx="42%" cy="38%" r="60%">
        <stop offset="88%" stopColor="#2A1E17" />
        <stop offset="92%" stopColor="#784C32" />
        <stop offset="96%" stopColor="#E5B895" />
        <stop offset="99%" stopColor="#FFE0CA" />
        <stop offset="100%" stopColor="#6C4229" />
      </radialGradient>

      {/* Crown Knurling Gradient */}
      <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#514431" />
        <stop offset="25%" stopColor="#B87956" />
        <stop offset="50%" stopColor="#FDEBD8" />
        <stop offset="75%" stopColor="#B87956" />
        <stop offset="100%" stopColor="#38271F" />
      </linearGradient>

      {/* Pusher Gradient */}
      <linearGradient id="pusherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E5B895" />
        <stop offset="40%" stopColor="#B87956" />
        <stop offset="75%" stopColor="#6C4229" />
        <stop offset="100%" stopColor="#38271F" />
      </linearGradient>

      {/* Screw Head Gradient */}
      <linearGradient id="screwHeadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0BC98" />
        <stop offset="50%" stopColor="#8E5A3D" />
        <stop offset="100%" stopColor="#38271F" />
      </linearGradient>

      {/* Alligator Grain Leather Texture Pattern */}
      <pattern id="alligatorLeather" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="40" height="40" fill="#241712" />
        {/* Alligator scales simulation */}
        <path d="M 2 2 H 18 V 18 H 2 Z" fill="#2F1E17" stroke="#170F0B" strokeWidth="1.2" rx="2" />
        <path d="M 22 2 H 38 V 18 H 22 Z" fill="#2A1B14" stroke="#170F0B" strokeWidth="1.2" rx="2" />
        <path d="M 2 22 H 18 V 38 H 2 Z" fill="#2D1C16" stroke="#170F0B" strokeWidth="1.2" rx="2" />
        <path d="M 22 22 H 38 V 38 H 22 Z" fill="#33211A" stroke="#170F0B" strokeWidth="1.2" rx="2" />
      </pattern>

      {/* ============================================================== */}
      {/* 2. DIAL FACE GRADIENTS & GUILLOCHÉ PATTERNS                   */}
      {/* ============================================================== */}
      {/* Warm Ivory & Champagne Dial Gradient */}
      <radialGradient id="dialIvoryGradient" cx="48%" cy="46%" r="54%">
        <stop offset="0%" stopColor="#FFFDF9" />
        <stop offset="45%" stopColor="#F7EFE1" />
        <stop offset="75%" stopColor="#EFE4CF" />
        <stop offset="92%" stopColor="#E4D5BC" />
        <stop offset="100%" stopColor="#D5C1A3" />
      </radialGradient>

      {/* Subdial Concave Azurage Graining Background */}
      <radialGradient id="subdialAzurage" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FAF4E8" />
        <stop offset="70%" stopColor="#EFE3CB" />
        <stop offset="92%" stopColor="#E2D1B2" />
        <stop offset="100%" stopColor="#CDB896" />
      </radialGradient>

      {/* Celestial Moon Phase Night Sky */}
      <radialGradient id="nightSkyGradient" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#1B2B48" />
        <stop offset="40%" stopColor="#0F1B30" />
        <stop offset="80%" stopColor="#080D1A" />
        <stop offset="100%" stopColor="#04060C" />
      </radialGradient>

      {/* Celestial Gold Moon Disc */}
      <radialGradient id="moonGold" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFF4D0" />
        <stop offset="35%" stopColor="#F5D77F" />
        <stop offset="70%" stopColor="#D4A738" />
        <stop offset="100%" stopColor="#8C6514" />
      </radialGradient>

      {/* Hand Material: Blued Steel & Burnished Espresso */}
      <linearGradient id="bluedSteelHand" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1A2436" />
        <stop offset="45%" stopColor="#253856" />
        <stop offset="55%" stopColor="#4A658E" />
        <stop offset="70%" stopColor="#253856" />
        <stop offset="100%" stopColor="#121A26" />
      </linearGradient>

      {/* Second Hand Rose Gold Finish */}
      <linearGradient id="secondHandGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B87956" />
        <stop offset="50%" stopColor="#FFE0CA" />
        <stop offset="100%" stopColor="#7E4C31" />
      </linearGradient>

      {/* ============================================================== */}
      {/* 3. FILTERS: DROP SHADOWS, BEVELS & GLOWS                      */}
      {/* ============================================================== */}
      {/* Deep Master Drop Shadow */}
      <filter id="caseDropShadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="0" dy="25" stdDeviation="22" floodColor="#000000" floodOpacity="0.85" />
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#1E140C" floodOpacity="0.5" />
      </filter>

      {/* Bevel for metallic 3D parts */}
      <filter id="caseBevel" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="2" stdDeviation="1.5" floodColor="#FFE3D1" floodOpacity="0.4" result="highlight" />
        <feDropShadow dx="-2" dy="-2" stdDeviation="2" floodColor="#21150E" floodOpacity="0.7" result="shadow" />
      </filter>

      {/* Interactive Number Metallic Halo */}
      <filter id="goldGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#D99B77" floodOpacity="0.8" />
        <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#C8A46A" floodOpacity="0.45" />
      </filter>

      {/* Dial Shadow from Rehaut */}
      <filter id="rehautInnerShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
        <feOffset dx="0" dy="4" />
        <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
        <feFlood floodColor="#2D1C13" floodOpacity="0.6" />
        <feComposite in2="shadowDiff" operator="in" />
        <feComposite in2="SourceGraphic" operator="over" />
      </filter>
    </defs>
  );
}
