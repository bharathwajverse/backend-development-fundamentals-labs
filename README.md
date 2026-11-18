# Backend Development Fundamentals – Practical Labs

[![Node.js Version](https://img.shields.io/badge/Node.js-v18%2B%20%7C%20v20%2B-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/Express-v5.x-lightgrey.svg)](https://expressjs.com/)
[![Database](https://img.shields.io/badge/Database-SQLite3-blue.svg)](https://www.sqlite.org/)
[![Auth](https://img.shields.io/badge/Auth-bcrypt%20%2B%20JWT-purple.svg)](https://jwt.io/)
[![API Testing](https://img.shields.io/badge/Testing-REST%20Client-orange.svg)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

## 1. Introduction

Welcome to the **Backend Development Fundamentals Practical Labs** repository. This repository serves as a comprehensive, structured portfolio of backend engineering laboratory exercises. It demonstrates fundamental server architecture, modern asynchronous JavaScript execution, relational database integration, RESTful API design, defensive parameterized query construction, query filtering and debugging, cryptographic password hashing with `bcrypt`, stateless JWT authentication, middleware pipelines, and declarative HTTP testing.

Each lab folder within this repository is organized as an **isolated, standalone Node.js package** with its own `package.json`, dependency tree, declarative test suite (`.http`), and dedicated technical documentation.

---

## 2. Course & Student Information

- **Subject:** Backend Development Fundamentals
- **Academic Context:** Year II, Term II
- **Student Name:** S.S.M.BHARADWAJ
- **Registration Number:** 252U1R1236
- **Section:** CSE-CORE-2E
- **Faculty:** Mr Yugandhar Gurjalwar
- **Institution:** Aurora Deemed-to-be-University
- **Repository:** [https://github.com/bharathwajverse/backend-development-fundamentals-labs](https://github.com/bharathwajverse/backend-development-fundamentals-labs)
- **Lab 4 Live Deployment (Render):** [https://backend-development-fundamentals-labs-app.onrender.com](https://backend-development-fundamentals-labs-app.onrender.com)

---

## 3. Technologies Used

Only technologies verified to exist in this repository's source code and manifests are listed below:

- **Runtime Environment:** [Node.js](https://nodejs.org/) (v20.18.0 LTS pinned via `.node-version`)
- **Web Application Framework:** [Express.js](https://expressjs.com/) (`^5.1.0` in Labs 1, 2, 4; `^5.3.0` in Labs 3, 5–10)
- **Relational Database Engine:** [SQLite](https://www.sqlite.org/) (Embedded file-based database)
- **Database Client Drivers:**
  - `sqlite3` (`^5.1.7`) – Asynchronous SQLite driver for Node.js
  - `sqlite` (`^5.1.1`) – Promise-based wrapper around `sqlite3`
- **Authentication & Security Libraries (Lab 04):**
  - `bcrypt` (`^5.1.1`) – Adaptive Blowfish-based one-way password hashing and verification
  - `jsonwebtoken` (`^9.0.2`) – Stateless HMAC-SHA256 JSON Web Token generation and verification
- **Core Middleware & Utilities:**
  - `cors` (`^2.8.6`) – Cross-Origin Resource Sharing middleware
  - `dotenv` (`^18.0.9`) – Environment variable loader
- **Development Process Manager:** [Nodemon](https://nodemon.io/) (`^3.1.10` / `^3.1.14`) – Automatic file-watch server reloader
- **API Specification & Testing:** [VS Code REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (`.http` declarative request files) & Node.js automated test runners (`test-runner.js`)
- **Cloud Hosting & CI:** [Render](https://render.com/) (`render.yaml`) & GitHub Actions (`.github/workflows/verify-labs.yml`)

---

## 4. Learning Objectives

The practical laboratory exercises in this curriculum support the following technical proficiencies:
1. **Server Initialization & Lifecycle:** Configuring modular Express web servers, managing port bindings, and handling graceful process shutdowns.
2. **Relational Database Management:** Creating schemas, managing table keys, executing CRUD operations, and managing asynchronous SQLite database handles.
3. **Defensive Programming & SQL Injection Prevention:** Implementing parameterized queries with positional `?` placeholders to eliminate SQL injection vulnerabilities.
4. **RESTful API Semantics & Query Parameters:** Mapping HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) to database operations, supporting search/sort/pagination/range filtering, and returning standard status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`).
5. **Authentication, Password Hashing & Stateless JWT:** Implementing user registration and login with salted `bcrypt` password hashing (`bcrypt.hash` / `bcrypt.compare`) and issuing digitally signed `jsonwebtoken` tokens containing non-sensitive identity claims.
6. **Middleware Pipelines & Cloud Deployment:** Configuring Express middleware pipelines, automated integration tests, GitHub Actions CI, and production deployment on Render.

---

## 5. Repository Structure

```text
backend-development-fundamentals-labs/
├── .github/
│   └── workflows/
│       └── verify-labs.yml  # GitHub Actions CI verifying Lab 03 and Lab 04 endpoints
├── .gitignore               # Root git ignore rules (node_modules, .env, OS files)
├── render.yaml              # Render Blueprint configuration for Lab 04 web service
├── README.md                # Root curriculum overview and documentation index
├── AUDIT_REPORT.md          # Comprehensive documentation audit and verification log
├── CONTRIBUTING.md          # Contribution standards and pull request guidelines
├── SECURITY.md              # Security policy, bcrypt/JWT standards & SQLi prevention
├── TESTING.md               # Declarative REST Client & automated testing specifications
├── VIVA_GUIDE.md            # Course-wide Viva Voce examination preparation guide
├── lab-01/                  # Lab 01: Node.js and Express Server (Completed)
│   ├── .gitignore
│   ├── lab-01.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── server.js
│   └── screenshots/         # 4 verification screenshots
├── lab-02/                  # Lab 02: SQLite Database & CRUD Routes (Completed)
│   ├── database/
│   │   └── bookStore.db     # SQLite database with seeded 'book' table
│   ├── .gitignore
│   ├── lab-02.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-03/                  # Lab 03: REST API, Query Parameters & Debugging (Completed)
│   ├── debug-exercise/
│   │   ├── DEBUGGING.md     # 4 deliberate bug root-cause and fix analyses
│   │   └── server-broken.js # Broken server code for debugging lab
│   ├── postman/
│   │   └── Lab3.postman_collection.json # 21 test scenarios
│   ├── screenshots/         # 16 verification screenshots
│   ├── .env.example
│   ├── .gitignore
│   ├── .node-version
│   ├── database.db          # SQLite database with 15 seeded books
│   ├── lab-03.http          # Declarative REST Client test scenarios
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md            # Comprehensive Lab 3 documentation
│   ├── server.js            # Express server with query params, validation & error handling
│   └── test-runner.js       # Automated Lab 3 integration test suite
├── lab-04/                  # Lab 04: Registration, Login and JWT Authentication (Completed)
│   ├── screenshots/         # 10 verification screenshots (REST Client, SQLite, jwt.io)
│   ├── .env.example
│   ├── .gitignore
│   ├── .node-version
│   ├── lab-04.http          # 6 REST Client auth test scenarios
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md            # Comprehensive Lab 4 documentation & live Render link
│   ├── server.js            # Express auth server with SQLite, bcrypt, and JWT
│   └── test-runner.js       # Automated 9-assertion integration test suite
├── lab-05/                  # Lab 05: RESTful Routing (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-05.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-06/                  # Lab 06: Data Validation & Errors (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-06.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-07/                  # Lab 07: Authentication & Security (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-07.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-08/                  # Lab 08: Persistent Data Integration (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-08.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-09/                  # Lab 09: API Integration & Queries (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-09.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
└── lab-10/                  # Lab 10: Production Readiness (Starter Scaffold)
    ├── .gitignore
    ├── lab-10.http
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── server.js
```

---

## 6. Lab Overview & Implementation Status

The table below provides a comprehensive summary of all ten laboratory modules, detailing technologies, verified implemented features, documentation links, and current implementation status:

| Lab | Title | Tech Stack | Implemented Functionality | Docs | Status |
| :---: | :--- | :--- | :--- | :---: | :---: |
| **01** | Node.js and Express Server | Node.js, Express 5, Nodemon | `GET /`, `GET /about`, `GET /time`, 404 fallback routing | [README](./lab-01/README.md) | **Completed** |
| **02** | SQLite Database & CRUD Routes | Node.js, Express 5, SQLite3, sqlite, Nodemon | Full REST CRUD (`GET /books/`, `GET /books/:id/`, `POST /books/`, `PUT /books/:id/`, `DELETE /books/:id/`) with SQL injection prevention | [README](./lab-02/README.md) | **Completed** |
| **03** | REST API, Query Parameters & Debugging | Node.js, Express 5, SQLite3, sqlite, Nodemon | Query filtering (`search_q`, `sort`, `order`, `limit`, `offset`, `min_price`, `max_price`), strict body validation, `201/200/400/404` status codes, debugging exercise | [README](./lab-03/README.md) | **Completed** |
| **04** | Registration, Login and JWT Authentication | Node.js, Express 5, SQLite3, sqlite, bcrypt, jsonwebtoken, Nodemon | `GET /`, `GET/POST /register` (bcrypt 10-round hashing, duplicate rejection), `GET/POST /login` (`bcrypt.compare`, HS256 JWT token issuance), parameterized SQLite `user` table, Render deployment | [README](./lab-04/README.md) | **Completed** |
| **05** | RESTful Routing | Node.js, Express 5, CORS, Dotenv | Modular route structure foundation, `GET /`, `GET /api/health`, 404 handler | [README](./lab-05/README.md) | **Starter Scaffold** |
| **06** | Data Validation & Errors | Node.js, Express 5, CORS, Dotenv | Payload validation base, `GET /`, `GET /api/health`, 404 handler | [README](./lab-06/README.md) | **Starter Scaffold** |
| **07** | Authentication & Security | Node.js, Express 5, CORS, Dotenv | Security & token guard baseline, `GET /`, `GET /api/health`, 404 handler | [README](./lab-07/README.md) | **Starter Scaffold** |
| **08** | Persistent Data Integration | Node.js, Express 5, CORS, Dotenv | Database integration foundation, `GET /`, `GET /api/health`, 404 handler | [README](./lab-08/README.md) | **Starter Scaffold** |
| **09** | API Integration & Queries | Node.js, Express 5, CORS, Dotenv | Third-party API & query baseline, `GET /`, `GET /api/health`, 404 handler | [README](./lab-09/README.md) | **Starter Scaffold** |
| **10** | Production Readiness | Node.js, Express 5, CORS, Dotenv | Process management baseline, health probes, `GET /`, `GET /api/health`, 404 handler | [README](./lab-10/README.md) | **Starter Scaffold** |

---

## 7. Installation and Setup

### Prerequisites
Before running any lab, ensure you have installed:
- **Node.js:** v18.0.0 or v20.x LTS ([Download Node.js](https://nodejs.org/))
- **npm:** v9.0.0 or higher (packaged with Node.js)
- **VS Code:** with the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) installed.

### Independent Project Architecture
> **Notice:** Each lab directory is an isolated Node.js project containing its own `package.json`. There is no shared monolithic `node_modules` at the root. You must install dependencies inside each specific lab folder prior to running it.

To install dependencies for a lab:
```powershell
cd lab-04
npm install
```

---

## 8. Running Individual Labs

Each lab provides standard npm scripts defined in its `package.json`:
- `npm run dev` – Starts the server with Nodemon (auto-reloads on source changes).
- `npm start` – Starts the server directly with `node server.js`.
- `npm test` – Runs the automated integration test runner (available in `lab-03` and `lab-04`).
- `npm run db` – Displays the `user` table contents in tabular format (available in `lab-04`).

### Execution Example: Lab 04 (Authentication & JWT)
```powershell
# 1. Navigate to lab directory
cd lab-04

# 2. Install dependencies (express, sqlite, sqlite3, bcrypt, jsonwebtoken)
npm install

# 3. Launch the development server
npm run dev

# 4. Run automated end-to-end verification tests
npm test
```

### Port Allocation Reference (Based on Actual Code)
- **Lab 01:** Port `3000` (`app.listen(3000)`)
- **Lab 02:** Port `3000` (`app.listen(3000)`)
- **Lab 03:** Port `3000` (`process.env.PORT || 3000`)
- **Lab 04:** Port `3000` (`process.env.PORT || 3000`)
- **Labs 05 through 10:** Defaults to Port `5002` (`process.env.PORT || 5002`). Can be configured via `.env` file (e.g. `PORT=3000`).

---

## 9. API Documentation Overview

### Lab 01 Endpoints
- `GET /` – Server greeting message (`text/html`)
- `GET /about` – Student details JSON (`{ name, setion }`)
- `GET /time` – Current ISO server date and time
- `ALL /*` – Catch-all 404 error response

### Lab 02 Endpoints (SQLite Book Management)
- `GET /books/` – Retrieve array of all books from SQLite
- `GET /books/:bookId/` – Retrieve specific book by ID
- `POST /books/` – Insert a new book record
- `PUT /books/:bookId/` – Update existing book fields by ID
- `DELETE /books/:bookId/` – Delete book record by ID

### Lab 03 Endpoints (REST Query Parameters & Validation)
- `GET /` – Service metadata & student verification JSON
- `GET /books/` – Advanced search (`search_q`), sort (`sort`/`order`), pagination (`limit`/`offset`), and price range (`min_price`/`max_price`)
- `GET /books/:id/` – Retrieve specific book with `400`/`404` validation
- `POST /books/`, `PUT /books/:id/`, `DELETE /books/:id/` – Strict payload validation and HTTP status semantics

### Lab 04 Endpoints (Registration, Login & JWT Authentication)
- `GET /` – Student verification metadata, status, and available auth routes (`200 OK`)
- `GET /register` – Registration endpoint helper metadata and sample request body (`200 OK`)
- `POST /register` – Validate fields, reject duplicate username (`400`), hash password with `bcrypt.hash(password, 10)`, and insert user (`201 Created`)
- `GET /login` – Login endpoint helper metadata and sample request body (`200 OK`)
- `POST /login` – Validate user existence (`400`), verify password via `bcrypt.compare` (`400`), and issue signed `{ jwt_token }` via `jwt.sign({ username }, secretKey)` (`200 OK`)
- `ALL /*` – Catch-all 404 handler (`404 Not Found`)

### Labs 05–10 Baseline Endpoints
- `GET /` – Service online status and timestamp JSON
- `GET /api/health` – Server health status, uptime, and timestamp JSON
- `ALL /*` – Standardized 404 error JSON (`{ error: "Route not found" }`)

For complete request-response payloads, status codes, and query details, refer to the individual lab READMEs linked in the [Lab Overview Table](#6-lab-overview--implementation-status).

---

## 10. Database Architectures (Labs 02, 03 & 04)

### Lab 02 & Lab 03 Schema: `book`
```sql
CREATE TABLE book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    price INTEGER,
    pages INTEGER
);
```

### Lab 04 Schema: `user` (`lab-04/database/users.db`)
```sql
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    name TEXT,
    password TEXT
);
```
- `password` stores **only 60-character salted bcrypt hashes** (`$2b$10$...`). Plain-text passwords are never stored or logged.

---

## 11. Testing with VS Code REST Client & Automated Suites

API verification across this repository is conducted using declarative `.http` files and Node.js integration runners:

1. Install the **REST Client** extension by Huachao Mao in VS Code.
2. Open any lab's `.http` file (e.g., `lab-04/lab-04.http`).
3. Start the corresponding lab server (`npm run dev`).
4. Click **`Send Request`** above any HTTP block to inspect status codes, headers, and response payloads.
5. For `lab-03` and `lab-04`, run `npm test` to execute the full automated integration test suite (also enforced automatically in GitHub Actions CI).

---

## 12. Screenshots & Verification Artifacts

In strict compliance with documentation integrity standards, only verified screenshot files that actually exist in the repository are linked:

### Lab 01 Verification Screenshots (4 Files)
| Endpoint | Relative Path | Status |
| :--- | :--- | :---: |
| Root Route (`/`) | [`lab-01/screenshots/home.png`](./lab-01/screenshots/home.png) | Verified |
| About Route (`/about`) | [`lab-01/screenshots/about.png`](./lab-01/screenshots/about.png) | Verified |
| Time Route (`/time`) | [`lab-01/screenshots/time.png`](./lab-01/screenshots/time.png) | Verified |
| 404 Route (`/contact`) | [`lab-01/screenshots/404.png`](./lab-01/screenshots/404.png) | Verified |

### Lab 03 Verification Screenshots (16 Files)
All 16 screenshots (`01-get-all-books-default.png` through `16-debug-missing-await.png`) are verified and embedded in [`lab-03/README.md`](./lab-03/README.md).

### Lab 04 Verification Screenshots (10 Files)
| Verification Scenario | Relative Path | Status |
| :--- | :--- | :---: |
| Nodemon Server Startup | [`lab-04/screenshots/01-server-start-nodemon.png`](./lab-04/screenshots/01-server-start-nodemon.png) | Verified |
| Register Success (`201 Created`) | [`lab-04/screenshots/02-register-user-success.png`](./lab-04/screenshots/02-register-user-success.png) | Verified |
| Duplicate Username (`400 Bad Request`) | [`lab-04/screenshots/03-register-duplicate-user-400.png`](./lab-04/screenshots/03-register-duplicate-user-400.png) | Verified |
| Login Success & JWT (`200 OK`) | [`lab-04/screenshots/04-login-user-success-jwt.png`](./lab-04/screenshots/04-login-user-success-jwt.png) | Verified |
| Unknown Username (`400 Bad Request`) | [`lab-04/screenshots/05-login-invalid-username-400.png`](./lab-04/screenshots/05-login-invalid-username-400.png) | Verified |
| Wrong Password (`400 Bad Request`) | [`lab-04/screenshots/06-login-invalid-password-400.png`](./lab-04/screenshots/06-login-invalid-password-400.png) | Verified |
| SQLite `user` Table Hashes (`npm run db`) | [`lab-04/screenshots/07-sqlite-cli-users-table.png`](./lab-04/screenshots/07-sqlite-cli-users-table.png) | Verified |
| JWT.io Token Decoding & Verification | [`lab-04/screenshots/08-jwt-io-token-inspection.png`](./lab-04/screenshots/08-jwt-io-token-inspection.png) | Verified |
| REST Client Suite & Test Runner | [`lab-04/screenshots/09-rest-client-test-suite.png`](./lab-04/screenshots/09-rest-client-test-suite.png) | Verified |
| Clean `server.js` Implementation | [`lab-04/screenshots/10-server-implementation.png`](./lab-04/screenshots/10-server-implementation.png) | Verified |

---

## 13. Security and Git Best Practices

1. **SQL Injection Defense:** All SQL database queries across `lab-02`, `lab-03`, and `lab-04` use parameterized statements with `?` placeholders (`db.get(query, [username])`, `db.run(query, [params])`). Raw string concatenation of user input is strictly prohibited.
2. **Cryptographic Password Storage:** Passwords in `lab-04` are hashed using `bcrypt.hash(password, 10)` and verified via `bcrypt.compare`. Plain-text passwords are never stored, logged, or placed inside JWT payloads.
3. **Environment Variable Protection:** Both the root `.gitignore` and individual lab `.gitignore` files exclude `.env`, `.env.local`, and `database/*.db` files.
4. **Dependency Isolation:** `node_modules/` is universally ignored across all directories.

---

## 14. Repository Documentation & Master Guides

For detailed specifications, testing procedures, and evaluation material, refer to the following repository guides:
- [Testing & Verification Guide (TESTING.md)](./TESTING.md) – Detailed REST Client and automated runner verification instructions.
- [Security Policy & Disclosures (SECURITY.md)](./SECURITY.md) – SQL injection defense, bcrypt password hashing, JWT hygiene, and environment safety.
- [Contributing Standards (CONTRIBUTING.md)](./CONTRIBUTING.md) – Git conventions, code styles, and PR workflows.
- [Master Viva Voce Guide (VIVA_GUIDE.md)](./VIVA_GUIDE.md) – Consolidated examination Q&A across Node.js, Express, SQLite, REST, and JWT Authentication.
- [Audit & Forensic Report (AUDIT_REPORT.md)](./AUDIT_REPORT.md) – Comprehensive code inspection log and verification evidence.

---

## 15. Academic Submission & Evaluation Guide

This repository is organized to facilitate transparent faculty review:
- **Code Inspection:** Direct mapping between route specifications in documentation and handlers in each `server.js`.
- **Automated Verification:** `npm test` in `lab-03/` and `lab-04/` plus GitHub Actions CI in `.github/workflows/verify-labs.yml`.
- **Viva Voce Revision:** Dedicated technical viva question-and-answer sections included in every lab README.

---

## 16. Author

- **Student Name:** S.S.M.BHARADWAJ
- **Registration Number:** 252U1R1236
- **Section:** CSE-CORE-2E
- **Faculty:** Mr Yugandhar Gurjalwar
- **Institution:** Aurora Deemed-to-be-University
- **GitHub:** [@bharathwajverse](https://github.com/bharathwajverse)

---

## 17. License

Licensing is currently **unspecified**. This repository contains academic coursework and laboratory exercises for educational and evaluation purposes. All rights are reserved by the author until a formal open-source license is added.

---

## 18. Acknowledgements

- Faculty and instructors of the **Backend Development Fundamentals** course (`Mr Yugandhar Gurjalwar`, Aurora Deemed-to-be-University).
- The open-source communities behind Node.js, Express.js, SQLite, bcrypt, and jsonwebtoken.
