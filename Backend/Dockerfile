# 1) Use a lightweight Python base image
FROM python:3.10-slim

# 2) Set the working directory
WORKDIR /app

# 3) Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4) Copy the rest of the backend code
COPY . .

# 5) Expose the FastAPI port
EXPOSE 8000

# 6) Run the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
