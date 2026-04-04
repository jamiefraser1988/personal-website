import React from 'react';

function Navigation({ theme, onToggleTheme }) {
  return (
    <nav className="site-nav" aria-label="Primary">
      <a href="#hero" className="nav-brand">
        JAMIE FRASER
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#work">
          Work
        </a>
        <a className="nav-link" href="#hero">
          Studio
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </div>
      <button
        type="button"
        className="nav-theme"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        <span className="material-symbols-outlined" aria-hidden>
          contrast
        </span>
      </button>
    </nav>
  );
}

export default Navigation;
