# Bank Churn Prediction App (Churnflix)

A Netflix-inspired single-page application that predicts whether a bank customer will leave (churn). The frontend is built with React, featuring three main pages:

1. **Home (Presentation):** Displays HTML reports or visualizations (stored in the `/public/sources` folder) via an iframe.  
2. **Predictions:** A form where users enter customer details (Credit Score, Age, Balance, etc.) to receive a prediction on whether the customer is likely to exit.  
3. **About:** A static page describing the business logic and background of the Bank Churn Prediction.

The backend is powered by **FastAPI**, which provides a `/predict` endpoint. When a user submits the prediction form, the data is sent to the backend for inference using a pre-trained model.

## Features

- **Netflix-Inspired UI:** A sleek, dark-themed interface with a sidebar menu.  
- **Home (Presentation) Page:** Browse through multiple HTML files (e.g., reports, visualizations).  
- **Predictions Page:** Enter customer data (Credit Score, Age, Tenure, etc.) and get a prediction of whether the customer will churn.  
- **About Page:** Learn about the business context of bank churn and how the prediction model works.

---

## Business Logic

### What is Customer Churn?
Customer churn refers to the phenomenon of customers leaving a service or closing their accounts. In a banking context, churn can be costly, as acquiring new customers often costs more than retaining existing ones.

### How the App Predicts Churn
1. **User Input:** The user provides key features such as Credit Score, Age, Balance, Number of Products, and more.  
2. **API Call:** The React app sends these inputs to a FastAPI endpoint (`/predict`).  
3. **Model Inference:** FastAPI loads a pre-trained churn model (e.g., a logistic regression, random forest, or neural network) to determine the likelihood of churn.  
4. **Response:** The app displays whether the customer is likely to exit (`true`/`false`).

### Dataset
The dataset typically includes:
- **CreditScore** (numerical)  
- **Geography** (categorical)  
- **Gender** (categorical: Male, Female)  
- **Age** (numerical)  
- **Tenure** (numerical)  
- **Balance** (numerical)  
- **NumOfProducts** (numerical)  
- **HasCrCard** (boolean)  
- **IsActiveMember** (boolean)  
- **EstimatedSalary** (numerical)  
- **Exited** (target variable: 1 if the customer left the bank, 0 otherwise)

---

## Tech Stack

- **Frontend:** React (JavaScript) with a Netflix-inspired design  
- **Backend:** FastAPI (Pytho===========================
Churnflix: Bank Churn App
===========================

A Netflix-inspired single-page application (SPA) that predicts whether a bank customer will leave (churn).
The frontend is built with React, while the backend uses FastAPI to serve a machine learning model.

-----------------------------------------------------------
TABLE OF CONTENTS
-----------------------------------------------------------
1. Features
2. Project Structure
3. Installation & Setup
4. Usage
5. Technical Details
   - React Frontend
   - FastAPI Backend
   - Model Compatibility & Versioning
6. Screenshots (Optional)
7. Contributing
8. License
9. Contact

-----------------------------------------------------------
1. FEATURES
-----------------------------------------------------------
- Netflix-Themed UI
  * A dark-themed interface with a sidebar menu, red accents, and hover/focus effects.
- Three Main Pages:
  1) Home (Presentation)
     - Displays local HTML reports/visualizations in an auto-resizing iframe.
     - "Previous" and "Next" buttons let you cycle through multiple HTML files.
  2) Predictions
     - A form that collects customer data (e.g., Credit Score, Balance).
     - Sends a POST request to a FastAPI endpoint to get a "will_exit" prediction (true/false).
  3) About
     - Features a hero image overlay and info cards explaining bank churn and how the app addresses it.

-----------------------------------------------------------
2. PROJECT STRUCTURE
-----------------------------------------------------------
bank-churn-app/
├── backend/
│   ├── main.py             (FastAPI entry point)
│   ├── model.pkl           (Pre-trained model, if any)
│   ├── requirements.txt    (Python dependencies)
├── frontend/
│   ├── my-react-app/
│   │   ├── public/
│   │   │   ├── sources/
│   │   │   │   ├── test1.html
│   │   │   │   ├── test2.html
│   │   │   │   └── ...
│   │   ├── src/
│   │   │   ├── App.js
│   │   │   ├── App.css
│   │   │   └── ...
│   │   ├── package.json
│   │   └── ...
└── README.txt (this file)

-----------------------------------------------------------
3. INSTALLATION & SETUP
-----------------------------------------------------------
Prerequisites:
- Node.js (v14 or higher)
- Python 3.7+ and pip (or conda)

Steps:
1. Clone the repository:
   git clone https://github.com/YourUsername/bank-churn-app.git

2. Backend Setup:
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   # FastAPI will run on http://127.0.0.1:8000

3. Frontend Setup:
   cd ../frontend/my-react-app
   npm install
   npm start
   # React app will run on http://localhost:3000

-----------------------------------------------------------
4. USAGE
-----------------------------------------------------------
- Home (Presentation): 
  Visit http://localhost:3000 (default) to view the "Home" page. 
  Use the "Previous" and "Next" buttons to cycle through HTML files.

- Predictions:
  Click the "Predictions" menu item in the sidebar.
  Fill out the form fields (Credit Score, Age, etc.).
  Click "Predict" to send data to FastAPI. 
  The response will indicate if the customer is likely to exit.

- About:
  Click the "About" menu item to learn more about the churn concept, 
  why it matters, and how the app predicts churn.

-----------------------------------------------------------
5. TECHNICAL DETAILS
-----------------------------------------------------------
A) React Frontend
   - Netflix-inspired styling with .css
   - Auto-resizing iframe using useRef & onLoad (Home page)
   - Two-column form layout for Predictions
   - Hero image & info cards on About page

B) FastAPI Backend
   - main.py contains the /predict endpoint.
   - Accepts JSON data with fields (creditScore, balance, etc.) 
     mapped to a pydantic BaseModel (CustomerData).
   - Loads a pre-trained model (model.pkl) using joblib.
   - Returns a JSON response: {"will_exit": true/false}
