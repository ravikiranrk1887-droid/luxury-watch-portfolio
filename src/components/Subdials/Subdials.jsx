import React from 'react';

/**
 * Subdials Component
 * Four intricate mechanical complications inspired by the Patek Philippe Grandmaster Chime:
 * 1. Top (12 o'clock): 24h Dual-Time / Alarm subdial with azurage ring & hand
 * 2. Bottom (6 o'clock): Astronomical Moon Phase aperture & 31-day calendar track
 * 3. Left (9 o'clock): Power Reserve / Mouvement complication arc
 * 4. Right (3 o'clock): Sonnerie Chime indicator complication
 */
export default function Subdials({ currentTime, activeSection }) {
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const date = currentTime.getDate();

  // 24-hour subdial hand angle (0-360 deg based on 24 hours + minutes)
  const subdial24Angle = (hours + minutes / 60) * 15;

  // Calendar date needle angle (31 days mapped to circular perimeter)
  const calendarAngle = (date / 31) * 360 - 90;

  // Moon phase cycle simulation (approx 29.5 days)
  const moonPhaseOffset = ((date % 30) / 30) * 40 - 20;

  return (
    <g className="subdials-layer" style={{ pointerEvents: 'none' }}>
      {/* ============================================================== */}
      {/* 1. TOP SUBDIAL (24-Hour Complication at 12 o'clock)            */}
      {/* ============================================================== */}
      <g className="subdial-top" transform="translate(400, 240)">
        {/* Recessed bezel ring */}
        <circle cx="0" cy="0" r="76" fill="url(#subdialAzurage)" stroke="#8C5E3C" strokeWidth="1.8" />
        <circle cx="0" cy="0" r="74" fill="none" stroke="#261C14" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="71" fill="none" stroke="url(#goldSpecular)" strokeWidth="1" />

        {/* Concentric Azurage Grooves (engine turned circular graining) */}
        {[65, 58, 51, 44, 37, 30].map((radius, idx) => (
          <circle key={`top-groove-${idx}`} cx="0" cy="0" r={radius} fill="none" stroke="#D5C1A3" strokeWidth="0.6" opacity="0.8" />
        ))}

        {/* Outer 24-Hour Railway Track */}
        <circle cx="0" cy="0" r="68" fill="none" stroke="#38271F" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="62" fill="none" stroke="#38271F" strokeWidth="0.8" />

        {/* 24-Hour Ticks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const deg = (i * 360) / 24;
          const isMajor = i % 2 === 0;
          return (
            <line
              key={`tick-24-${i}`}
              x1="0"
              y1={isMajor ? "-68" : "-66"}
              x2="0"
              y2="-62"
              stroke="#2E1F18"
              strokeWidth={isMajor ? "1.2" : "0.7"}
              transform={`rotate(${deg})`}
            />
          );
        })}

        {/* 24-Hour Numerals (2, 4, 6, 8... 24) */}
        {[
          { num: "24", deg: 0 },
          { num: "2", deg: 30 },
          { num: "4", deg: 60 },
          { num: "6", deg: 90 },
          { num: "8", deg: 120 },
          { num: "10", deg: 150 },
          { num: "12", deg: 180 },
          { num: "14", deg: 210 },
          { num: "16", deg: 240 },
          { num: "18", deg: 270 },
          { num: "20", deg: 300 },
          { num: "22", deg: 330 },
        ].map((item, idx) => {
          const rad = (item.deg - 90) * (Math.PI / 180);
          const x = Math.cos(rad) * 53;
          const y = Math.sin(rad) * 53;
          return (
            <text
              key={`num24-${idx}`}
              x={x}
              y={y + 3}
              fontFamily="Cinzel, serif"
              fontSize="7.5"
              fontWeight="600"
              fill="#2E1F18"
              textAnchor="middle"
            >
              {item.num}
            </text>
          );
        })}

        {/* Commemorative Inscription */}
        <text x="0" y="-14" fontFamily="Cinzel, serif" fontSize="6" fontWeight="600" fill="#8C5E3C" textAnchor="middle" letterSpacing="0.8">
          HOROLOGY
        </text>
        <text x="0" y="24" fontFamily="Cinzel, serif" fontSize="5.5" fontWeight="600" fill="#58463B" textAnchor="middle" letterSpacing="1">
          PRECISION
        </text>

        {/* 24-Hour Subdial Needle Hand */}
        <g transform={`rotate(${subdial24Angle})`}>
          <path d="M 0 10 L -2.5 0 L 0 -48 L 2.5 0 Z" fill="url(#bluedSteelHand)" stroke="#111" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="4" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="0.8" />
        </g>
      </g>

      {/* ============================================================== */}
      {/* 2. BOTTOM SUBDIAL (Moon Phase & Calendar at 6 o'clock)         */}
      {/* ============================================================== */}
      <g className="subdial-bottom" transform="translate(400, 560)">
        {/* Recessed outer rim */}
        <circle cx="0" cy="0" r="90" fill="url(#subdialAzurage)" stroke="#8C5E3C" strokeWidth="2" />
        <circle cx="0" cy="0" r="87" fill="none" stroke="#261C14" strokeWidth="1" />
        <circle cx="0" cy="0" r="84" fill="none" stroke="url(#goldSpecular)" strokeWidth="1" />

        {/* Azurage concentric micro-lines */}
        {[78, 72, 66, 60].map((r, i) => (
          <circle key={`bot-groove-${i}`} cx="0" cy="0" r={r} fill="none" stroke="#D5C1A3" strokeWidth="0.5" opacity="0.75" />
        ))}

        {/* 31-Day Date Ring */}
        {[
          1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31
        ].map((day, idx) => {
          const angle = ((day - 1) / 30) * 270 - 225; // Arc from bottom left across top to bottom right
          const rad = (angle - 90) * (Math.PI / 180);
          const x = Math.cos(rad) * 73;
          const y = Math.sin(rad) * 73;
          const isActive = day === date;
          return (
            <text
              key={`day-${day}`}
              x={x}
              y={y + 3.2}
              fontFamily="Cinzel, serif"
              fontSize="7.5"
              fontWeight={isActive ? "800" : "600"}
              fill={isActive ? "#B87956" : "#2E1F18"}
              textAnchor="middle"
            >
              {day}
            </text>
          );
        })}

        {/* ASTRONOMICAL MOON PHASE APERTURE */}
        {/* Night Sky Cutout Arc */}
        <g className="moon-aperture" clipPath="url(#moonApertureClip)">
          {/* Night Sky Background */}
          <rect x="-48" y="-36" width="96" height="72" fill="url(#nightSkyGradient)" />
          
          {/* Micro Celestial Stars */}
          {[
            { cx: -28, cy: -18, r: 0.8 },
            { cx: -18, cy: -24, r: 1.2 },
            { cx: -8, cy: -15, r: 0.6 },
            { cx: 8, cy: -22, r: 0.9 },
            { cx: 22, cy: -16, r: 1.3 },
            { cx: 32, cy: -24, r: 0.7 },
            { cx: -32, cy: 6, r: 0.9 },
            { cx: 28, cy: 8, r: 1 },
          ].map((star, idx) => (
            <circle key={`star-${idx}`} cx={star.cx} cy={star.cy} r={star.r} fill="#FFF9DF" opacity="0.9" />
          ))}

          {/* Golden Moon Disc */}
          <circle cx={moonPhaseOffset} cy="-8" r="18" fill="url(#moonGold)" stroke="#6C4D11" strokeWidth="0.8" />
          {/* Subtle lunar crater texture */}
          <circle cx={moonPhaseOffset - 4} cy="-11" r="3" fill="#D4A738" opacity="0.4" />
          <circle cx={moonPhaseOffset + 5} cy="-5" r="4" fill="#D4A738" opacity="0.35" />
        </g>

        {/* Clip path for the signature arched double-cusp moon aperture */}
        <clipPath id="moonApertureClip">
          <path d="M -38 0 C -38 -26 38 -26 38 0 C 26 4 15 10 0 10 C -15 10 -26 4 -38 0 Z" />
        </clipPath>

        {/* Ornate Gold Border for Moon Phase Aperture */}
        <path
          d="M -38 0 C -38 -26 38 -26 38 0 C 26 4 15 10 0 10 C -15 10 -26 4 -38 0 Z"
          fill="none"
          stroke="url(#caseRimGradient)"
          strokeWidth="1.8"
        />

        {/* Inscription inside bottom complication */}
        <text x="0" y="24" fontFamily="Cinzel, serif" fontSize="6.5" fontWeight="700" fill="#58463B" textAnchor="middle" letterSpacing="1.2">
          RAVIKIRAN
        </text>

        {/* Calendar Pointer Needle */}
        <g transform={`rotate(${calendarAngle})`}>
          <path d="M 0 10 L -2 0 L 0 -70 L 2 0 Z" fill="#B87956" stroke="#261C14" strokeWidth="0.6" />
          {/* Crescent Moon Tip */}
          <path d="M -4 -68 C -1 -72 1 -72 4 -68 C 2 -69 -2 -69 -4 -68 Z" fill="#FFE0CA" />
          <circle cx="0" cy="0" r="4.5" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="0.8" />
        </g>
      </g>

      {/* ============================================================== */}
      {/* 3. LEFT SUBDIAL (Power Reserve / Mouvement at 9 o'clock)       */}
      {/* ============================================================== */}
      <g className="subdial-left" transform="translate(244, 400)">
        <circle cx="0" cy="0" r="48" fill="url(#subdialAzurage)" stroke="#8C5E3C" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#261C14" strokeWidth="0.7" />

        {/* Calibrated Power Reserve Scale Arc */}
        <path
          d="M -30 20 A 36 36 0 0 1 -30 -20"
          fill="none"
          stroke="#38271F"
          strokeWidth="1.5"
        />
        {/* Scale Ticks */}
        {[-40, -20, 0, 20, 40].map((deg, i) => (
          <line
            key={`pwr-tick-${i}`}
            x1="-36"
            y1="0"
            x2="-30"
            y2="0"
            stroke="#261C14"
            strokeWidth="1.2"
            transform={`rotate(${deg})`}
          />
        ))}

        <text x="-12" y="-18" fontFamily="Cinzel, serif" fontSize="5.5" fontWeight="700" fill="#B87956">UP</text>
        <text x="-16" y="24" fontFamily="Cinzel, serif" fontSize="5.5" fontWeight="700" fill="#58463B">DOWN</text>
        
        {/* Vertical Label */}
        <text
          x="12"
          y="0"
          fontFamily="Cinzel, serif"
          fontSize="5.2"
          fontWeight="600"
          fill="#58463B"
          textAnchor="middle"
          transform="rotate(90 12 0)"
          letterSpacing="1"
        >
          MOUVEMENT
        </text>

        {/* Power Reserve Needle (indicating full charge 85%) */}
        <g transform="rotate(-24)">
          <path d="M 0 5 L -1.5 0 L 0 -28 L 1.5 0 Z" fill="url(#bluedSteelHand)" stroke="#111" strokeWidth="0.4" />
          <circle cx="0" cy="0" r="3" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="0.6" />
        </g>
      </g>

      {/* ============================================================== */}
      {/* 4. RIGHT SUBDIAL (Sonnerie / Chime at 3 o'clock)              */}
      {/* ============================================================== */}
      <g className="subdial-right" transform="translate(556, 400)">
        <circle cx="0" cy="0" r="48" fill="url(#subdialAzurage)" stroke="#8C5E3C" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#261C14" strokeWidth="0.7" />

        {/* Chime mode indicator arc */}
        <path
          d="M 30 -20 A 36 36 0 0 1 30 20"
          fill="none"
          stroke="#38271F"
          strokeWidth="1.5"
        />
        {[-30, 0, 30].map((deg, i) => (
          <line
            key={`snr-tick-${i}`}
            x1="30"
            y1="0"
            x2="36"
            y2="0"
            stroke="#261C14"
            strokeWidth="1.2"
            transform={`rotate(${deg})`}
          />
        ))}

        <text x="6" y="-18" fontFamily="Cinzel, serif" fontSize="5.5" fontWeight="700" fill="#B87956">G</text>
        <text x="14" y="3" fontFamily="Cinzel, serif" fontSize="5.5" fontWeight="700" fill="#58463B">P</text>
        <text x="6" y="24" fontFamily="Cinzel, serif" fontSize="5.5" fontWeight="700" fill="#58463B">S</text>

        <text
          x="-12"
          y="0"
          fontFamily="Cinzel, serif"
          fontSize="5.2"
          fontWeight="600"
          fill="#58463B"
          textAnchor="middle"
          transform="rotate(-90 -12 0)"
          letterSpacing="1"
        >
          SONNERIE
        </text>

        {/* Chime needle */}
        <g transform="rotate(-15)">
          <path d="M 0 5 L -1.5 0 L 0 -28 L 1.5 0 Z" fill="url(#bluedSteelHand)" stroke="#111" strokeWidth="0.4" />
          <circle cx="0" cy="0" r="3" fill="url(#goldSpecular)" stroke="#38271F" strokeWidth="0.6" />
        </g>
      </g>
    </g>
  );
}
