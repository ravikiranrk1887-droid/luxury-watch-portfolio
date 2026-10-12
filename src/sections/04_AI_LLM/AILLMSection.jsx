import React from 'react';
import { AI_LLM_DATA } from '../../data/portfolioData';
import { Sparkles, Brain, Cpu, ArrowRight, Lightbulb, CheckCircle2, RefreshCw } from 'lucide-react';

export default function AILLMSection() {
  return (
    <div className="section-content ai-section">
      <div className="section-badge">
        <span>04 / ARTIFICIAL INTELLIGENCE</span>
      </div>

      <h2 className="section-title">{AI_LLM_DATA.title}</h2>
      <p className="section-subtitle">{AI_LLM_DATA.subtitle}</p>

      {/* Intro narrative */}
      <div className="narrative-card">
        <p className="narrative-paragraph">{AI_LLM_DATA.intro}</p>
      </div>

      {/* Interactive Architecture Flow Diagram */}
      <div className="content-card architecture-card">
        <div className="card-header">
          <Brain size={20} color="#C8A46A" />
          <div>
            <h3>RAG Document Architecture</h3>
            <p className="category-subtext">Automated semantic retrieval pipeline</p>
          </div>
        </div>

        <div className="pipeline-flow-container">
          {AI_LLM_DATA.pipelineSteps.map((step, idx) => (
            <div key={idx} className="flow-step-box">
              <span className="step-label">{step.label}</span>
              <span className="step-title">{step.title}</span>
              <span className="step-desc">{step.desc}</span>
              {idx < AI_LLM_DATA.pipelineSteps.length - 1 && (
                <div className="flow-step-divider">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Focus Topics Grid */}
      <h3 className="sub-heading">Topics & Areas Under Exploration</h3>
      <div className="section-grid-2">
        {AI_LLM_DATA.focusTopics.map((topic, idx) => (
          <div key={idx} className="sub-card">
            <div className="sub-card-title">
              <Cpu size={16} color="#B87956" />
              <h4>{topic.title}</h4>
            </div>
            <p className="sub-card-desc">{topic.desc}</p>
          </div>
        ))}
      </div>

      {/* Engineering Experiments & Lessons */}
      <h3 className="sub-heading">Engineering Lab & Notes</h3>
      <div className="experiments-list">
        {AI_LLM_DATA.experiments.map((exp, idx) => (
          <div key={idx} className="content-card experiment-card">
            <div className="experiment-header">
              <Lightbulb size={18} color="#C8A46A" />
              <h4>{exp.topic}</h4>
            </div>
            <div className="experiment-grid">
              <div className="exp-block">
                <span className="exp-label">Observations & Findings</span>
                <p>{exp.whatILearned}</p>
              </div>
              <div className="exp-block">
                <span className="exp-label">Validated Technique</span>
                <p>{exp.whatWorked}</p>
              </div>
              <div className="exp-block">
                <span className="exp-label">Planned Optimization</span>
                <p>{exp.toImprove}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
