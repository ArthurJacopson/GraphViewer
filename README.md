System Design Document
1. Overview
1.1. Project Title
Exploring the Effects of Course Interaction and Coursework Performance on Early Withdrawals in Higher Education
1.2. Purpose
This system aims to visualize student interaction and assessment performance data to identify potential factors contributing to withdrawal rates. It provides insights into how program and personal factors interact, guiding future course design and research.
1.3. Scope
•	Generate interactive visualizations to compare withdrawn and non-withdrawn students.
•	Focus on course-specific analysis with personal factors as filters.
•	Ensure usability and responsiveness for data exploration.
________________________________________
2. System Architecture
2.1. Components
•	Frontend 
o	Technology: React.js, D3.js
o	Responsibilities: Render graphs, enable interactivity (dropdowns, checkboxes, overlays).
•	Backend 
o	Technology: Python (Flask/Django) or Node.js
o	Responsibilities: Data pre-processing, serving API endpoints for filtered datasets.
•	Data Storage 
o	Technology: PostgreSQL/MySQL
o	Dataset: Open University Learning Analytics dataset, pre-processed for analysis.
•	Deployment 
o	Platform: AWS/GCP/Azure
o	Services: S3 for static assets, Lambda for API endpoints, CloudFront for CDN.
2.2. Data Flow Diagram
graph TD
A[User Interaction] --> B[Frontend]
B --> C[Backend API]
C --> D[Database]
C --> E[Processed Data for Visualization]
E --> B
________________________________________
3. Functional Requirements
3.1. Core Features
1.	Course Interaction Visualization 
o	3D contour plots of daily clicks by withdrawal date.
o	Overlays for non-withdrawn student interactions.
2.	Assessment Performance Visualization 
o	Bar and cumulative graphs of average grades.
o	Boxplot toggles for grade distributions.
3.2. Interactivity
•	Dropdown menus for filtering by courses, personal factors, and assessments attempted.
•	Checkboxes for overlays and axis inversion.
3.3. Usability
•	Fast graph updates for seamless interactivity.
•	User-friendly labeling and tooltips.
________________________________________
4. Non-Functional Requirements
1.	Performance 
o	Ensure graph rendering within 1 second for datasets up to 10,000 entries.
2.	Scalability 
o	Support additional datasets and new visualization types.
3.	Security 
o	Enforce HTTPS and secure API endpoints.
4.	Maintainability 
o	Modular codebase with clear documentation.
________________________________________
5. Data Design
5.1. Dataset Overview
•	Personal Factors: Gender, age band, region, IMD band, education level, disability.
•	Program Factors: Daily clicks, assessment grades, withdrawal status.
•	Derived Data: Trends, averages, and interaction summaries.
5.2. Database Schema
Table	Columns	Description
students	id, gender, age_band, region, imd_band, highest_education, disability	Personal factors.
interactions	student_id, date, daily_clicks	Interaction data.
assessments	student_id, assessment_id, grade	Assessment performance.
withdrawals	student_id, withdrawal_date	Withdrawal records.
________________________________________
6. System Design Details
6.1. Frontend
•	Use D3.js for dynamic graph rendering.
•	Dropdowns and checkboxes implemented with React state management.
•	Responsive design for desktop and mobile.
6.2. Backend
•	API endpoints for querying: 
o	/api/courses/{course_id}/interactions
o	/api/courses/{course_id}/assessments
o	Filters applied via query parameters (e.g., ?group_by=age_band).
6.3. Data Processing
•	Pre-compute interaction trends and averages for efficiency.
•	Cache processed results for common queries.
________________________________________
7. User Interaction Design
7.1. UI Components
1.	Graphs
o	3D Contour Plot: Visualize daily clicks over time.
o	Bar Graph: Assessment grades per student.
2.	Filters
o	Dropdown menus for course selection and grouping factors.
o	Checkboxes for toggling overlays.
7.2. Workflow
1.	Select a course from the dropdown.
2.	Apply grouping filters (e.g., age, gender).
3.	Toggle overlays to compare withdrawn and non-withdrawn data.
________________________________________
8. Future Improvements
1.	Interactive 3D Graphs 
o	Allow users to rotate and zoom for better visualization.
2.	Expanded Dataset 
o	Integrate more recent datasets for broader analysis.
3.	AI Integration 
o	Use machine learning to predict at-risk students.
________________________________________
9. References
•	Open University Learning Analytics Dataset
•	Libraries: React.js, D3.js, Flask/Django
•	Hosting: AWS/GCP/Azure
________________________________________

