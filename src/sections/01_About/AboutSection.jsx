import React from 'react';
import { ABOUT_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { User, GraduationCap, Compass, BookOpen, Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="section-content about-section">
      <div className="section-badge">
        <span>01 / ABOUT ME</span>
      </div>

      <h2 className="section-title">
        {PERSONAL_INFO.name}
      </h2>
      <p className="section-subtitle">
        {ABOUT_DATA.headline}
      </p>

      {/* Main Narrative */}
      <div className="narrative-card">
        {ABOUT_DATA.bio.map((paragraph, idx) => (
          <p key={idx} className="narrative-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Horological Philosophy Callout */}
      <div className="philosophy-callout">
        <Quote size={24} className="callout-icon" />
        <div className="callout-text">
          "{ABOUT_DATA.philosophy}"
        </div>
      </div>

      {/* Academic Background */}
      <div className="content-card">
        <div className="card-header">
          <GraduationCap size={20} color="#C8A46A" />
          <h3>Academic Foundation</h3>
        </div>
        <div className="card-body">
          <div className="institution-info">
            <span className="degree-name">{ABOUT_DATA.education.degree}</span>
            <span className="degree-status">{ABOUT_DATA.education.status}</span>
          </div>
          <div className="focus-areas-label">Core Engineering Disciplines:</div>
          <div className="tags-container">
            {ABOUT_DATA.education.focusAreas.map((area, idx) => (
              <span key={idx} className="luxury-tag">{area}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Areas of Interest Grid */}
      <div className="section-grid-2">
        {ABOUT_DATA.interests.map((interest, idx) => (
          <div key={idx} className="sub-card">
            <div className="sub-card-title">
              <Compass size={16} color="#B87956" />
              <h4>{interest.title}</h4>
            </div>
            <p className="sub-card-desc">{interest.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
