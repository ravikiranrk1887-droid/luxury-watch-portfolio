import React from 'react';
import { RESUME_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { FileText, Download, Eye, Briefcase, GraduationCap, Code2, Award, Mail, Info } from 'lucide-react';

export default function ResumeSection() {
  const handleDownload = () => {
    // Triggers download of the configured PDF
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePath;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(PERSONAL_INFO.resumePath, '_blank');
  };

  return (
    <div className="section-content resume-section">
      <div className="section-badge">
        <span>10 / CURRICULUM VITAE</span>
      </div>

      <div className="resume-header-row">
        <div>
          <h2 className="section-title">Curriculum Vitae</h2>
          <p className="section-subtitle">
            Comprehensive academic credentials, project records, and technical proficiencies.
          </p>
        </div>

        {/* Action Controls */}
        <div className="resume-action-buttons">
          <button onClick={handleView} className="action-btn-secondary" title="Open PDF in new tab">
            <Eye size={16} />
            <span>View PDF</span>
          </button>
          <button onClick={handleDownload} className="action-btn-primary" title="Download PDF document">
            <Download size={16} />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* Helpful setup note for the user */}
      <div className="resume-doc-notice">
        <Info size={16} color="#C8A46A" />
        <span>
          To connect your actual PDF document, place your file at <code>/public/resume.pdf</code>.
        </span>
      </div>

      {/* Editorial Parchment Resume Document */}
      <div className="resume-parchment-sheet">
        {/* Document Header */}
        <div className="doc-header">
          <div className="doc-name">{RESUME_DATA.name}</div>
          <div className="doc-title">{RESUME_DATA.title}</div>
          <div className="doc-contact-line">
            <span>{RESUME_DATA.contact.email}</span> • <span>{RESUME_DATA.contact.github}</span> • <span>{RESUME_DATA.contact.linkedin}</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="doc-section">
          <div className="doc-section-title">Professional Summary</div>
          <p className="doc-text">{RESUME_DATA.summary}</p>
        </div>

        {/* Education */}
        <div className="doc-section">
          <div className="doc-section-title">Education</div>
          <div className="doc-entry">
            <div className="doc-entry-header">
              <span className="doc-entry-name">{RESUME_DATA.education.degree}</span>
              <span className="doc-entry-period">{RESUME_DATA.education.period}</span>
            </div>
            <div className="doc-entry-sub">Relevant Coursework: {RESUME_DATA.education.coursework}</div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="doc-section">
          <div className="doc-section-title">Technical Proficiencies</div>
          <div className="doc-skills-grid">
            {RESUME_DATA.skills.map((s, idx) => (
              <div key={idx} className="doc-skill-row">
                <span className="skill-group-name">{s.group}:</span>
                <span className="skill-group-items">{s.items}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div className="doc-section">
          <div className="doc-section-title">Selected Projects</div>
          {RESUME_DATA.selectedProjects.map((p, idx) => (
            <div key={idx} className="doc-project-entry">
              <div className="doc-entry-header">
                <span className="doc-entry-name">{p.name}</span>
                <span className="doc-tech-label">[{p.tech}]</span>
              </div>
              <ul className="doc-bullet-list">
                {p.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="doc-section">
          <div className="doc-section-title">Activities & Workshops</div>
          <ul className="doc-bullet-list">
            {RESUME_DATA.activities.map((act, idx) => (
              <li key={idx}>{act}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
