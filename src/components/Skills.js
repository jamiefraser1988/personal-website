import React from 'react';
import '../Styles/Skills.css';

function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill">
          <span>.NET Core</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>JQuery</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Azure</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '35%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>C#</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Python</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>React and Blazor</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Mobile Phone App Development</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Full Development Lifecycle</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Cloud System Migration</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Remote Team Collaboration</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
