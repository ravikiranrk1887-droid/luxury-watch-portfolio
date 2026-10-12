import React, { useEffect, useRef } from 'react';
import { ArrowLeft, X, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { NAVIGATION_SECTIONS } from '../../data/portfolioData';

// Section imports
import AboutSection from '../../sections/01_About/AboutSection';
import SkillsSection from '../../sections/02_Skills/SkillsSection';
import ProjectsSection from '../../sections/03_Projects/ProjectsSection';
import AILLMSection from '../../sections/04_AI_LLM/AILLMSection';
import CertificationsSection from '../../sections/05_Certifications/CertificationsSection';
import EntrepreneurshipSection from '../../sections/06_Entrepreneurship/EntrepreneurshipSection';
import AchievementsSection from '../../sections/07_Achievements/AchievementsSection';
import LearningJourneySection from '../../sections/08_LearningJourney/LearningJourneySection';
import GitHubSection from '../../sections/09_GitHub/GitHubSection';
import ResumeSection from '../../sections/10_Resume/ResumeSection';
import FutureSection from '../../sections/11_Future/FutureSection';
import ContactSection from '../../sections/12_Contact/ContactSection';

/**
 * SectionPanel Component
 * Houses the active portfolio section in a luxury sliding/folding drawer.
 * Provides:
 * - Prominent "← RETURN TO DIAL" control
 * - Prev / Next section pagination controls
 * - Escape key to close
 * - Smooth scroll restoration
 */
export default function SectionPanel({
  activeSection,
  onClose,
  onNavigateSection,
}) {
  const panelRef = useRef(null);

  useEffect(() => {
    // Scroll to top of panel when active section changes
    if (panelRef.current) {
      panelRef.current.scrollTop = 0;
    }

    // Keyboard navigation (Escape closes panel, ArrowLeft / ArrowRight navigates)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, onClose]);

  if (!activeSection) return null;

  // Find previous and next sections
  const currentIndex = NAVIGATION_SECTIONS.findIndex((s) => s.id === activeSection.id);
  const prevSection = NAVIGATION_SECTIONS[(currentIndex - 1 + NAVIGATION_SECTIONS.length) % NAVIGATION_SECTIONS.length];
  const nextSection = NAVIGATION_SECTIONS[(currentIndex + 1) % NAVIGATION_SECTIONS.length];

  // Render the appropriate section content
  const renderSectionBody = () => {
    switch (activeSection.id) {
      case '01': return <AboutSection />;
      case '02': return <SkillsSection />;
      case '03': return <ProjectsSection />;
      case '04': return <AILLMSection />;
      case '05': return <CertificationsSection />;
      case '06': return <EntrepreneurshipSection />;
      case '07': return <AchievementsSection />;
      case '08': return <LearningJourneySection />;
      case '09': return <GitHubSection />;
      case '10': return <ResumeSection />;
      case '11': return <FutureSection />;
      case '12': return <ContactSection onReturnToDial={onClose} />;
      default: return <AboutSection />;
    }
  };

  return (
    <aside
      className="luxury-section-panel"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${activeSection.label} Section`}
    >
      {/* Top Sticky Navigation Bar */}
      <div className="panel-sticky-header">
        <button
          onClick={onClose}
          className="return-to-dial-btn"
          aria-label="Return to dial"
        >
          <ArrowLeft size={18} />
          <span>RETURN TO DIAL</span>
        </button>

        {/* Section Roman Indicator Breadcrumb */}
        <div className="panel-header-breadcrumb">
          <span className="breadcrumb-roman">{activeSection.roman}</span>
          <span className="breadcrumb-divider">/</span>
          <span className="breadcrumb-id">{activeSection.id}</span>
          <span className="breadcrumb-divider">•</span>
          <span className="breadcrumb-title">{activeSection.label}</span>
        </div>

        {/* Quick Prev / Next Dial Stepper */}
        <div className="panel-stepper-btns">
          <button
            onClick={() => onNavigateSection(prevSection)}
            className="stepper-nav-btn"
            title={`Previous: ${prevSection.label}`}
            aria-label={`Previous: ${prevSection.label}`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => onNavigateSection(nextSection)}
            className="stepper-nav-btn"
            title={`Next: ${nextSection.label}`}
            aria-label={`Next: ${nextSection.label}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="panel-scroll-content">
        {renderSectionBody()}

        {/* Bottom Return To Dial Bar */}
        <div className="panel-bottom-bar">
          <button onClick={onClose} className="return-to-dial-btn bottom-btn">
            <ArrowLeft size={18} />
            <span>RETURN TO WATCH DIAL</span>
          </button>
          <div className="panel-footer-quote">
            Crafted with Horological Precision · Ravikiran S
          </div>
        </div>
      </div>
    </aside>
  );
}
