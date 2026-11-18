# Backend Development Fundamentals – Documentation & Repository Audit Report

**Audit Date:** November 18, 2026  
**Auditor:** Technical Documentation Engineer & Backend Architect  
**Author / Student:** S.S.M.BHARADWAJ (`252U1R1236`), Section: CSE-CORE-2E  
**Faculty:** Mr Yugandhar Gurjalwar  
**Institution:** Aurora Deemed-to-be-University  
**Repository:** [https://github.com/bharathwajverse/backend-development-fundamentals-labs](https://github.com/bharathwajverse/backend-development-fundamentals-labs)

---

## 1. Executive Summary

A comprehensive forensic audit and documentation overhaul of the **Backend Development Fundamentals** practical laboratory repository was executed across `lab-01` through `lab-10`. Labs 01, 02, 03, and 04 are **fully implemented, verified via live execution, and documented**. Labs 05 through 10 remain cleanly documented as **Starter Scaffolds**.

---

## 2. Inventory of Files

### Root Master Guides & Automation
| File Path | Description |
| :--- | :--- |
| `README.md` | Primary repository documentation with curriculum index, lab status matrix, database schemas, and verified screenshots. |
| `render.yaml` | Official Render Blueprint specification configuring `backend-development-fundamentals-labs-app` (`rootDir: lab-04`). |
| `.github/workflows/verify-labs.yml` | GitHub Actions CI workflow executing automated integration suites for `lab-03` and `lab-04`. |
| `AUDIT_REPORT.md` | Complete documentation audit, code verification log, and inconsistency disclosure report. |
| `CONTRIBUTING.md` | Comprehensive contribution standards, branch conventions, and PR testing checklist. |
| `SECURITY.md` | Security policy detailing SQL injection prevention, bcrypt password hashing, JWT claim hygiene, and secret isolation. |
| `TESTING.md` | Declarative REST Client and automated `npm test` verification procedures across Labs 01–10. |
| `VIVA_GUIDE.md` | Master Viva Voce preparation guide covering Node.js, Express, SQLite, REST, bcrypt, and JWT Authentication. |

### Completed Lab Modules
| Lab | Nature of Implementation & Verification |
| :--- | :--- |
| `lab-01/` | Express server (`GET /`, `GET /about`, `GET /time`, 404 fallback), 4 verified screenshots, student identity `S.S.M.BHARADWAJ`. |
| `lab-02/` | SQLite `bookStore.db` (`book` table, 10 seeded records), full CRUD routes with parameterized `?` SQL queries. |
| `lab-03/` | REST API with query filtering (`search_q`, `sort`, `order`, `limit`, `offset`, `min_price`, `max_price`), strict payload validation, 16 verified screenshots, 4-bug debugging exercise, Postman collection (21 tests), and automated `test-runner.js`. |
| `lab-04/` | Registration, Login & JWT Authentication (`GET /`, `GET/POST /register`, `GET/POST /login`, 404 handler), SQLite `user` table with `UNIQUE` username, `bcrypt` 10-round password hashing, `jsonwebtoken` HS256 token issuance (`{ username }` only), 10 verified screenshots, `.node-version` (`20.18.0`), Render config, and 9-assertion automated `test-runner.js`. |
| `lab-05/` – `lab-10/` | Express 5 baseline scaffolds (`GET /`, `GET /api/health`, 404 handler), default port `5002`. |

---

## 3. Screenshots Audit

- **Lab 01:** 4/4 screenshots verified (`home.png`, `about.png`, `time.png`, `404.png`).
- **Lab 02:** Screenshots pending capture (no broken links in README).
- **Lab 03:** 16/16 screenshots verified (`01-get-all-books-default.png` through `16-debug-missing-await.png`).
- **Lab 04:** 10/10 screenshots verified (`01-server-start-nodemon.png` through `10-server-implementation.png`) displaying exclusively `S.S.M.BHARADWAJ`, `252U1R1236`, `bharathwajverse`, `PS G:\Projects\backend_lab-main\lab-04>`, and genuine bcrypt hashes & JWT tokens.
- **Labs 05–10:** Pending future coursework progression.

---

## 4. Verification Results

| Test Target | Verification Type | Result | Notes |
| :--- | :--- | :---: | :--- |
| `lab-01` HTTP Routes | Live Node.js execution | **PASS** | Verified `GET /`, `GET /about`, `GET /time`, `GET /contact` (404). |
| `lab-02` SQLite & CRUD | Live Node.js + SQLite PRAGMA | **PASS** | Verified `book` schema, 10 seed rows, full CRUD endpoints. |
| `lab-03` Query & Validation | Automated `npm test` + CI | **PASS** | Verified search, sort, pagination, range filters, validation, and 404. |
| `lab-04` Auth, bcrypt & JWT | Automated `npm test` (9/9) + CI | **PASS** | Verified `GET /`, `POST /register` (201/400), `POST /login` (200 JWT/400), 404, SQLite `$2b$10$` hash only, and JWT `{ username }` payload without password. |
| Name & Attribution Audit | Full-repo case-insensitive grep | **PASS** | Zero references to external students; 100% attributed to `S.S.M.BHARADWAJ` (`252U1R1236`, `bharathwajverse`). |
