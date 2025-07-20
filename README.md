# Employee Management System - Full Stack (Spring Boot + MySQL + HTML/CSS/JS)

This project is a **Full Stack Employee Management System**, designed using:

- ✅ Backend: **Spring Boot 3 + Spring Data JPA**
- ✅ Database: **MySQL 8**
- ✅ Frontend (optional): **HTML, CSS, JavaScript**
- ✅ API Testing: **Postman Collection (optional)**

---

## 📂 Project Structure

```
src/
├── main/
│   ├── java/
│   │   ├── org/
│   │   │   ├── example/
│   │   │   │   ├── employee/
│   │   │   │   │   ├── controller/
│   │   │   │   │   ├── model/
│   │   │   │   │   ├── repository/
│   │   │   │   │   ├── service/
│   │   │   │   │   ├── EmployeeManagementApplication.java
│   ├── resources/
│   │   ├── application.properties
│   │   ├── static/
│   │   │   ├── login.html
│   │   │   ├── dashboard.html
│   │   │   ├── style.css
│   │   │   ├── script.js
```

---

## 🛠️ Technologies Used

| Layer | Technology |
|---|---|
| Backend | Spring Boot 3, Spring Data JPA |
| Database | MySQL 8 |
| Frontend | HTML, CSS, JavaScript |
| API Testing | Postman (optional) |

---

## 🔧 Setup Instructions

### 1️⃣ MySQL Setup

1. Start MySQL Server.
2. Create the database:
    ```sql
    CREATE DATABASE employeedb;
    ```
3. Confirm your **MySQL username and password**.

---

### 2️⃣ application.properties

Create or edit:
`src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employeedb
spring.datasource.username=root
spring.datasource.password=your_mysql_password_here

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

---

### 3️⃣ Run the Application

Start the application by running:
```
EmployeeManagementApplication.java
```

✅ Backend will be available at:
```
http://localhost:8080
```

---

## 🌐 API Testing (Postman)

### Signup (Register User)
```http
POST /auth/signup
```
**Body (JSON)**:
```json
{
    "username": "murali",
    "password": "12345"
}
```

---

### Login (Authenticate User)
```http
POST /auth/login
```
**Body (JSON)**:
```json
{
    "username": "murali",
    "password": "12345"
}
```

---

### Add Employee
```http
POST /employees
```
**Body (JSON)**:
```json
{
    "name": "John Doe",
    "department": "IT",
    "salary": 60000.0
}
```

---

### Update Employee
```http
PUT /employees/{id}
```
**Body (JSON)**:
```json
{
    "name": "John Doe Updated",
    "department": "HR",
    "salary": 70000.0
}
```

---

### Delete Employee
```http
DELETE /employees/{id}
```

---

### Get All Employees
```http
GET /employees
```

---

## 🌐 UI Testing (Browser)

### 1️⃣ Access Login Page
```
http://localhost:8080/login.html
```

---

### 2️⃣ Signup & Login

- Signup first if the user doesn’t exist.
- After login, you’ll automatically get redirected to:
```
http://localhost:8080/dashboard.html
```

---

### 3️⃣ Employee Dashboard Features

- ✅ View all employees.
- ✅ Add new employee.
- ✅ Delete employee.
- ✅ Logout (back to login page).

---

## 📂 Static Folder (Frontend Files)

Place these files inside:
`src/main/resources/static`

| File | Purpose |
|---|---|
| login.html | Login & Signup UI |
| dashboard.html | Employee Dashboard UI |
| style.css | Common styling for both pages |
| script.js | Contains fetch calls for backend APIs |

---

## 🔗 Endpoint Summary

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/signup` | Register a user |
| POST | `/auth/login` | Login user |
| GET | `/employees` | Fetch all employees |
| POST | `/employees` | Add new employee |
| PUT | `/employees/{id}` | Update employee by ID |
| DELETE | `/employees/{id}` | Delete employee by ID |

---

## 📦 Postman Collection

You can also test using Postman. If needed, I can provide a **ready-to-import Postman Collection** file with:

- All endpoints pre-configured.
- Sample request bodies filled in.
- Correct content-types already set.

---

## 💻 Project Workflow (End-to-End)

| Step | Action |
|---|---|
| 1 | Start MySQL & create database |
| 2 | Set `application.properties` |
| 3 | Run `EmployeeManagementApplication` |
| 4 | Open `http://localhost:8080/login.html` |
| 5 | Signup/Login |
| 6 | Manage employees via `dashboard.html` |
| 7 | Test APIs via Postman (optional) |
| 8 | Commit to GitHub (optional for interview demo) |

---

## ✅ Key Features

✅ Full CRUD (Create, Read, Update, Delete) for employees  
✅ User Authentication (Signup + Login)  
✅ Full Database Integration (MySQL)  
✅ Browser-based UI  
✅ Works with Postman for backend-only testing  

---
