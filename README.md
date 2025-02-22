# Bank Churn Prediction App (Churnflix)

A Netflix-inspired single-page application that predicts whether a bank customer will leave (churn). The frontend is built with React, featuring three main pages:

1. **Home (Presentation):** Displays HTML reports or visualizations (stored in the `/public/sources` folder) via an iframe.  
2. **Predictions:** A form where users enter customer details (Credit Score, Age, Balance, etc.) to receive a prediction on whether the customer is likely to exit.  
3. **About:** A static page describing the business logic and background of the Bank Churn Prediction.

The backend is powered by **FastAPI**, which provides a `/predict` endpoint. When a user submits the prediction form, the data is sent to the backend for inference using a pre-trained model.

---

## Table of Contents

- [Features](#features)  
- [Business Logic](#business-logic)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)

---

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
- **Backend:** FastAPI (Python)  
- **Styling:** Custom CSS, focusing on a dark theme and grid/flex layouts  
- **Build Tool:** Create React App (for frontend)

---

## Project Structure
bank-churn-app/ ├── backend/ │ ├── main.py # FastAPI entry point │ └── model.pkl # Pre-trained model (example) ├── frontend/ │ ├── my-react-app/ │ │ ├── public/ │ │ │ ├── sources/ │ │ │ │ ├── test1.html │ │ │ │ ├── test2.html │ │ │ │ └── ... │ │ ├── src/ │ │ │ ├── App.js │ │ │ ├── App.css │ │ │ └── ... │ │ ├── package.json │ │ └── ... └── README.md
