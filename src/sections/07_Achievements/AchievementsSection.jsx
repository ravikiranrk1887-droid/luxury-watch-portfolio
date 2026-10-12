import React from 'react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { Trophy, Calendar, CheckCircle2, Star } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <div className="section-content achievements-section">
      <div className="section-badge">
        <span>07 / RECORD OF RECOGNITION</span>
      </div>

      <h2 className="section-title">Achievements & Milestones</h2>
      <p className="section-subtitle">
        Authentic college activities, leadership roles, and engineering milestones.
      </p>

      <div className="achievements-timeline">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <div key={idx} className="timeline-entry content-card">
            <div className="timeline-marker">
              <Star size={16} color="#C8A46A" />
            </div>
            <div className="timeline-content">
              <div className="entry-header">
                <div>
                  <h3 className="entry-title">{item.title}</h3>
                  <span className="entry-org">{item.organization}</span>
                </div>
                <div className="entry-date">
                  <Calendar size={14} color="#8E5A3D" />
                  <span>{item.date}</span>
                </div>
              </div>

              <p className="entry-desc">{item.description}</p>

              <div className="entry-impact">
                <span className="impact-label">Demonstrated Impact:</span>
                <p className="impact-text">{item.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
