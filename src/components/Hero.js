import React from 'react';

function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <p className="hero-kicker">
          <span className="hero-kicker-dot" aria-hidden />
          Digital Portfolio
        </p>
        <h1 id="hero-heading" className="hero-title glitch-text">
          Building <br />
          <span className="hero-title-accent">High-Frequency</span> <br />
          Software Systems
        </h1>
        <div className="hero-row">
          <p className="hero-lede">
            Experienced full-stack .NET developer specialising in .NET Core, C#, and JavaScript. Driving
            modernisation of systems and using new technologies to enhance business operations.
          </p>
          <a href="#work" className="btn-primary">
            Start Exploration
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
