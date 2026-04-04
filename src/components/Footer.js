import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <div className="footer-brand">JAMIE FRASER</div>
          <p className="footer-copy">© {new Date().getFullYear()} Jamie Fraser. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/jamie-fraser-981518152/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/jamiefraser1988" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://github.com/jfrase207/" target="_blank" rel="noopener noreferrer">
            University GitHub
          </a>
        </div>
        <div className="footer-status">
          <span className="footer-status-label">System Status</span>
          <div className="footer-status-row">
            <span className="footer-status-dot" aria-hidden />
            <span className="footer-status-text">Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
