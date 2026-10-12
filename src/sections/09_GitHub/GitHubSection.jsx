import React from 'react';
import { GITHUB_REPOS_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { ExternalLink, GitBranch, Code, Terminal } from 'lucide-react';
import { GithubIcon } from '../../components/common/BrandIcons';

export default function GitHubSection() {
  return (
    <div className="section-content github-section">
      <div className="section-badge">
        <span>09 / CODEBASE VAULT</span>
      </div>

      <h2 className="section-title">Open Source & Repositories</h2>
      <p className="section-subtitle">
        Public code repositories and ongoing software builds on GitHub.
      </p>

      {/* Profile Overview Box */}
      <div className="content-card profile-card">
        <div className="card-header">
          <GithubIcon size={24} color="#C8A46A" />
          <div className="profile-header-info">
            <h3>@{PERSONAL_INFO.githubUsername}</h3>
            <p>Computer Science Engineering & AI Experiments</p>
          </div>
        </div>
        <div className="profile-actions">
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
            target="_blank"
            rel="noreferrer noopener"
            className="action-btn-primary"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="repos-grid">
        {GITHUB_REPOS_DATA.map((repo, idx) => (
          <div key={idx} className="content-card repo-card">
            <div className="repo-header">
              <div className="repo-title-row">
                <Code size={18} color="#B87956" />
                <h4 className="repo-name">{repo.name}</h4>
              </div>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="repo-link"
                title="Open in GitHub"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            <p className="repo-desc">{repo.description}</p>

            <div className="repo-footer">
              <div className="repo-lang-tag">
                <span className="lang-dot" />
                <span>{repo.language}</span>
              </div>
              <span className="repo-badge">Public</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
