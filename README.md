# Online Complaint Management System

## Project Overview

The Online Complaint Management System is a web-based application that allows users to submit complaints and track their status. It includes a complaint submission form, a list of complaints, and an admin-style interface for updating complaint statuses.

The application has been deployed online, with the frontend hosted on Vercel, the backend hosted on Render, and the MySQL database hosted on Aiven.

## Objectives

- Submit complaints online.
- Store complaint records in a MySQL database.
- Display complaints and their current status.
- Update complaint statuses through the backend API.
- Practice full-stack development, REST API integration, and deployment.

## Features

- Submit complaints with a title, category, and description.
- View all complaints and individual complaints by ID.
- Update status to Pending, In Progress, or Resolved.
- Delete complaints through the backend API.
- Validate required fields and supported categories.
- Display success and error messages.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL hosted on Aiven
- **Database driver:** mysql2
- **Environment configuration:** dotenv
- **Cross-origin requests:** cors
- **Version control:** Git and GitHub
- **Frontend hosting:** Vercel
- **Backend hosting:** Render

## Deployment

- **Frontend:** https://project-frontend-eight-sigma.vercel.app
- **Backend API:** https://project-zpjs.onrender.com
- **Database hosting:** Aiven MySQL

The frontend communicates with the backend API, which processes requests and interacts with the MySQL database.

## Project Structure

```text
phase3-complaint-management/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── certs/
│       └── ca.pem
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

## Local Setup Instructions

1. Install Node.js and MySQL.
2. Create the database and tables using `database/schema.sql`.
3. Open a terminal in the `backend` directory.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file inside `backend` and configure the database variables:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=complaint_management
   ```

6. Start the backend:

   ```bash
   npm start
   ```

7. Open `frontend/index.html` in a browser or use a local development server.

For a deployed setup, configure the database environment variables in the hosting provider's dashboard. Do not commit `.env` files or expose database passwords.

## Testing

The following functions were tested:

- API availability through the home route.
- Retrieval of all complaints and an individual complaint.
- Complaint submission through the frontend.
- Display of saved complaints from MySQL.
- Complaint status updates through the frontend.
- Persistence of complaint status after refreshing the deployed website.
- Required-field and category validation through backend tests.
- Backend deployment and database connectivity.
- Successful frontend deployment.

## Current Limitations

- User registration and login are not implemented.
- The admin-style interface does not have authentication or authorization.
- Complaint access is not restricted to the owning user.
- The frontend does not provide a Delete button, although the backend supports deletion.
- Production monitoring, backup procedures, and a separate staging environment require further configuration and verification.

This application is a learning project and should not be used to handle sensitive real-world complaints without additional security measures.

## Future Improvements

- Implement secure user registration and login.
- Add role-based admin authentication.
- Restrict users to their own complaints.
- Improve validation and automated testing.
- Add a separate staging environment.
- Configure database backups and production monitoring.

## Conclusion

This project provided practical experience in frontend development, backend API creation, MySQL database integration, CRUD operations, input validation, testing, version control, and deployment. The application is deployed using Vercel, Render, and Aiven, demonstrating the process of making a full-stack application accessible online.

