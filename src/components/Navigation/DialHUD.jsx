import React from 'react';
import { Volume2, VolumeX, Clock, Compass, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

/**
 * DialHUD Component
 * Floating controls & dynamic status display for the luxury watch:
 * - Live Time vs Navigation Mode toggle
 * - Escapement Tick Sound Mute/Unmute
 * - Hover / Active Section indicator plaque
 */
export default function DialHUD({
  mode,
  onToggleMode,
  isMuted,
  onToggleSound,
  activeSection,
  hoveredSection,
  onOpenActiveSection,
}) {
  const currentInspect = hoveredSection || activeSection;

  return (
    <div className="dial-hud-container" style={{ width: '100%', maxWidth: '820px', margin: '0 auto', zIndex: 10 }}>
      {/* Top Controls Bar */}
      <div
        className="hud-top-bar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 18px',
          background: 'rgba(20, 19, 18, 0.75)',
          border: '1px solid #282420',
          borderRadius: '14px',
          backdropFilter: 'blur(12px)',
          marginBottom: '16px',
        }}
      >
        {/* Mode Toggle Button */}
        <button
          onClick={onToggleMode}
          className="hud-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: mode === 'clock' ? 'rgba(184, 121, 86, 0.18)' : 'rgba(200, 164, 106, 0.18)',
            border: `1px solid ${mode === 'clock' ? '#B87956' : '#C8A46A'}`,
            color: '#F0E7D6',
            padding: '7px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.78rem',
            fontWeight: 600,
            transition: 'all 0.25s ease',
          }}
          title={mode === 'clock' ? 'Switch to Complication Pointer Mode' : 'Switch to Live Horology Clock Mode'}
        >
          {mode === 'clock' ? <Clock size={15} color="#E5B895" /> : <Compass size={15} color="#C8A46A" />}
          <span>{mode === 'clock' ? 'LIVE CLOCK' : 'POINTER MODE'}</span>
        </button>

        {/* Center Horological Brand */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', fontWeight: 700, color: '#F0E7D6', letterSpacing: '2px' }}>
            {PERSONAL_INFO.monogram} · HAUTE HORLOGERIE
          </div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', color: '#9E9182', letterSpacing: '0.5px' }}>
            12-POSITION INTERACTIVE DIAL
          </div>
        </div>

        {/* Sound Toggle Button */}
        <button
          onClick={onToggleSound}
          className="hud-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: !isMuted ? 'rgba(80, 176, 122, 0.15)' : 'rgba(40, 36, 32, 0.7)',
            border: `1px solid ${!isMuted ? '#50B07A' : '#514431'}`,
            color: !isMuted ? '#50B07A' : '#D8CCBA',
            padding: '7px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.78rem',
            fontWeight: 600,
            transition: 'all 0.25s ease',
          }}
          title={isMuted ? 'Unmute Mechanical Escapement Sound' : 'Mute Sound'}
        >
          {!isMuted ? <Volume2 size={15} /> : <VolumeX size={15} />}
          <span>{!isMuted ? 'TICKS ON' : 'MUTED'}</span>
        </button>
      </div>

      {/* Floating Bottom Section Preview Plaque */}
      {currentInspect ? (
        <div
          className="hud-inspection-card"
          onClick={() => onOpenActiveSection(currentInspect)}
          style={{
            marginTop: '16px',
            padding: '12px 20px',
            background: 'linear-gradient(90deg, rgba(20, 19, 18, 0.95), rgba(35, 28, 24, 0.95))',
            border: '1.2px solid #B87956',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#C8A46A',
                minWidth: '38px',
                textAlign: 'center',
              }}
            >
              {currentInspect.roman}
            </span>
            <div style={{ height: '28px', width: '1px', background: '#514431' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#B87956' }}>
                  POSITION {currentInspect.id}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#8E5A3D' }}>•</span>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', fontWeight: 700, color: '#F0E7D6' }}>
                  {currentInspect.label}
                </span>
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', color: '#D8CCBA', opacity: 0.9 }}>
                {currentInspect.summary}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C8A46A', fontSize: '0.85rem', fontFamily: 'Outfit, sans-serif' }}>
            <span>EXPLORE</span>
            <ChevronRight size={18} />
          </div>
        </div>
      ) : (
        <div
          style={{
            marginTop: '16px',
            textAlign: 'center',
            fontFamily: 'Cinzel, serif',
            fontSize: '0.8rem',
            color: '#9E9182',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          SELECT A NUMBER ON THE DIAL TO EXPLORE
        </div>
      )}
    </div>
  );
}
