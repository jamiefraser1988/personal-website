import React from 'react';
import './Styles/App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import EmploymentHistory from './components/EmploymentHistory';
import Education from './components/Education';
import ContactInformation from './components/ContactInformation';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="panel">
          <AboutMe />
        </div>
        <div className="panel">
          <Skills />
        </div>
        <div className="panel">
          <EmploymentHistory />
        </div>
        <div className="panel">
          <Education />
        </div>
        <div className="panel">
          <ContactInformation />
        </div>
        <div className="panel">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
