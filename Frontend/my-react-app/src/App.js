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
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? files.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="content">
      <h2>HTML File Presentation</h2>
      <div className="viewer">
        <iframe
          title="HTML Viewer"
          src={files[currentIndex].path}
          className="iframe-viewer"
        />
      </div>
      <div className="controls">
        <button className="control-button" onClick={handlePrev}>
          Previous
        </button>
        <div className="file-info">
          <span className="file-name">{files[currentIndex].name}</span>
          <span className="file-index">
            ({currentIndex + 1} of {files.length})
          </span>
        </div>
        <button className="control-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h2>About the Bank Churn Prediction App</h2>
      <p>
        This application is designed to predict customer churn for a bank by
        analyzing customer data using machine learning techniques.
      </p>
      <p>
        The presentation page displays various HTML reports and visualizations
        related to the customer churn analysis. It serves as an educational tool
        to demonstrate data preprocessing, predictive modeling, and insights
        into customer behavior.
      </p>
      <p>
        Whether you're a data scientist or a business analyst, this app offers a
        hands-on look at how data can drive strategic decisions in the banking
        industry.
      </p>
    </div>
  );
}

function Predictions() {
  const [formData, setFormData] = useState({
    creditScore: '',
    geography: 'France',
    gender: 'Female',
    age: '',
    tenure: '',
    balance: '',
    numOfProducts: '',
    hasCrCard: false,
    isActiveMember: false,
    estimatedSalary: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPrediction(null);

    // Convert numeric fields and adjust boolean fields
    const payload = {
      creditScore: Number(formData.creditScore),
      geography: formData.geography,
      gender: formData.gender,
      age: Number(formData.age),
      tenure: Number(formData.tenure),
      balance: Number(formData.balance),
      numOfProducts: Number(formData.numOfProducts),
      hasCrCard: formData.hasCrCard ? 1 : 0,
      isActiveMember: formData.isActiveMember ? 1 : 0,
      estimatedSalary: Number(formData.estimatedSalary)
    };

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }
      const result = await response.json();
      setPrediction(result);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="content">
      <h2>Customer Churn Prediction</h2>
      
      {/* Container to style the form nicely */}
      <div className="prediction-form-container">
        <form className="prediction-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Credit Score</label>
            <input
              type="number"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Geography</label>
            <select
              name="geography"
              value={formData.geography}
              onChange={handleChange}
            >
              <option value="France">France</option>
              <option value="Spain">Spain</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tenure (years)</label>
            <input
              type="number"
              name="tenure"
              value={formData.tenure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Balance</label>
            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Number of Products</label>
            <input
              type="number"
              name="numOfProducts"
              value={formData.numOfProducts}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Estimated Salary</label>
            <input
              type="number"
              name="estimatedSalary"
              value={formData.estimatedSalary}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="hasCrCard"
                checked={formData.hasCrCard}
                onChange={handleChange}
              />
              Has Credit Card
            </label>
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="isActiveMember"
                checked={formData.isActiveMember}
                onChange={handleChange}
              />
              Is Active Member
            </label>
          </div>
          {/* This div spans across both columns to center the button */}
          <div className="form-actions">
            <button type="submit" className="control-button" disabled={loading}>
              {loading ? 'Predicting...' : 'Predict'}
            </button>
          </div>
        </form>
      </div>
      

      {error && <p className="error-message">{error}</p>}
      {prediction && (
        <div className="prediction-result">
          <h3>Prediction Result:</h3>
          <p>
            {prediction.will_exit
              ? 'The customer is likely to exit.'
              : 'The customer is unlikely to exit.'}
          </p>
        </div>
      )}
    </div>
  );
}


function App() {
  const [activePage, setActivePage] = useState('presentation'); // 'presentation', 'predictions', or 'about'

  const renderPage = () => {
    if (activePage === 'presentation') return <Presentation />;
    if (activePage === 'predictions') return <Predictions />;
    if (activePage === 'about') return <About />;
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <h1>Churnflix</h1>
        </div>
        <nav className="menu">
          <ul>
            <li
              className={activePage === 'presentation' ? 'active' : ''}
              onClick={() => setActivePage('presentation')}
            >
              Home
            </li>
            <li
              className={activePage === 'predictions' ? 'active' : ''}
              onClick={() => setActivePage('predictions')}
            >
              Predictions
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
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;
