# Online Complaint Management System

## Project Overview
The Online Complaint Management System is a web-based application that allows users to submit complaints and track their status. It includes a complaint submission form, a list of complaints, and an admin-style interface for updating complaint statuses.

## Objectives
- Submit complaints online.
- Store complaint records in a MySQL database.
- Display complaints and their current status.
- Update complaint statuses through the backend API.
- Practice full-stack development and REST API integration.

## Features
- Submit complaints with a title, category, and description.
- View all complaints and individual complaints by ID.
- Update status to Pending, In Progress, or Resolved.
- Delete complaints through the backend API.
- Validate required fields.
- Display success and error messages.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Database driver:** mysql2
- **Environment configuration:** dotenv
- **Cross-origin requests:** cors
- **Version control:** Git and GitHub

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

5. Create a `.env` file inside `backend`:

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

7. Open `frontend/index.html` in a browser or use a local development server.

Keep `.env` private. Never upload real database credentials to GitHub.

## Testing
The following functions were tested during development:
- API availability through the home route.
- Retrieval of all complaints and an individual complaint.
- Complaint submission through the frontend.
- Display of saved complaints from MySQL.
- Complaint status updates through the admin-style form.

## Current Limitations
- User registration and login are not implemented.
- The admin-style interface does not have authentication or authorization.
- Complaint access is not restricted to the owning user.
- The application is a learning project and is not production-ready.

## Future Improvements
- Implement secure user registration and login.
- Add role-based admin authentication.
- Restrict users to their own complaints.
- Improve validation and automated testing.
- Deploy the application to a production environment.

## Conclusion
This project provides practical experience in frontend development, backend API creation, MySQL database integration, CRUD operations, input validation, testing, and version control.

## Repository
[GitHub Repository](https://github.com/nitu-chainani123-asus/project)
