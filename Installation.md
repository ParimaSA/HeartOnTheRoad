## Installation Guide

1. Clone the repository

```commandline
git clone https://github.com/ParimaSA/HeartOnTheRoad.git
```

2. Navigate to the repository

```commandline
cd HeartOnTheRoad
```

3. Initialize the Virtual Environment

```commandline
python -m venv venv
```

4. Activate the Virtual Environment

```commandline
# Window
venv\Scripts\activate
```
```commandline
# MacOS
source venv/bin/activate
```
5. Install Dependencies
```commandline
# Backend dependencies
pip install -r backend/requirements.txt
```

```commandline
# Frontend dependencies
cd frontend
npm install
```
6. Run the Backend Development Server
```commandline
# Navigate to backend directory
> cd backend
```

```commandline
python app.py
```
The server will be on http://127.0.0.1:8080/heart/v1/ui/

7. Run the Frontend Development Server
```commandline
# Navigate to frontend directory
> cd frontend
```

```commandline
npm run dev
```

Normally the server will be on http://localhost:3000.
