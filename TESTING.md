# API Testing Guide & Verification Procedures

This repository utilizes declarative `.http` request files designed for execution via the **VS Code REST Client** extension by Huachao Mao, paired with automated Node.js integration test runners (`test-runner.js`) executed in GitHub Actions CI.

---

## 1. Prerequisites & Environment Setup

1. **Install VS Code Extension:**
   - Search for **REST Client** (`humao.rest-client`) in the VS Code Marketplace and install it.
2. **Terminal Prerequisites:**
   - Ensure Node.js (v20.x LTS recommended) and npm are available in your system path.

---

## 2. Testing Workflow

### Step 1: Start the Target Server
Navigate to the desired laboratory folder and launch the development server:
```powershell
cd lab-04
npm install
npm run dev
```

### Step 2: Execute Automated Tests (`lab-03` & `lab-04`)
```powershell
npm test
```

### Step 3: Execute Declarative REST Client Requests
Open the corresponding `.http` file (`lab-01/lab-01.http` through `lab-10/lab-10.http`) and click **`Send Request`** above any HTTP block to inspect response headers, HTTP status codes, and payloads.

---

## 3. Lab-Specific Testing Reference

### Lab 01 (`lab-01.http`)
- Server URL: `http://localhost:3000`
- Tests: `GET /` (200), `GET /about` (200), `GET /time` (200), `GET /contact` (404)

### Lab 02 (`lab-02.http`)
- Server URL: `http://localhost:3000`
- Tests: `GET /books/` (200), `GET /books/1/` (200), `GET /books/999/` (404), `POST /books/` (201), `PUT /books/1/` (200), `DELETE /books/10/` (200)

### Lab 03 (`lab-03.http` & `npm test`)
- Server URL: `http://localhost:3000`
- Tests: Query filtering (`search_q`, `sort`, `order`, `limit`, `offset`, `min_price`, `max_price`), validation errors (400), missing IDs (404), CRUD mutations.

### Lab 04 (`lab-04.http` & `npm test`)
- Server URL: `http://localhost:3000` (or live Render URL `https://backend-development-fundamentals-labs-app.onrender.com`)
- Tests:
  - `GET /` -> `200 OK` (`S.S.M.BHARADWAJ`, `252U1R1236`, `CSE-CORE-2E`, `Online`)
  - `POST /register` (valid new user) -> `201 Created`, body: `User registered successfully`
  - `POST /register` (duplicate username) -> `400 Bad Request`, body: `Username already exists`
  - `POST /register` (missing fields) -> `400 Bad Request`, body: `Username, name and password are required`
  - `POST /login` (valid credentials) -> `200 OK`, body: `{ "jwt_token": "<HS256 token>" }`
  - `POST /login` (unknown username) -> `400 Bad Request`, body: `Invalid username`
  - `POST /login` (wrong password) -> `400 Bad Request`, body: `Invalid password`
  - `GET /notfound` -> `404 Not Found`, body: `Page not found`
  - `npm run db` -> Confirms SQLite `user` table stores 60-character `$2b$10$` bcrypt hashes only.

### Labs 05 to 10 (`lab-XX.http`)
- Default Server URL: `http://localhost:5002` (configurable via `.env` to `3000`)
- Tests: `GET /` (200), `GET /api/health` (200), `GET /unknown-route` (404)
