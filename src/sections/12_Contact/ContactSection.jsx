import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Send, Check, Copy, AlertCircle, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../../components/common/BrandIcons';

export default function ContactSection({ onReturnToDial }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [dispatched, setDispatched] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto protocol integration so messages actually get delivered via client mail
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Ravikiran,\n\n${formData.message}\n\nFrom:\n${formData.name}\n${formData.email}`
    );
    
    // Open default mail client with pre-populated message
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setDispatched(true);
  };

  return (
    <div className="section-content contact-section">
      <div className="section-badge">
        <span>12 / DISPATCH & INQUIRIES</span>
      </div>

      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">
        Open for collaborations, technology conversations, and software engineering opportunities.
      </p>

      {/* Direct Contact Cards */}
      <div className="contact-channels-grid">
        {/* Email Card */}
        <div className="content-card channel-card">
          <div className="channel-icon-box">
            <Mail size={22} color="#C8A46A" />
          </div>
          <div className="channel-info">
            <span className="channel-label">Direct Email</span>
            <span className="channel-val">{PERSONAL_INFO.email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="channel-action-btn"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={16} color="#50B07A" /> : <Copy size={16} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* LinkedIn Card */}
        <div className="content-card channel-card">
          <div className="channel-icon-box">
            <LinkedinIcon size={22} color="#B87956" />
          </div>
          <div className="channel-info">
            <span className="channel-label">Professional Network</span>
            <span className="channel-val">linkedin.com/in/ravikirans</span>
          </div>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="channel-action-btn"
          >
            <span>Connect</span>
          </a>
        </div>

        {/* GitHub Card */}
        <div className="content-card channel-card">
          <div className="channel-icon-box">
            <GithubIcon size={22} color="#E5B895" />
          </div>
          <div className="channel-info">
            <span className="channel-label">Code Repositories</span>
            <span className="channel-val">github.com/{PERSONAL_INFO.githubUsername}</span>
          </div>
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
            target="_blank"
            rel="noreferrer noopener"
            className="channel-action-btn"
          >
            <span>Follow</span>
          </a>
        </div>
      </div>

      {/* Verified Dispatch Message Form */}
      <div className="content-card form-card">
        <div className="card-header">
          <MessageSquare size={20} color="#C8A46A" />
          <div>
            <h3>Send a Message</h3>
            <p className="category-subtext">Directly drafts a note to {PERSONAL_INFO.email}</p>
          </div>
        </div>

        {dispatched && (
          <div className="form-dispatch-alert">
            <Check size={18} color="#50B07A" />
            <div>
              <strong>Email client opened!</strong> Your system mail client was opened with your message ready to send. You can also reach me directly at <code>{PERSONAL_INFO.email}</code>.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-field">
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Maya Lin"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="field-error-msg"><AlertCircle size={13} /> {errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              placeholder="e.g. maya@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="field-error-msg"><AlertCircle size={13} /> {errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows="4"
              placeholder="Discussing software development, AI, projects, or collaborations..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <span className="field-error-msg"><AlertCircle size={13} /> {errors.message}</span>}
          </div>

          <div className="form-submit-row">
            <button type="submit" className="action-btn-primary submit-btn">
              <Send size={16} />
              <span>Compose Message</span>
            </button>
            <span className="submit-note">Validates input and launches direct email composition.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
