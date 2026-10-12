import React from 'react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { Award, Calendar, BookmarkCheck, CheckCircle } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <div className="section-content cert-section">
      <div className="section-badge">
        <span>05 / ARCHIVE OF QUALIFICATIONS</span>
      </div>

      <h2 className="section-title">Certifications & Workshops</h2>
      <p className="section-subtitle">
        Archival records of technical workshops, embedded systems labs, and completed coursework.
      </p>

      <div className="certificates-grid">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div key={cert.id} className="content-card certificate-card">
            <div className="cert-plaque-border">
              <div className="cert-header">
                <div className="cert-badge-row">
                  <span className="cert-type-pill">{cert.category}</span>
                  <span className="cert-status-pill">{cert.status}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <BookmarkCheck size={16} color="#C8A46A" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <div className="cert-topics-row">
                <span className="topics-label">Covered Competencies:</span>
                <div className="tags-container">
                  {cert.topics.map((t, idx) => (
                    <span key={idx} className="luxury-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="cert-footer">
                <Calendar size={14} color="#8E5A3D" />
                <span>{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
