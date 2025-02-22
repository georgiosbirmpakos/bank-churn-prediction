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
1. Clone the repository

2. Backend Setup:
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   # FastAPI will run on http://localhost:8000

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

🔧 Running Locally (for Development & Testing)
Note: If you’re not using Docker, skip to Step 2 and Step 3 for running FastAPI and React locally.

1️⃣ (Optional) Using Docker & Docker Compose
docker ps

2️⃣ Start FastAPI Backend (Standalone)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000

3️⃣ Start React Frontend (Standalone)
cd frontend/my-react-app
npm install
npm start

The React app will run on http://localhost:3000.

🔹 Testing the Predictions
Navigate to the Predictions page in the React app (click “Predictions” in the sidebar).
Fill in the form with customer data (e.g., credit score, balance, etc.).
Click Predict. The app sends a POST request to the FastAPI endpoint POST /predict.
The FastAPI server returns a JSON response like:

{
  "will_exit": true
}

🔄 How It Works
FastAPI loads a pre-trained scikit-learn model (model.pkl).
The React app collects user input (credit score, age, etc.) and sends it to the FastAPI /predict endpoint.
FastAPI transforms the input into the required format, calls model.predict(...), and returns a JSON response indicating whether the user is likely to churn.

🚀 Future Enhancements
Integrate with a real database (e.g., Postgres, MySQL) for storing customer data.
Add user authentication and a dedicated admin dashboard.
Expand the model with additional features (transaction history, product usage, etc.).
