import React from 'react';
import { X, Sparkles, Coffee } from 'lucide-react';
import { EASTER_EGG, PERSONAL_INFO } from '../../data/portfolioData';

/**
 * EasterEggModal Component
 * Revealed when visitor clicks the central 'R' monogram 3 times.
 */
export default function EasterEggModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="easter-egg-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(8, 8, 8, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="easter-egg-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '480px',
          width: '100%',
          backgroundColor: '#161412',
          border: '1.5px solid #B87956',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(184, 121, 86, 0.25)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#B87956',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="Close Easter Egg"
        >
          <X size={20} />
        </button>

        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            margin: '0 auto 1.5rem',
            border: '2px solid #C8A46A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle, #2E1F18 0%, #15110E 100%)',
            boxShadow: '0 0 20px rgba(200, 164, 106, 0.3)',
          }}
        >
          <Coffee size={28} color="#E5B895" />
        </div>

        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.75rem',
            color: '#C8A46A',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          {EASTER_EGG.badge}
        </span>

        <h3
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#F0E7D6',
            lineHeight: 1.35,
            marginBottom: '1rem',
          }}
        >
          {EASTER_EGG.quote}
        </h3>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: '#D8CCBA',
            marginBottom: '1.5rem',
          }}
        >
          "{EASTER_EGG.subtext}"
        </p>

        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(184, 121, 86, 0.1)',
            borderRadius: '8px',
            border: '1px dashed #514431',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.85rem',
            color: '#D8CCBA',
          }}
        >
          <Sparkles size={16} color="#C8A46A" />
          <span>Engineered by <strong>{PERSONAL_INFO.name}</strong></span>
        </div>
      </div>
    </div>
  );
}
