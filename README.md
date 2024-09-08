# Job-Application-Management
Node
## Overview

This project is a job application management system with a RESTful API built using Node.js, Express, and Sequelize. It allows for managing job positions, applicants, and interviews.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (or yarn)
- MySQL or PostgreSQL database

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/DevnandanRaj/Job-Application-Management.git
cd job-application-management


API Endpoints
User Endpoints
POST /users/signup: Register a new user

Request Body: { "username": "username", "email": "user@example.com", "password": "password" }
Response: {"message": "User registered successfully"}


POST /users/login: Log in an existing user

Request Body: { "email": "user@example.com", "password": "password" }
Response: {"token": "jwt_token" }
Job Endpoints
POST /jobs: Add a new job position

Request Body: { "title": "Job Title", "department": "Department", "description": "Job Description", "openDate": "YYYY-MM-DD" }
Response: { "job": { ... } }
GET /jobs: Retrieve a list of all job positions

Applicant Endpoints
POST /applicants: Add a new applicant for a specific job

Request Body: { "jobId": 1, "name": "Applicant Name", "email": "applicant@example.com", "resumeLink": "http://resume.link", "status": "Pending" }
Response: { "applicant": { ... } }
GET /applicants?jobId={jobId}: Retrieve a list of all applicants for a specific job

PATCH /applicants/{applicantId}: Update the status of an applicant

Request Body: { "status": "Interviewed" }
Response: { "applicant": { ... } }
DELETE /applicants/{applicantId}: Delete an applicant from the database

Interview Endpoints
GET /interviews?applicantId={applicantId}: Fetch interview details for a specific applicant

POST /interviews: Schedule an interview

Request Body: { "applicantId": 1, "interviewDate": "YYYY-MM-DD", "interviewerName": "Interviewer Name" }
Response: { "interview": { ... } }