import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ExternalLink, Layers, ArrowRight, Shield, FileText, Binary } from 'lucide-react';
import { GithubIcon } from '../../components/common/BrandIcons';

export default function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS_DATA[0].id);

  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  const getProjectIcon = (id) => {
    switch (id) {
      case 'shadowguard-ai': return <Shield size={22} color="#C8A46A" />;
      case 'ai-pdf-assistant': return <FileText size={22} color="#B87956" />;
      default: return <Binary size={22} color="#E5B895" />;
    }
  };

  return (
    <div className="section-content projects-section">
      <div className="section-badge">
        <span>03 / SELECTED PROJECTS</span>
      </div>

      <h2 className="section-title">Engineered Works</h2>
      <p className="section-subtitle">
        Carefully designed technical exhibits, architectures, and deployed systems.
      </p>

      {/* Project Selector Tabs */}
      <div className="project-tabs-list">
        {PROJECTS_DATA.map((project) => (
          <button
            key={project.id}
            className={`project-tab-btn ${project.id === selectedProjectId ? 'active' : ''}`}
            onClick={() => setSelectedProjectId(project.id)}
          >
            <span className="tab-badge">{project.badge}</span>
            <span className="tab-title">{project.title}</span>
          </button>
        ))}
      </div>

      {/* Active Project Exhibition Card */}
      <div className="project-exhibit-card">
        <div className="exhibit-header">
          <div className="exhibit-title-group">
            <div className="exhibit-icon-box">
              {getProjectIcon(activeProject.id)}
            </div>
            <div>
              <div className="exhibit-tags-row">
                <span className="status-pill">{activeProject.status}</span>
                <span className="period-pill">{activeProject.period}</span>
              </div>
              <h3 className="exhibit-title">{activeProject.title}</h3>
              <p className="exhibit-tagline">{activeProject.tagline}</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="exhibit-actions">
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="action-btn-primary"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="action-btn-secondary"
              >
                <span>GitHub Repository</span>
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="exhibit-body">
          <div className="problem-solution-grid">
            <div className="insight-box problem-box">
              <span className="box-label">The Problem</span>
              <p>{activeProject.problem}</p>
            </div>
            <div className="insight-box solution-box">
              <span className="box-label">The Solution</span>
              <p>{activeProject.solution}</p>
            </div>
          </div>

          {/* Pipeline Diagram (if project has one) */}
          {activeProject.pipeline && (
            <div className="pipeline-section">
              <div className="pipeline-header">
                <Layers size={18} color="#C8A46A" />
                <h4>Execution Pipeline</h4>
              </div>
              <div className="pipeline-steps-flow">
                {activeProject.pipeline.map((step, idx) => (
                  <div key={idx} className="pipeline-node">
                    <span className="node-num">{step.step}</span>
                    <span className="node-name">{step.name}</span>
                    <span className="node-desc">{step.desc}</span>
                    {idx < activeProject.pipeline.length - 1 && (
                      <ArrowRight size={14} className="node-arrow" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="features-block">
            <h4>Key Features & Architecture</h4>
            <ul className="luxury-bullet-list">
              {activeProject.keyFeatures.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Badges */}
          <div className="tech-stack-row">
            <span className="stack-label">Technologies:</span>
            <div className="tags-container">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="luxury-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
