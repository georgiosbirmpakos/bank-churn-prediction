import React, { useState } from 'react';
import './App.css';

// Files for the Presentation page
const files = [
  { name: 'Example 1', path: '/sources/test1.html' },
  { name: 'Example 2', path: '/sources/test2.html' },
  { name: 'Example 3', path: '/sources/test3.html' },
  { name: 'Example 4', path: '/sources/test4.html' }
];

function Presentation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % files.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? files.length - 1 : prevIndex - 1));
  };

  return (
    <div className="content">
      <h2>Analytics Presentation</h2>
      <div className="viewer">
        <iframe
          title="HTML Viewer"
          src={files[currentIndex].path}
          className="iframe-viewer"
        />
      </div>
      <div className="controls">
        <button className="control-button" onClick={handlePrev}>Previous</button>
        <div className="file-info">
          <span className="file-name">{files[currentIndex].name}</span>
          <span className="file-index">({currentIndex + 1} of {files.length})</span>
        </div>
        <button className="control-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h2>About the Bank Churn Prediction App</h2>
      <p>
        This application is designed to predict customer churn for a bank by analyzing customer data using machine learning techniques.
      </p>
      <p>
        The presentation page displays various HTML reports and visualizations related to the customer churn analysis. It serves as an educational tool to demonstrate data preprocessing, predictive modeling, and insights into customer behavior.
      </p>
      <p>
        Whether you're a data scientist or a business analyst, this app offers a hands-on look at how data can drive strategic decisions in the banking industry.
      </p>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState('presentation'); // 'presentation' or 'about'

  const renderPage = () => {
    if (activePage === 'presentation') return <Presentation />;
    if (activePage === 'about') return <About />;
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1>Bank Churn App</h1>
        <nav className="menu">
          <ul>
            <li 
              className={activePage === 'presentation' ? 'active' : ''}
              onClick={() => setActivePage('presentation')}
            >
              Presentation
            </li>
            <li 
              className={activePage === 'about' ? 'active' : ''}
              onClick={() => setActivePage('about')}
            >
              About
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
