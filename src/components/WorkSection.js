import React from 'react';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';
import Skills from './Skills';

function WorkSection() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="work-inner">
        <div className="work-section-head">
          <h2 id="work-heading" className="work-section-title">
            Selected_Works
          </h2>
          <span className="work-section-index">Index 001—004</span>
        </div>

        <div className="bento">
          <article className="bento-card bento-span-8 bento-tall card-interpath">
            <div className="bento-card-bg bento-bg-cyan" aria-hidden />
            <div className="bento-card-overlay" aria-hidden />
            <div className="bento-card-body">
              <span className="bento-eyebrow bento-eyebrow-dim">Experimental Delivery</span>
              <h3 className="bento-card-title">Kinetic_Identity</h3>
              <p className="bento-desc">
                Full-stack .NET Core, JavaScript, and SQL Server — precision engineering for production
                systems.
              </p>
            </div>
          </article>

          <article className="bento-card bento-span-4 bento-tall card-stack">
            <div className="bento-card-bg bento-bg-magenta" aria-hidden />
            <div className="bento-card-overlay bento-overlay-magenta" aria-hidden />
            <span className="bento-arrow" aria-hidden>
              <span className="material-symbols-outlined">arrow_outward</span>
            </span>
            <div className="bento-card-body">
              <span className="bento-eyebrow bento-eyebrow-secondary">Brand System</span>
              <h3 className="bento-card-title bento-card-title-sm">Neon_Vortex</h3>
              <ul className="bento-tags">
                <li>.NET Core</li>
                <li>C#</li>
                <li>JavaScript</li>
                <li>Azure</li>
              </ul>
            </div>
          </article>

          <article className="bento-card bento-span-4 bento-square card-kpmg">
            <div className="bento-card-bg bento-bg-green" aria-hidden />
            <div className="bento-card-overlay" aria-hidden />
            <div className="bento-card-body">
              <span className="bento-eyebrow bento-eyebrow-tertiary">Web Experience</span>
              <h3 className="bento-card-title bento-card-title-sm">System_Core</h3>
              <p className="bento-desc">
                Enterprise web applications — .NET Core and JavaScript across restructuring technology.
              </p>
            </div>
          </article>

          <article className="bento-card bento-span-8 bento-wide card-editorial">
            <div className="bento-card-bg bento-bg-burst" aria-hidden />
            <div className="bento-card-overlay bento-overlay-dark" aria-hidden />
            <div className="bento-editorial-text">
              <span className="bento-ghost-title">Editorial_Grid</span>
            </div>
          </article>
        </div>

        <div className="work-subpanels">
          <div className="subpanel">
            <EmploymentHistory />
          </div>
          <div className="subpanel-grid">
            <div className="subpanel">
              <Education />
            </div>
            <div className="subpanel subpanel-skills">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
