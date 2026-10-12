import React, { useState, useEffect, useRef } from 'react';
import WatchGradients from './WatchGradients';
import WatchCase from '../WatchCase/WatchCase';
import WatchDial from '../WatchDial/WatchDial';
import Subdials from '../Subdials/Subdials';
import WatchHands from '../WatchHands/WatchHands';
import DialHUD from '../Navigation/DialHUD';
import DialNavigation from '../Navigation/DialNavigation';
import SectionPanel from '../SectionPanel/SectionPanel';
import EasterEggModal from '../EasterEgg/EasterEggModal';

import { NAVIGATION_SECTIONS, PERSONAL_INFO, EASTER_EGG } from '../../data/portfolioData';
import { horologyAudio } from '../../utils/audio';

export default function WatchContainer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [mode, setMode] = useState('clock'); // 'clock' | 'navigation'
  const [isMuted, setIsMuted] = useState(true);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  
  // Easter egg click counter
  const monogramClicksRef = useRef(0);
  const clickTimerRef = useRef(null);

  // Escapement animation loop
  const lastSecondRef = useRef(null);

  useEffect(() => {
    let animId;
    const updateTick = () => {
      const now = new Date();
      setCurrentTime(now);

      // Check for second transition to play realistic escapement tick sound
      const currentSec = now.getSeconds();
      if (lastSecondRef.current !== null && lastSecondRef.current !== currentSec) {
        if (!isMuted) {
          horologyAudio.playTick();
        }
      }
      lastSecondRef.current = currentSec;

      animId = requestAnimationFrame(updateTick);
    };

    animId = requestAnimationFrame(updateTick);
    return () => cancelAnimationFrame(animId);
  }, [isMuted]);

  // Handle URL Hash navigation on initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) {
        setActiveSection(null);
        return;
      }
      const matched = NAVIGATION_SECTIONS.find(
        (s) => s.slug === hash || s.id === hash || s.label.toLowerCase() === hash
      );
      if (matched) {
        setActiveSection(matched);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync active section to URL hash
  const handleSelectSection = (section) => {
    if (!section) {
      window.location.hash = '';
      setActiveSection(null);
      horologyAudio.playChime();
      return;
    }
    horologyAudio.playRatchet();
    setActiveSection(section);
    window.location.hash = section.slug;
  };

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    horologyAudio.setMuted(nextMuted);
    if (!nextMuted) {
      horologyAudio.playTick(100);
    }
  };

  const handleToggleMode = () => {
    setMode((prev) => (prev === 'clock' ? 'navigation' : 'clock'));
    horologyAudio.playRatchet();
  };

  // Triple-click on Monogram triggers Easter Egg
  const handleMonogramClick = (e) => {
    e.stopPropagation();
    monogramClicksRef.current += 1;
    horologyAudio.playRatchet();

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (monogramClicksRef.current >= EASTER_EGG.triggerClicks) {
      setIsEasterEggOpen(true);
      horologyAudio.playChime();
      monogramClicksRef.current = 0;
    } else {
      clickTimerRef.current = setTimeout(() => {
        monogramClicksRef.current = 0;
      }, 1000);
    }
  };

  // Calculate Hand Angles
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const millis = currentTime.getMilliseconds();

  // Smooth continuous sweeping second angle
  const liveSecondAngle = (seconds + millis / 1000) * 6;
  const liveMinuteAngle = (minutes + seconds / 60) * 6;
  const liveHourAngle = ((hours % 12) + minutes / 60) * 30;

  // In Navigation Mode, hands point to selected or hovered section
  const targetSection = hoveredSection || activeSection;
  const targetAngle = targetSection ? targetSection.angle : 0;

  const currentHourAngle = mode === 'navigation' && targetSection ? targetAngle : liveHourAngle;
  const currentMinuteAngle = mode === 'navigation' && targetSection ? targetAngle : liveMinuteAngle;
  const currentSecondAngle = liveSecondAngle; // Second needle always pulses and sweeps live!

  const isPanelOpen = Boolean(activeSection);

  return (
    <div className={`watch-portfolio-layout ${isPanelOpen ? 'panel-open' : ''}`}>
      {/* Easter Egg Modal */}
      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />

      {/* Main Horological Stage */}
      <main className="horological-stage">
        {/* Top Header / Branding outside watch */}
        <header className="stage-header">
          <span className="stage-overtitle">{PERSONAL_INFO.tagline}</span>
          <h1 className="stage-title">{PERSONAL_INFO.name}</h1>
          <p className="stage-subtitle">{PERSONAL_INFO.subtagline}</p>
        </header>

        {/* Dial HUD Controls */}
        <DialHUD
          mode={mode}
          onToggleMode={handleToggleMode}
          isMuted={isMuted}
          onToggleSound={handleToggleSound}
          activeSection={activeSection}
          hoveredSection={hoveredSection}
          onOpenActiveSection={handleSelectSection}
        />

        {/* Master Watch SVG Canvas */}
        <div className="watch-svg-wrapper">
          <svg
            className="master-watch-svg"
            viewBox="10 -10 790 820"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Patek Philippe Inspired Rose-Gold Mechanical Watch Portfolio"
          >
            {/* 1. All Shader Gradients, Patterns & Filters */}
            <WatchGradients />

            {/* 2. Leather Strap, Lugs, Bezel, Pushers & Crown */}
            <WatchCase />

            {/* 3. Ivory Dial Plate, Guilloché Waves, Railway Track & Cartouche */}
            <WatchDial
              onMonogramClick={handleMonogramClick}
            />

            {/* 4. Four Working Complications: Moon Phase, 24h GMT, Power Reserve, Sonnerie */}
            <Subdials
              currentTime={currentTime}
              activeSection={activeSection}
            />

            {/* 5. Live Working Breguet Hands & Sweeping Second Needle */}
            <WatchHands
              hourAngle={currentHourAngle}
              minuteAngle={currentMinuteAngle}
              secondAngle={currentSecondAngle}
              mode={mode}
            />

            {/* 6. Topmost 12-Position Interactive Roman Numeral Navigation Layer */}
            <DialNavigation
              activeSection={activeSection}
              hoveredSection={hoveredSection}
              onSelectSection={handleSelectSection}
              onHoverSection={setHoveredSection}
            />
          </svg>
        </div>

        {/* 12-Complication Quick Navigation Ribbon */}
        <nav className="complication-selector-ribbon" aria-label="12 Dial Positions">
          {NAVIGATION_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              id={`ribbon-pos-${sec.id}`}
              className={`ribbon-position-btn ${activeSection?.id === sec.id ? 'active' : ''}`}
              onClick={() => handleSelectSection(sec)}
              onMouseEnter={() => setHoveredSection(sec)}
              onMouseLeave={() => setHoveredSection(null)}
              title={`${sec.id} — ${sec.label}`}
            >
              <span className="ribbon-roman">{sec.roman}</span>
              <span className="ribbon-label">{sec.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Subtext */}
        <footer className="stage-footer">
          <span className="footer-status-dot" />
          <span className="footer-indicator-text">
            {activeSection
              ? `SELECTED: ${activeSection.id} — ${activeSection.label}`
              : 'MECHANICAL CALIBER ACTIVE · SELECT A ROMAN NUMERAL TO ENTER'}
          </span>
        </footer>
      </main>

      {/* Luxury Side Panel (Unfolds when a section is active) */}
      <SectionPanel
        activeSection={activeSection}
        onClose={() => handleSelectSection(null)}
        onNavigateSection={handleSelectSection}
      />
    </div>
  );
}
