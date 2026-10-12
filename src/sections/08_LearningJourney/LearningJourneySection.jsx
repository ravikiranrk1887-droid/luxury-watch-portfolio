import React from 'react';
import { LEARNING_JOURNEY_DATA } from '../../data/portfolioData';
import { Milestone, CheckCircle2, Clock, PlayCircle, BookMarked } from 'lucide-react';

export default function LearningJourneySection() {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'COMPLETED': return <CheckCircle2 size={16} color="#50B07A" />;
      case 'BUILDING': return <PlayCircle size={16} color="#C8A46A" />;
      case 'PRACTICING': return <Clock size={16} color="#B87956" />;
      default: return <BookMarked size={16} color="#8E5A3D" />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'COMPLETED': return 'journey-completed';
      case 'BUILDING': return 'journey-building';
      case 'PRACTICING': return 'journey-practicing';
      default: return 'journey-learning';
    }
  };

  return (
    <div className="section-content journey-section">
      <div className="section-badge">
        <span>08 / HOROLOGICAL CALIBRATION</span>
      </div>

      <h2 className="section-title">Technical Learning Journey</h2>
      <p className="section-subtitle">
        A chronological roadmap of engineering disciplines and ongoing progression.
      </p>

      <div className="journey-track">
        {LEARNING_JOURNEY_DATA.map((milestone, idx) => (
          <div key={idx} className={`journey-node-card ${getStatusClass(milestone.status)}`}>
            <div className="journey-node-header">
              <span className="phase-indicator">{milestone.phase}</span>
              <div className="status-indicator-pill">
                {getStatusIcon(milestone.status)}
                <span>{milestone.status}</span>
              </div>
            </div>

            <h3 className="journey-node-title">{milestone.title}</h3>
            <p className="journey-node-desc">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
