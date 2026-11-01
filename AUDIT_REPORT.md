# Backend Development Fundamentals – Documentation & Repository Audit Report

**Audit Date:** November 1, 2026  
**Auditor:** Technical Documentation Engineer & Backend Architect  
**Author / Student:** S.S.M.Bharadwaj (`252U1R1231`), Section: CSE-CORE-2E  
**Repository:** [https://github.com/bharathwajverse/backend-development-fundamentals-labs.git](https://github.com/bharathwajverse/backend-development-fundamentals-labs.git)

---

## 1. Executive Summary

A comprehensive forensic audit and documentation overhaul of the **Backend Development Fundamentals** practical laboratory repository was executed. The analysis verified all ten laboratory directories (`lab-01` through `lab-10`), their runtime source code (`server.js`), dependency configurations (`package.json`, `package-lock.json`), database binaries (`bookStore.db`), HTTP test definitions (`.http`), and screenshot assets.

All documentation was aligned with the ground truth of the codebase. Placeholder/template claims (such as non-existent endpoints and mismatched server ports) were corrected. Completed implementations were clearly distinguished from starter scaffolds.

---

## 2. Inventory of Files

### Files Created
| File Path | Description |
| :--- | :--- |
| `README.md` | Primary repository documentation with full curriculum index, lab comparison matrix, architecture guide, and security best practices. |
| `AUDIT_REPORT.md` | Complete documentation audit, code verification log, and inconsistency disclosure report. |

### Files Updated
| File Path | Nature of Changes |
| :--- | :--- |
| `lab-01/README.md` | Comprehensive rewrite: updated student credentials to S.S.M.Bharadwaj, verified route table (`/`, `/about`, `/time`, 404), documented actual screenshots, and added technical viva questions. |
| `lab-01/server.js` | Updated student name in `/about` route from previous name to `S.S.M.Bharadwaj` in accordance with user requirements. |
| `lab-02/README.md` | Strict Lab 2 assignment rewrite: documented verified `book` schema (`id`, `title`, `author`, `price`, `pages`), 10 initial records, CRUD endpoint table, SQL injection prevention mechanics, deployment status, and viva guide. |
| `lab-03/README.md` | Overhauled scaffold documentation: corrected port to 5002, removed false claims about `/about` and `/time`, and documented actual endpoints (`/`, `/api/health`, 404). |
| `lab-04/README.md` | Overhauled scaffold documentation: aligned with actual Express 5 middleware code and default port 5002. |
| `lab-05/README.md` | Overhauled scaffold documentation: documented REST routing baseline and corrected endpoint table. |
| `lab-06/README.md` | Overhauled scaffold documentation: documented validation & error handling baseline. |
| `lab-07/README.md` | Overhauled scaffold documentation: documented security and authentication baseline. |
| `lab-08/README.md` | Overhauled scaffold documentation: documented database connectivity baseline. |
| `lab-09/README.md` | Overhauled scaffold documentation: documented API integration and query parameter baseline. |
| `lab-10/README.md` | Overhauled scaffold documentation: documented production readiness, health probes, and process lifecycle. |

---

## 3. Discrepancies & Implementation Inconsistencies Discovered

During forensic analysis of the source code, several implementation anomalies were uncovered and logged:

### 1. Dual `app.listen(3000)` Call in `lab-02/server.js`
- **Location:** `lab-02/server.js` lines 22–24 and line 126.
- **Detail:** Line 22 starts the listener inside `initializeDBAndServer()` after SQLite opens. However, line 126 invokes `app.listen(3000)` synchronously at the root of the file.
- **Impact:** Calling `app.listen(3000)` synchronously creates a race condition where incoming requests may hit route handlers before `db` is initialized (throwing unhandled null reference exceptions). Additionally, listening twice to the same port can throw an unhandled `EADDRINUSE` error depending on event loop scheduling.
- **Remediation Recommendation:** Delete line 126 (`app.listen(3000);`) so the server listens exclusively inside the resolved `initializeDBAndServer` callback.

### 2. Typo in `lab-01/server.js` Response Object Key
- **Location:** `lab-01/server.js` line 10.
- **Detail:** The JSON object returned by `/about` contains `setion: "CSE CORE 2E"` instead of `section: "CSE CORE 2E"`.
- **Impact:** API consumers expecting standard `section` keys will encounter `undefined`.
- **Documentation Action:** Transparently documented in `lab-01/README.md`.

### 3. Port Mismatch in Labs 03–10 (`server.js` vs `.http` files)
- **Location:** `lab-03` through `lab-10`.
- **Detail:** In `server.js`, port binding is configured as `const PORT = process.env.PORT || 5002;`. However, in `lab-XX.http`, the base URL is set to `@baseUrl = http://localhost:3000`.
- **Impact:** Running `.http` requests without a `.env` file setting `PORT=3000` causes connection refused (`ECONNREFUSED`) errors.
- **Documentation Action:** Explicitly highlighted in all lab READMEs with guidance on configuring `.env` or adjusting `@baseUrl`.

### 4. Phantom Endpoints in Previous Lab 03–10 Boilerplates
- **Location:** `lab-03/README.md` through `lab-10/README.md` (prior versions).
- **Detail:** The previous boilerplate claimed that `/about` and `/time` were active endpoints returning student metadata and timestamps. In reality, `server.js` in labs 03–10 only defines `/` and `/api/health`.
- **Documentation Action:** Corrected all endpoint tables to reflect actual code; classified labs 03–10 as **Starter Scaffolds**.

---

## 4. Missing Information & Missing Screenshots Audit

### Screenshots Audit
- **Lab 01:**
  - `home.png` – **Present & Verified** (`lab-01/screenshots/home.png`)
  - `about.png` – **Present & Verified** (`lab-01/screenshots/about.png`)
  - `time.png` – **Present & Verified** (`lab-01/screenshots/time.png`)
  - `404.png` – **Present & Verified** (`lab-01/screenshots/404.png`)
- **Lab 02:**
  - `get-all-books.png` – **Missing** (directory `lab-02/screenshots/` does not exist in repo)
  - `get-book-by-id.png` – **Missing**
  - `post-book.png` – **Missing**
  - `put-book.png` – **Missing**
  - `delete-book.png` – **Missing**
  - `database.png` – **Missing**
  *(Documentation Note: In previous README version, broken Markdown image links were pointing to non-existent files. These broken links were removed and replaced with an explicit pending notice).*
- **Labs 03 through 10:**
  - Screenshots are **not present**. Documented as pending subsequent coursework.

### Deployment URLs
- **All Labs:** Currently hosted and executed locally. No live deployment links exist. Placeholders and architectural explanations have been documented without fabricating external hosting claims.

---

## 5. Verification Results

| Test Target | Verification Type | Result | Notes |
| :--- | :--- | :---: | :--- |
| `lab-01` HTTP Routes | Deep Verification (Real execution via Node.js + HTTP client) | **PASS** | Verified `GET /` (200), `GET /about` (200), `GET /time` (200), `GET /contact` (404). |
| `lab-02` SQLite DB Schema | Deep Verification (SQLite PRAGMA table_info inspection) | **PASS** | Verified `book` table with columns `id`, `title`, `author`, `price`, `pages`. |
| `lab-02` Seed Records | Deep Verification (SQL count & data dump) | **PASS** | 10 verified records confirmed in `database/bookStore.db`. |
| `lab-02` CRUD API | Deep Verification (Real execution via Node.js + HTTP client) | **PASS** | Verified `GET /books/` (200), `GET /books/1/` (200), `GET /books/999/` (404), `POST /books/` (201), `PUT /books/11/` (200), `DELETE /books/11/` (200). |
| Markdown Links | Deep Verification (Relative path link checking) | **PASS** | All relative file and image paths verified against file system. |
| Security Check | Git & Secrets Inspection | **PASS** | No `.env` secrets or `node_modules` committed. |
