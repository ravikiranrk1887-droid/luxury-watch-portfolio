import React from 'react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { Wrench, CheckCircle2, Cpu, Code2, Globe, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return <Code2 size={20} color="#C8A46A" />;
      case 1: return <Globe size={20} color="#B87956" />;
      case 2: return <Cpu size={20} color="#C8A46A" />;
      default: return <Terminal size={20} color="#B87956" />;
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Comfortable': return 'status-comfortable';
      case 'Building': return 'status-building';
      case 'Exploring': return 'status-exploring';
      case 'Learning': return 'status-learning';
      default: return '';
    }
  };

  return (
    <div className="section-content skills-section">
      <div className="section-badge">
        <span>02 / TECHNICAL INSTRUMENTS</span>
      </div>

      <h2 className="section-title">Skills & Capabilities</h2>
      <p className="section-subtitle">
        Calibrated technical competencies with honest proficiency classifications.
      </p>

      {/* Honest Status Calibration Legend */}
      <div className="status-legend-bar">
        {SKILLS_DATA.statusDefinitions.map((def, idx) => (
          <div key={idx} className="legend-item">
            <span className={`legend-dot ${getStatusBadgeClass(def.label)}`} />
            <span className="legend-label">{def.label}:</span>
            <span className="legend-desc">{def.desc}</span>
          </div>
        ))}
      </div>

      {/* Category List */}
      <div className="skills-category-list">
        {SKILLS_DATA.categories.map((category, catIdx) => (
          <div key={catIdx} className="content-card skill-card">
            <div className="card-header">
              {getCategoryIcon(catIdx)}
              <div>
                <h3>{category.name}</h3>
                <p className="category-subtext">{category.description}</p>
              </div>
            </div>

            <div className="skills-grid">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-status-badge ${getStatusBadgeClass(skill.status)}`}>
                      {skill.status}
                    </span>
                  </div>
                  <p className="skill-note">{skill.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
