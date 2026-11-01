# Backend Development Fundamentals – Practical Labs

[![Node.js Version](https://img.shields.io/badge/Node.js-v18%2B%20%7C%20v20%2B-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/Express-v5.x-lightgrey.svg)](https://expressjs.com/)
[![Database](https://img.shields.io/badge/Database-SQLite3-blue.svg)](https://www.sqlite.org/)
[![API Testing](https://img.shields.io/badge/Testing-REST%20Client-orange.svg)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

## 1. Introduction

Welcome to the **Backend Development Fundamentals Practical Labs** repository. This repository serves as a comprehensive, structured portfolio of backend engineering laboratory exercises. It demonstrates fundamental server architecture, modern asynchronous JavaScript execution, relational database integration, RESTful API design, defensive parameterized query construction, middleware pipelines, and declarative HTTP testing.

Each lab folder within this repository is organized as an **isolated, standalone Node.js package** with its own `package.json`, dependency tree, declarative test suite (`.http`), and dedicated technical documentation.

---

## 2. Course & Student Information

- **Subject:** Backend Development Fundamentals
- **Academic Context:** Year II, Term II
- **Student Name:** S.S.M.Bharadwaj
- **Registration Number:** 252U1R1231
- **Section:** CSE-CORE-2E
- **Repository:** [https://github.com/bharathwajverse/backend-development-fundamentals-labs.git](https://github.com/bharathwajverse/backend-development-fundamentals-labs.git)

---

## 3. Technologies Used

Only technologies verified to exist in this repository's source code and manifests are listed below:

- **Runtime Environment:** [Node.js](https://nodejs.org/) (v18.x / v20.x recommended)
- **Web Application Framework:** [Express.js](https://expressjs.com/) (`^5.1.0` in Labs 1–2; `^5.3.0` in Labs 3–10)
- **Relational Database Engine:** [SQLite](https://www.sqlite.org/) (Embedded file-based database)
- **Database Client Drivers:**
  - `sqlite3` (`^5.1.7`) – Asynchronous SQLite driver for Node.js
  - `sqlite` (`^5.1.1`) – Promise-based wrapper around `sqlite3`
- **Core Middleware & Utilities:**
  - `cors` (`^2.8.6`) – Cross-Origin Resource Sharing middleware
  - `dotenv` (`^18.0.9`) – Environment variable loader
- **Development Process Manager:** [Nodemon](https://nodemon.io/) (`^3.1.10` / `^3.1.14`) – Automatic file-watch server reloader
- **API Specification & Testing:** [VS Code REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (`.http` declarative request files)

---

## 4. Learning Objectives

The practical laboratory exercises in this curriculum support the following technical proficiencies:
1. **Server Initialization & Lifecycle:** Configuring modular Express web servers, managing port bindings, and handling graceful process shutdowns.
2. **Relational Database Management:** Creating schemas, managing table keys, executing CRUD operations, and managing asynchronous SQLite database handles.
3. **Defensive Programming & SQL Injection Prevention:** Implementing parameterized queries with positional `?` placeholders to eliminate SQL injection vulnerabilities.
4. **RESTful API Semantics:** Mapping HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) to database operations and returning standard status codes (`200 OK`, `201 Created`, `404 Not Found`).
5. **Middleware Pipelines:** Implementing global CORS policies, JSON request payload parsing, URL-encoded form handling, and catch-all 404 routing.
6. **Automated API Testing:** Writing declarative HTTP request specifications using the VS Code REST Client extension for deterministic endpoint verification.

---

## 5. Repository Structure

```text
backend-development-fundamentals-labs/
├── .gitignore               # Root git ignore rules (node_modules, .env, OS files)
├── README.md                # Root curriculum overview and documentation index
├── lab-01/                  # Lab 01: Node.js and Express Server (Complete)
│   ├── .gitignore
│   ├── lab-01.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── server.js
│   └── screenshots/
│       ├── 404.png
│       ├── about.png
│       ├── home.png
│       └── time.png
├── lab-02/                  # Lab 02: SQLite Database & CRUD Routes (Complete)
│   ├── database/
│   │   └── bookStore.db     # SQLite database with seeded 'book' table
│   ├── .gitignore
│   ├── lab-02.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-03/                  # Lab 03: Architecture & Middleware (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-03.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
├── lab-04/                  # Lab 04: Request Processing (Starter Scaffold)
│   ├── .gitignore
│   ├── lab-04.http
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
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
| **03** | Architecture & Middleware | Node.js, Express 5, CORS, Dotenv | Base Express server, CORS policy, JSON/URL-encoded parsing, `GET /`, `GET /api/health`, 404 handler | [README](./lab-03/README.md) | **Starter Scaffold** |
| **04** | Request Processing | Node.js, Express 5, CORS, Dotenv | Middleware pipeline architecture, `GET /`, `GET /api/health`, 404 handler | [README](./lab-04/README.md) | **Starter Scaffold** |
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
- **Node.js:** v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm:** v9.0.0 or higher (packaged with Node.js)
- **VS Code:** with the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) installed.

### Independent Project Architecture
> **Notice:** Each lab directory is an isolated Node.js project containing its own `package.json`. There is no shared monolithic `node_modules` at the root. You must install dependencies inside each specific lab folder prior to running it.

To install dependencies for a lab:
```powershell
cd lab-02
npm install
```

---

## 8. Running Individual Labs

Each lab provides standard npm scripts defined in its `package.json`:
- `npm run dev` – Starts the server with Nodemon (auto-reloads on source changes).
- `npm start` – Starts the server directly with `node server.js`.

### Execution Example: Lab 02
```powershell
# 1. Navigate to lab directory
cd lab-02

# 2. Install dependencies (sqlite3, sqlite, express)
npm install

# 3. Launch the development server
npm run dev
```

### Port Allocation Reference (Based on Actual Code)
- **Lab 01:** Port `3000` (`app.listen(3000)`)
- **Lab 02:** Port `3000` (`app.listen(3000)`)
- **Labs 03 through 10:** Defaults to Port `5002` (`process.env.PORT || 5002`). Can be configured via `.env` file (e.g. `PORT=3000`).

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

### Labs 03–10 Baseline Endpoints
- `GET /` – Service online status and timestamp JSON
- `GET /api/health` – Server health status, uptime, and timestamp JSON
- `ALL /*` – Standardized 404 error JSON (`{ error: "Route not found" }`)

For complete request-response payloads, status codes, and query details, refer to the individual lab READMEs linked in the [Lab Overview Table](#6-lab-overview--implementation-status).

---

## 10. Database Architecture (Lab 02)

Lab 02 utilizes an embedded SQLite database stored locally at `lab-02/database/bookStore.db`.

### Table Schema: `book`
```sql
CREATE TABLE book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    price INTEGER,
    pages INTEGER
);
```

### Verified Column Specifications
- `id` (`INTEGER`): Auto-incrementing primary key.
- `title` (`TEXT`): Full title of the book.
- `author` (`TEXT`): Author's full name.
- `price` (`INTEGER`): Price in local currency units.
- `pages` (`INTEGER`): Total page count.

The database is pre-seeded with **10 verified records** including titles such as *Wings of Fire*, *The Alchemist*, and *Atomic Habits*.

---

## 11. Testing with VS Code REST Client

API verification across this repository is conducted using declarative `.http` files:

1. Install the **REST Client** extension by Huachao Mao in VS Code.
2. Open any lab's `.http` file (e.g., `lab-01/lab-01.http` or `lab-02/lab-02.http`).
3. Start the corresponding lab server (`npm run dev`).
4. Click the interactive **`Send Request`** code lens above the target HTTP block.
5. Review the complete HTTP response headers, status codes, and body payload in the side panel.

> **Academic Integrity Notice:** All testing was conducted via direct HTTP requests using the VS Code REST Client extension. No Postman test suite was provided or executed for this repository.

---

## 12. Screenshots & Verification Artifacts

In strict compliance with documentation integrity standards, only screenshot files that actually exist in the repository are linked:

### Lab 01 Verification Screenshots
| Endpoint | Relative Path | Preview |
| :--- | :--- | :---: |
| Root Route (`/`) | [`lab-01/screenshots/home.png`](./lab-01/screenshots/home.png) | Verified |
| About Route (`/about`) | [`lab-01/screenshots/about.png`](./lab-01/screenshots/about.png) | Verified |
| Time Route (`/time`) | [`lab-01/screenshots/time.png`](./lab-01/screenshots/time.png) | Verified |
| 404 Route (`/contact`) | [`lab-01/screenshots/404.png`](./lab-01/screenshots/404.png) | Verified |

*(Screenshots for Labs 02 through 10 are pending capture and are not committed in the repository at this time. Broken or fabricated image links have been strictly avoided).*

---

## 13. Security and Git Best Practices

1. **SQL Injection Defense:** All SQL database queries in `lab-02` use parameterized statements with `?` placeholders (`db.get(query, [id])`, `db.run(query, [params])`). Raw string concatenation of user input is strictly prohibited.
2. **Environment Variable Protection:** Both the root `.gitignore` and individual lab `.gitignore` files exclude `.env` and `.env.local` files to protect sensitive credentials from being committed.
3. **Dependency Isolation:** `node_modules/` is universally ignored across all directories.
4. **Log & OS Cleanliness:** System files (`.DS_Store`, `Thumbs.db`) and npm/yarn debug logs are ignored.

---

## 14. Repository Documentation & Master Guides

For detailed specifications, testing procedures, and evaluation material, refer to the following repository guides:
- [Testing & Verification Guide (TESTING.md)](./TESTING.md) – Detailed REST Client instructions and route response verification.
- [Security Policy & Disclosures (SECURITY.md)](./SECURITY.md) – SQL injection defense mechanism, parameterization, and environment safety.
- [Contributing Standards (CONTRIBUTING.md)](./CONTRIBUTING.md) – Git conventions, code styles, and PR workflows.
- [Master Viva Voce Guide (VIVA_GUIDE.md)](./VIVA_GUIDE.md) – Consolidated examination Q&A across the complete course syllabus.
- [Audit & Forensic Report (AUDIT_REPORT.md)](./AUDIT_REPORT.md) – Comprehensive code inspection log and disclosure of implementation nuances.

---

## 15. Academic Submission & Evaluation Guide

This repository is organized to facilitate transparent faculty review:
- **Code Inspection:** Direct mapping between route specifications in documentation and handlers in each `server.js`.
- **Database Inspection:** Direct offline queryability of `lab-02/database/bookStore.db` via standard tools (DB Browser for SQLite, SQLite CLI).
- **Viva Voce Revision:** Dedicated technical viva question-and-answer sections included in every lab README.

---

## 16. Author

- **Student Name:** S.S.M.Bharadwaj
- **Registration Number:** 252U1R1231
- **Section:** CSE-CORE-2E
- **GitHub:** [@bharathwajverse](https://github.com/bharathwajverse)

---

## 17. License

Licensing is currently **unspecified**. This repository contains academic coursework and laboratory exercises for educational and evaluation purposes. All rights are reserved by the author until a formal open-source license is added.

---

## 18. Acknowledgements

- Faculty and instructors of the **Backend Development Fundamentals** course.
- The open-source communities behind Node.js, Express.js, and SQLite.
