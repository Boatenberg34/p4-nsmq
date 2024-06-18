# P4-NSMQ Project
- **Team:** BEGood Team (Kwabena Boateng and Emmanuel Sam)
- **Date:** June 17, 2024

## Overview of Project
# Prepare for National Science and Maths Quiz (P4 – NSMQ)
- A tool to assist senior high students in their preparation for the National Science and Maths Quiz.
  
# Introduction
The National Science and Maths Quiz (NSMQ) is a prestigious competition that tests the knowledge and analytical skills of senior high school students in Ghana. However, access to adequate learning materials and experienced teachers varies widely across schools, often leaving students in less prominent institutions at a disadvantage. This disparity hinders many talented and passionate students from participating and excelling in the NSMQ.
The P4-NSMQ project aims to bridge this gap by providing all senior high students with equal access to essential materials and guidance through an AI-powered tool. This report details the problem, the proposed solution, and the anticipated impact of the P4-NSMQ project.

## Technicals and setup
1. **Clone the Repository:**

    ```bash
    git clone https://github.com/boatenber34/p4-nsmq.git
    cd your-repo-name
    ```

2. **Create a Virtual Environment:**

    You first have to cd into the project directory: 
    ```bash
    cd p4-nsmq
    ```
    Then, create/activate your virtual environment
    On macOS and Linux:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

    On Windows:
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```

3. **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

## Running the Application
  If all setup is done properly, then to run the application, just call 
  ```bash
  python app.py
  ```
  And the flask server should start and give you the url like(127.0.0.1:5000). 
  Get this url in the browser and you are good to go.
