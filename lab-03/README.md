# Lab 03: Express Architecture & Middleware Foundation

## Lab Details

- **Lab Number:** 03
- **Subject:** Backend Development Fundamentals
- **Academic Context:** Year II, Term II
- **Module:** Modular Express Architecture and Middleware Foundation
- **Implementation Status:** Starter Scaffold / Baseline Express Application

## Student Details

- **Name:** S.S.M.Bharadwaj
- **Registration Number:** 252U1R1231
- **Section:** CSE-CORE-2E

---

## 1. Overview & Implementation Scope

Lab 03 provides a clean, modular Express.js starter scaffold configured with industry-standard HTTP middleware including Cross-Origin Resource Sharing (`cors`), environment variable isolation (`dotenv`), JSON request body parsing, and URL-encoded form parsing.

> **Implementation Notice:** In the current repository state, this lab serves as an architectural baseline. The core server setup, middleware pipeline, health check endpoint, and fallback error handling are fully operational. Domain-specific business logic and additional resource routes are pending further module development.

---

## 2. Technologies Used

- **Runtime:** Node.js (v18.x / v20.x)
- **Framework:** Express.js (`^5.3.0`)
- **Middleware:**
  - `cors` (`^2.8.6`) – Cross-Origin Resource Sharing enabler
  - `dotenv` (`^18.0.9`) – Zero-dependency environment variable loader
- **Development Tool:** Nodemon (`^3.1.14`)
- **API Testing:** VS Code REST Client (`lab-03.http`)

---

## 3. Project Structure

```text
lab-03/
├── node_modules/        # Installed dependencies (git-ignored)
├── .gitignore           # Ignores node_modules, .env, and debug logs
├── lab-03.http          # REST Client declarative test requests
├── package.json         # Package manifest and npm scripts
├── package-lock.json    # Exact dependency tree lockfile
├── README.md            # Lab 03 technical documentation
└── server.js            # Express server entry point with middleware pipeline
```

---

## 4. Installation and Setup

### Prerequisites
- Node.js (v18.x or later)
- npm (v9.x or later)

### Steps
Navigate to the `lab-03` directory and install dependencies:

```powershell
cd lab-03
npm install
```

---

## 5. Running the Application

### Development Mode (auto-restart)
```powershell
npm run dev
```

### Production / Standard Mode
```powershell
npm start
```

### Server Port Configuration
The server initializes on port **5002** by default:
```javascript
const PORT = process.env.PORT || 5002;
```
If a `.env` file is present containing `PORT=3000`, the server will bind to port 3000 instead.

---

## 6. Implemented API Endpoints

The following endpoints are verified to exist in `server.js`:

| HTTP Method | Endpoint | Description | Response Content-Type | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | Welcomes client and reports server status | `application/json` | `200 OK` |
| **GET** | `/api/health` | Service health check and process uptime | `application/json` | `200 OK` |
| **ALL** | `/*` | Catch-all handler for unmapped routes | `application/json` | `404 Not Found` |

### Unimplemented Endpoints (Audit Notice)
The previous placeholder documentation listed endpoints such as `/about` and `/time`. In the actual `server.js` implementation, these routes are **not implemented** and will correctly return a `404 Not Found` JSON error response:
```json
{
  "error": "Route not found"
}
```

---

## 7. Request and Response Examples

### 1. Root Service Check
- **Request:** `GET http://localhost:5002/`
- **Response Status:** `200 OK`
- **Response Body:**
  ```json
  {
    "message": "Welcome to lab-03 Backend API",
    "status": "online",
    "timestamp": "2026-11-01T17:35:00.000Z"
  }
  ```

### 2. Health & Uptime Inspection
- **Request:** `GET http://localhost:5002/api/health`
- **Response Status:** `200 OK`
- **Response Body:**
  ```json
  {
    "status": "OK",
    "uptime": "142s",
    "timestamp": "2026-11-01T17:35:00.000Z"
  }
  ```

### 3. Route Not Found
- **Request:** `GET http://localhost:5002/non-existent-route`
- **Response Status:** `404 Not Found`
- **Response Body:**
  ```json
  {
    "error": "Route not found"
  }
  ```

---

## 8. Testing with REST Client

A test suite is supplied in [`lab-03.http`](./lab-03.http):
> **Port Configuration Note:** The `.http` file configures `@baseUrl = http://localhost:3000`. Because `server.js` defaults to port `5002`, either create a `.env` file containing `PORT=3000` or change `@baseUrl` in `lab-03.http` to `http://localhost:5002` before executing tests.

---

## 9. Verification & Screenshots Status

- **Screenshots Directory:** No screenshot files currently exist in `lab-03`.
- **Status:** Screenshots are pending assignment progression and feature implementation.

---

## 10. Viva Voce Preparation

### Q1: What is Cross-Origin Resource Sharing (CORS) and why is `cors()` middleware necessary?
> **Answer:** CORS is a browser security mechanism that restricts web applications running at one origin from requesting resources from a different origin. The `cors()` middleware in Express appends appropriate `Access-Control-Allow-Origin` headers to HTTP responses, permitting legitimate frontend clients (such as React or Angular) to interact with this backend API.

### Q2: What is the purpose of `express.json()` and `express.urlencoded()`?
> **Answer:** These are built-in Express middleware functions based on `body-parser`. `express.json()` parses incoming HTTP requests with JSON payloads and populates `req.body`. `express.urlencoded({ extended: true })` parses incoming requests with URL-encoded payloads (standard HTML form submissions).

### Q3: Why is `dotenv` imported at the very top of `server.js`?
> **Answer:** `dotenv.config()` loads key-value pairs from a local `.env` file into Node's `process.env` global object. Calling it before evaluating other modules ensures that environment variables (like `PORT` or database connection strings) are populated before dependent services attempt to read them.

---

## 11. Conclusion

Lab 03 establishes an operational Express.js starter scaffold with full CORS support, JSON body parsing, environment configuration, and health monitoring endpoints.
