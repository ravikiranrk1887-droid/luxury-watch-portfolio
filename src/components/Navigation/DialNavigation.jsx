import React from 'react';
import { NAVIGATION_SECTIONS } from '../../data/portfolioData';

/**
 * DialNavigation Component
 * Topmost interactive layer inside the Watch SVG.
 * Ensures that all 12 Roman numeral navigation anchors (I through XII)
 * have priority hit-testing, responsive hovers, metallic glow halos, and clear labels.
 */
export default function DialNavigation({
  activeSection,
  hoveredSection,
  onSelectSection,
  onHoverSection,
}) {
  return (
    <g className="dial-interactive-navigation-layer">
      {NAVIGATION_SECTIONS.map((section) => {
        // Angle in degrees: 01 is 30 deg, 02 is 60 deg, ... 12 is 0 deg (top)
        const angleDeg = section.angle;
        // Convert to radians (0 deg is 12 o'clock / top, so subtract 90 deg)
        const rad = (angleDeg - 90) * (Math.PI / 180);

        // Numeral radius positioning
        const numeralRadius = 234;
        const x = 400 + Math.cos(rad) * numeralRadius;
        const y = 400 + Math.sin(rad) * numeralRadius;

        const isSelected = activeSection?.id === section.id;
        const isHovered = hoveredSection?.id === section.id;

        return (
          <g
            key={section.id}
            id={`dial-pos-${section.id}`}
            data-testid={`dial-numeral-${section.roman}`}
            className={`nav-numeral-anchor ${isSelected ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectSection(section);
            }}
            onMouseEnter={() => onHoverSection(section)}
            onMouseLeave={() => onHoverSection(null)}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            aria-label={`Position ${section.id}: ${section.label} (Roman Numeral ${section.roman})`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectSection(section);
              }
            }}
          >
            {/* Generous interactive hit area circle */}
            <circle
              id={`dial-hit-${section.id}`}
              cx={x}
              cy={y}
              r="30"
              fill="#000000"
              opacity="0.001"
              style={{ pointerEvents: 'all', cursor: 'pointer' }}
            />

            {/* Glowing metallic aura ring when hovered or selected */}
            {(isSelected || isHovered) && (
              <circle
                cx={x}
                cy={y}
                r="22"
                fill={isSelected ? "rgba(184, 121, 86, 0.28)" : "rgba(200, 164, 106, 0.2)"}
                stroke={isSelected ? "#B87956" : "#C8A46A"}
                strokeWidth={isSelected ? "2.2" : "1.4"}
                filter="url(#goldGlowFilter)"
              />
            )}

            {/* Position Marker Pip */}
            <circle
              cx={x}
              cy={y - 19}
              r={isSelected ? 3.5 : isHovered ? 3 : 2}
              fill={isSelected ? "#B87956" : isHovered ? "#C8A46A" : "#8C5E3C"}
              stroke="#261C14"
              strokeWidth="0.6"
            />

            {/* Crisp Roman Numeral */}
            <text
              x={x}
              y={y + 6}
              fontFamily="Cinzel, serif"
              fontSize={section.roman.length > 3 ? "16" : "18"}
              fontWeight={isSelected ? "900" : isHovered ? "800" : "700"}
              fill={isSelected ? "#8E4624" : isHovered ? "#B87956" : "#1F1713"}
              textAnchor="middle"
              style={{
                userSelect: 'none',
                transition: 'fill 0.2s ease',
              }}
            >
              {section.roman}
            </text>

            {/* Subtle Section Number (01..12) */}
            <text
              x={x}
              y={y + 17}
              fontFamily="Space Mono, monospace"
              fontSize="7.5"
              fontWeight="700"
              fill={isSelected ? "#B87956" : "#6E5B4F"}
              textAnchor="middle"
              opacity={isSelected || isHovered ? 1 : 0.75}
              style={{ userSelect: 'none' }}
            >
              {section.id}
            </text>
          </g>
        );
      })}
    </g>
  );
}
