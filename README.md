
# Online Complaint Management System

## Project Overview
The Online Complaint Management System is a web-based application developed to help users submit complaints and track their status. It provides a simple interface for submitting complaints and an admin-style section for updating complaint statuses.

## Objectives
- Allow users to submit complaints online.
- Store complaint information in a MySQL database.
- Display submitted complaints and their current status.
- Allow complaint statuses to be updated.
- Practice full-stack development and REST API integration.

## Features
- Submit a complaint with a title, category, and description.
- View all submitted complaints.
- View an individual complaint through its ID.
- Update complaint status to Pending, In Progress, or Resolved.
- Delete complaints through the backend API.
- Validate required complaint fields.
- Display success and error messages.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Database driver: mysql2
- Environment variables: dotenv
- Cross-origin requests: cors
- Version control: Git and GitHub

## Project Structure
```text
phase3-complaint-management/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── database/
│   └── schema.sql
└── frontend/
    ├── index.html
    ├── script.js
    ├── style.css
    └── project-screenshot.png
```

## Database Design
The project uses two MySQL tables:

### Users
Stores user ID, name, email, password, and role.

### Complaints
Stores complaint ID, user ID, title, description, category, status, and creation timestamp.

Each complaint references a user through `user_id`.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check API status |
| GET | `/complaints` | Retrieve all complaints |
| GET | `/complaints/:id` | Retrieve one complaint |
| POST | `/complaints` | Submit a complaint |
| PUT | `/complaints/:id` | Update complaint status |
| DELETE | `/complaints/:id` | Delete a complaint |

## Setup Instructions

1. Install Node.js and MySQL.
2. Create the database and tables using `database/schema.sql`.
3. Open a terminal in the `backend` directory.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file inside `backend` with your local MySQL settings:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=complaint_management
   ```

6. Start the backend:

   ```bash
   node server.js
   ```

7. Open `frontend/index.html` in a browser, or use a local development server.

Keep `.env` private and never upload real database credentials to GitHub.

## Testing
The following functions were tested during development:
- API availability through the home route.
- Retrieval of all complaints and an individual complaint.
- Complaint submission through the frontend.
- Display of saved complaints from MySQL.
- Complaint status update through the admin-style form.

## Current Limitations
- User registration and login are not implemented.
- The admin-style section does not have authentication or authorization.
- Complaint access is not yet restricted to the owning user.
- The application is intended as a learning project and is not production-ready.

## Future Improvements
- Implement secure user registration and login.
- Add role-based admin authentication.
- Display only the logged-in user's complaints.
- Improve validation and automated testing.
- Deploy the application to a production environment.

## Conclusion
This project provides practical experience in frontend development, backend API creation, MySQL database integration, CRUD operations, input validation, testing, and version control. It demonstrates how a full-stack application can manage complaint records and their statuses.

## Repository
[GitHub Repository](https://github.com/nitu-chainani123-asus/project)
