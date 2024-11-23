# Early Withdrawals in Higher Education: Visualizing Course Interaction and Performance

## Overview

This project explores the effects of course interaction and coursework performance on early withdrawals in higher education. Using visual analytics, it identifies factors that may influence student withdrawal decisions, offering insights that can guide future course design and academic interventions. The system visualizes both course-specific data and personal factors through interactive graphs and provides an intuitive user interface for educators, researchers, and data analysts.

## Features

- **Interactive Visualizations**  
  Display 3D contour plots and bar graphs to visualize student interaction with course material and assessment performance.
  
- **Filters & Grouping**  
  Apply various filters for personal and program factors such as age, gender, disability, and interaction data to identify trends.

- **Overlay Comparisons**  
  Compare withdrawn vs. non-withdrawn students with toggleable overlays.

- **Course and Assessment Performance**  
  Visualize course-specific interactions and performance metrics like average grades and interaction patterns.

## Installation

### Prerequisites

- **Node.js** (for frontend)
- **Python 3.8+** (for backend)
- **PostgreSQL** or **MySQL** (for database)

### Frontend Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/early-withdrawals-visualization.git
cd early-withdrawals-visualization
```

2. Install dependencies:

```bash
npm install
```

3. Run the frontend:

```bash
npm start
```

The frontend will be accessible at `http://localhost:3000`.

### Backend Setup

1. Clone the repository if not already done:

```bash
git clone https://github.com/your-username/early-withdrawals-visualization.git
cd early-withdrawals-visualization
```

2. Set up a virtual environment for Python:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Set up the database (PostgreSQL/MySQL):

```bash
# Create a new database and configure your database settings in `config.py`
```

5. Run the backend:

```bash
python app.py
```

The backend will be accessible at `http://localhost:5000`.

---

## Usage

1. Open the web application (`http://localhost:3000`).
2. Select a course from the dropdown menu.
3. Use filters to group data by personal factors like age, gender, or disability.
4. Toggle overlays to compare withdrawn and non-withdrawn students.
5. Interact with the visualizations to explore trends and patterns in course interactions and performance.

---

## Technologies Used

- **Frontend**: React.js, D3.js  
- **Backend**: Python (Flask/Django)  
- **Database**: PostgreSQL/MySQL  
- **Deployment**: AWS/GCP/Azure  

---

## Database Schema

### Students Table
- `id`: Unique identifier
- `gender`: Gender of the student
- `age_band`: Age group of the student
- `region`: Geographic region
- `imd_band`: Index of Multiple Deprivation
- `highest_education`: Highest level of prior education
- `disability`: Disability status

### Interactions Table
- `student_id`: Foreign key to `students`
- `date`: Date of interaction
- `daily_clicks`: Number of clicks on course material for that day

### Assessments Table
- `student_id`: Foreign key to `students`
- `assessment_id`: Unique identifier for the assessment
- `grade`: Grade achieved by the student

### Withdrawals Table
- `student_id`: Foreign key to `students`
- `withdrawal_date`: Date the student withdrew from the course

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your changes to your fork.
5. Submit a pull request.
