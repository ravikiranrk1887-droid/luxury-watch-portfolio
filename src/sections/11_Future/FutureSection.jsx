import React from 'react';
import { FUTURE_ROADMAP } from '../../data/portfolioData';
import { Compass, Sparkles, Target, ArrowUpRight, Cpu, Code2, Globe } from 'lucide-react';

export default function FutureSection() {
  const getStageIcon = (idx) => {
    switch (idx) {
      case 0: return <Code2 size={20} color="#C8A46A" />;
      case 1: return <Cpu size={20} color="#B87956" />;
      case 2: return <Globe size={20} color="#C8A46A" />;
      default: return <Sparkles size={20} color="#E5B895" />;
    }
  };

  return (
    <div className="section-content future-section">
      <div className="section-badge">
        <span>11 / HOROLOGICAL HORIZON</span>
      </div>

      <h2 className="section-title">What's Next</h2>
      <p className="section-subtitle">
        Still learning. Still building. An ongoing engineering progression.
      </p>

      {/* Philosophy intro */}
      <div className="narrative-card">
        <p className="narrative-paragraph">
          Much like an automatic watch wound by daily movement, technical mastery is an iterative cycle. Rather than standing still, I set clear engineering milestones to bridge the gap between academic exploration and high-impact software creation.
        </p>
      </div>

      {/* Roadmap Progression Cards */}
      <div className="roadmap-grid">
        {FUTURE_ROADMAP.map((goal, idx) => (
          <div key={goal.id} className="content-card roadmap-card">
            <div className="roadmap-header">
              <div className="roadmap-icon-box">
                {getStageIcon(idx)}
              </div>
              <div>
                <span className="roadmap-stage-pill">{goal.stage}</span>
                <h3 className="roadmap-title">{goal.title}</h3>
              </div>
            </div>

            <p className="roadmap-focus">{goal.focus}</p>

            <div className="roadmap-footer">
              <span className="roadmap-cycle-step">CYCLE {idx + 1} OF {FUTURE_ROADMAP.length}</span>
              <ArrowUpRight size={16} color="#B87956" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
