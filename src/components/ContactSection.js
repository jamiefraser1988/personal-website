import React, { useState } from 'react';

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject brief:\n${brief}`
    );
    window.location.href = `mailto:jamie.fraser1988@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-inner editorial-grid">
        <div className="contact-col">
          <h2 id="contact-heading" className="contact-title glitch-text">
            Let&apos;s <br /> Collaborate
          </h2>
          <p className="contact-lede">
            Open to full-stack and .NET opportunities. If you need precision engineering with room for
            experimentation, get in touch.
          </p>
          <div className="contact-details">
            <div className="contact-block">
              <span className="contact-label">Inquiries</span>
              <a className="contact-value" href="mailto:jamie.fraser1988@gmail.com">
                jamie.fraser1988@gmail.com
              </a>
            </div>
            <div className="contact-block">
              <span className="contact-label">Based In</span>
              <span className="contact-value">Glasgow, UK // Remote</span>
            </div>
            <div className="contact-block">
              <span className="contact-label">Phone</span>
              <a className="contact-value" href="tel:+447944836222">
                07944 836222
              </a>
            </div>
          </div>
        </div>
        <div className="contact-col contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="your-name" className="visually-hidden">
                Your name
              </label>
              <input
                id="your-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="YOUR_NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="field-input"
              />
            </div>
            <div className="field">
              <label htmlFor="your-email" className="visually-hidden">
                Your email
              </label>
              <input
                id="your-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="YOUR_EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input"
              />
            </div>
            <div className="field">
              <label htmlFor="project-brief" className="visually-hidden">
                Project brief
              </label>
              <textarea
                id="project-brief"
                name="brief"
                rows={4}
                placeholder="PROJECT_BRIEF"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="field-input field-textarea"
              />
            </div>
            <button type="submit" className="btn-transmit">
              Transmit_Data
              <span className="material-symbols-outlined" aria-hidden>
                bolt
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
