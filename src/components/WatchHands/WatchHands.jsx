import React from 'react';

/**
 * WatchHands Component
 * Precision horological hands:
 * - Hour hand: Pierced Breguet / Poire style in burnished blued steel
 * - Minute hand: Extended slender Breguet needle reaching railway track
 * - Second hand: Ultra-fine rose-gold needle with circular counter-balance weight
 * - Center canon pinion cap with polished ruby/screw center
 * 
 * Capable of:
 * - Real-time horological movement (seconds, minutes, hours)
 * - Navigation target alignment when a section is selected
 */
export default function WatchHands({
  hourAngle,
  minuteAngle,
  secondAngle,
  mode = 'clock', // 'clock' | 'navigation'
}) {
  return (
    <g className="watch-hands-assembly" filter="url(#handsDropShadow)" style={{ pointerEvents: 'none' }}>
      <defs>
        {/* Soft shadow cast by hands on the ivory dial face */}
        <filter id="handsDropShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="6" stdDeviation="3.5" floodColor="#261A13" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* ============================================================== */}
      {/* 1. HOUR HAND (Breguet Poire Hand)                              */}
      {/* ============================================================== */}
      <g
        className="hand-hour"
        transform={`rotate(${hourAngle} 400 400)`}
        style={{
          transition: mode === 'navigation' ? 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
      >
        {/* Rear counterbalance counterpoise */}
        <path d="M 397 400 L 396 426 C 396 432 404 432 404 426 L 403 400 Z" fill="url(#bluedSteelHand)" />

        {/* Main Hour Hand Shaft */}
        <path
          d="M 396.5 400 L 397.5 292 C 392 288 390 280 392 272 C 395 264 405 264 408 272 C 410 280 408 288 402.5 292 L 403.5 400 Z"
          fill="url(#bluedSteelHand)"
          stroke="#0E1624"
          strokeWidth="0.8"
        />

        {/* Pierced Breguet "Apple" Circle Hole */}
        <circle cx="400" cy="278" r="5" fill="none" stroke="#0E1624" strokeWidth="1.2" />
        {/* Inner cutout hole to reveal ivory dial beneath */}
        <circle cx="400" cy="278" r="3.2" fill="#F5EEE0" />

        {/* Needle Tip beyond Apple */}
        <path d="M 398.2 268 L 400 252 L 401.8 268 Z" fill="url(#bluedSteelHand)" stroke="#0E1624" strokeWidth="0.6" />

        {/* Longitudinal Light Spine Highlight */}
        <line x1="400" y1="392" x2="400" y2="295" stroke="#4A658E" strokeWidth="0.8" opacity="0.6" />
      </g>

      {/* ============================================================== */}
      {/* 2. MINUTE HAND (Long Tapered Breguet Needle)                   */}
      {/* ============================================================== */}
      <g
        className="hand-minute"
        transform={`rotate(${minuteAngle} 400 400)`}
        style={{
          transition: mode === 'navigation' ? 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
      >
        {/* Rear counterbalance */}
        <path d="M 397.2 400 L 396.2 432 C 396.2 438 403.8 438 403.8 432 L 402.8 400 Z" fill="url(#bluedSteelHand)" />

        {/* Long Tapered Shaft reaching railway track */}
        <path
          d="M 396.8 400 L 398 220 C 393 216 391 208 393 200 C 396 192 404 192 407 200 C 409 208 407 216 402 220 L 403.2 400 Z"
          fill="url(#bluedSteelHand)"
          stroke="#0E1624"
          strokeWidth="0.8"
        />

        {/* Pierced Breguet Eyelet */}
        <circle cx="400" cy="206" r="4.8" fill="none" stroke="#0E1624" strokeWidth="1" />
        <circle cx="400" cy="206" r="3" fill="#F5EEE0" />

        {/* Extended Fine Point Needle Tip reaching track */}
        <path d="M 398.5 196 L 400 148 L 401.5 196 Z" fill="url(#bluedSteelHand)" stroke="#0E1624" strokeWidth="0.6" />

        {/* Light Spine Highlight */}
        <line x1="400" y1="395" x2="400" y2="222" stroke="#4A658E" strokeWidth="0.8" opacity="0.65" />
      </g>

      {/* ============================================================== */}
      {/* 3. SECOND HAND (Continuous Sweeping / Escapement Needle)       */}
      {/* ============================================================== */}
      <g
        className="hand-second"
        transform={`rotate(${secondAngle} 400 400)`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Circular Open-Ring Counter-Balance */}
        <circle cx="400" cy="454" r="8.5" fill="none" stroke="url(#secondHandGold)" strokeWidth="1.8" />
        <circle cx="400" cy="454" r="5" fill="#F7EFE1" />
        <path d="M 399 445 L 399 468 L 401 468 L 401 445 Z" fill="url(#secondHandGold)" />

        {/* Slender Rose-Gold Second Needle */}
        <line
          x1="400"
          y1="465"
          x2="400"
          y2="136"
          stroke="url(#secondHandGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Micro-Counterweight Tail Extension */}
        <path d="M 398.8 400 L 398.2 445 L 401.8 445 L 401.2 400 Z" fill="url(#secondHandGold)" />

        {/* Fine Arrow Tip pointing directly at railway index */}
        <polygon points="398.2,142 400,132 401.8,142" fill="#B87956" stroke="#261C14" strokeWidth="0.4" />
      </g>

      {/* ============================================================== */}
      {/* 4. CANON PINION HUB & JEWELED CAP                              */}
      {/* ============================================================== */}
      <g className="canon-pinion-cap" transform="translate(400, 400)">
        {/* Outer Rose Gold Collar */}
        <circle cx="0" cy="0" r="14" fill="url(#caseRimGradient)" stroke="#38271F" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="11" fill="none" stroke="#261C14" strokeWidth="0.8" />
        
        {/* Polished Dome Cap */}
        <circle cx="0" cy="0" r="9.5" fill="url(#goldSpecular)" stroke="#514431" strokeWidth="0.8" />
        
        {/* Center Screw / Polished Steel Pivot */}
        <circle cx="0" cy="0" r="4.2" fill="#241B15" stroke="#514431" strokeWidth="0.6" />
        <line x1="-3" y1="0" x2="3" y2="0" stroke="#FDEBD8" strokeWidth="0.8" strokeLinecap="round" />
      </g>
    </g>
  );
}
