# 🚀 Bank Churn Prediction

## 📌 Overview
This is a **Bank Churn Prediction** system that uses a **React** frontend (Netflix-inspired UI) and a **FastAPI** backend for model inference. The goal is to predict whether a bank customer is likely to exit (churn) based on key features such as credit score, balance, and demographics.

## 🛠 Tech Stack
- **Frontend:** React (JavaScript)
- **Machine Learning Backend:** FastAPI (Python)
- **Containerization (Optional):** Docker & Docker Compose
- **Additional Tools:** scikit-learn, joblib (for model serialization)

## 📁 Project Structure
```bash
bank-churn-app/
├── backend/              # FastAPI application
│   ├── main.py           # FastAPI entry point
│   ├── model.pkl         # Pre-trained model (example)
│   ├── requirements.txt  # Python dependencies
├── frontend/
│   ├── my-react-app/
│   │   ├── public/
│   │   │   ├── sources/  # HTML files displayed by the React app
│   │   │   │   ├── test1.html
│   │   │   │   ├── test2.html
│   │   │   │   └── ...
│   │   ├── src/
│   │   │   ├── App.js    # Main React file (Presentation, Predictions, About)
│   │   │   ├── App.css   # Netflix-inspired styling
│   │   │   └── ...
│   │   ├── package.json
│   │   └── ...
└── docker-compose.yml     # Optional Docker config (if used)

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
