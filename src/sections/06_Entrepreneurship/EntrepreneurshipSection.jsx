import React from 'react';
import { ENTREPRENEURSHIP_DATA } from '../../data/portfolioData';
import { Rocket, Target, Users, TrendingUp, DollarSign, Lightbulb } from 'lucide-react';

export default function EntrepreneurshipSection() {
  const getStageColor = (stage) => {
    switch (stage) {
      case 'CONCEPT': return '#C8A46A';
      case 'UNDER RESEARCH': return '#B87956';
      case 'PROTOTYPE': return '#50B07A';
      default: return '#D8CCBA';
    }
  };

  return (
    <div className="section-content entrepreneurship-section">
      <div className="section-badge">
        <span>06 / FOUNDER'S JOURNAL</span>
      </div>

      <h2 className="section-title">{ENTREPRENEURSHIP_DATA.title}</h2>
      <p className="section-subtitle">{ENTREPRENEURSHIP_DATA.subtitle}</p>

      {/* Intro narrative */}
      <div className="narrative-card">
        <p className="narrative-paragraph">{ENTREPRENEURSHIP_DATA.intro}</p>
      </div>

      {/* Stage Legend */}
      <div className="stages-row">
        {ENTREPRENEURSHIP_DATA.statusGuide.map((g, idx) => (
          <div key={idx} className="stage-legend-item">
            <span className="stage-badge" style={{ borderColor: g.color, color: g.color }}>
              {g.label}
            </span>
            <span className="stage-desc">{g.desc}</span>
          </div>
        ))}
      </div>

      {/* Ideas Archive */}
      <div className="ideas-archive-list">
        {ENTREPRENEURSHIP_DATA.ideas.map((idea) => (
          <div key={idea.id} className="content-card idea-card">
            <div className="idea-header">
              <div>
                <span className="idea-category">{idea.category}</span>
                <h3 className="idea-title">{idea.title}</h3>
              </div>
              <span
                className="stage-badge"
                style={{ borderColor: getStageColor(idea.stage), color: getStageColor(idea.stage) }}
              >
                {idea.stage}
              </span>
            </div>

            <div className="idea-grid">
              <div className="idea-box">
                <div className="idea-box-title">
                  <Target size={15} color="#C8A46A" />
                  <span>The Problem</span>
                </div>
                <p>{idea.problem}</p>
              </div>

              <div className="idea-box">
                <div className="idea-box-title">
                  <Users size={15} color="#B87956" />
                  <span>Target Customer</span>
                </div>
                <p>{idea.targetCustomer}</p>
              </div>

              <div className="idea-box">
                <div className="idea-box-title">
                  <Lightbulb size={15} color="#C8A46A" />
                  <span>Proposed Solution</span>
                </div>
                <p>{idea.proposedSolution}</p>
              </div>

              <div className="idea-box">
                <div className="idea-box-title">
                  <TrendingUp size={15} color="#50B07A" />
                  <span>Market Opportunity</span>
                </div>
                <p>{idea.marketOpportunity}</p>
              </div>

              <div className="idea-box">
                <div className="idea-box-title">
                  <DollarSign size={15} color="#C8A46A" />
                  <span>Business Model</span>
                </div>
                <p>{idea.businessModel}</p>
              </div>

              <div className="idea-box">
                <div className="idea-box-title">
                  <Rocket size={15} color="#E5B895" />
                  <span>Immediate Next Steps</span>
                </div>
                <p>{idea.nextSteps}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
