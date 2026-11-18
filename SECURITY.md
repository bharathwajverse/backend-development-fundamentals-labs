# Security Policy

## 1. Supported Scope

This repository maintains academic lab implementations for the **Backend Development Fundamentals** coursework. Security defenses demonstrated herein represent core web application safety fundamentals:

| Component | Protection Mechanism | Status |
| :--- | :--- | :---: |
| **SQL Database Operations** | Parameterized SQL Queries (`?` placeholders) | Active (`lab-02`, `lab-03`, `lab-04`) |
| **Password Storage** | One-way salted bcrypt hashing (`bcrypt.hash(password, 10)`) | Active (`lab-04`) |
| **Stateless Authentication** | Signed HS256 JWT tokens with non-sensitive `{ username }` payload | Active (`lab-04`) |
| **Environment Variables** | Secret exclusion via `.gitignore` (`.env`, `.env.local`, `database/*.db`) | Active (All labs) |
| **Dependencies** | Dependency isolation and lockfiles (`package-lock.json`) | Active (All labs) |
| **CORS Policy** | Origin access control via `cors` middleware | Active (`lab-05`–`lab-10`) |

---

## 2. Defensive Coding Practices

### SQL Injection Prevention
Database operations across `lab-02`, `lab-03`, and `lab-04` interact with SQLite strictly using parameterized prepared statements:
- String interpolation (e.g. `` `SELECT * FROM user WHERE username = '${username}'` ``) is strictly prohibited.
- Parameterized queries with `?` placeholders are enforced across all queries:
  ```javascript
  const selectUserQuery = 'SELECT * FROM user WHERE username = ?;'
  const existingUser = await db.get(selectUserQuery, [username])
  ```

### Password Hashing & JWT Security (`lab-04`)
- Passwords are **never** stored, logged, or returned in plain text.
- Every password is hashed with `bcrypt.hash(password, 10)` ($2^{10} = 1024$ rounds with automatic per-user cryptographic salt) and checked with `bcrypt.compare`.
- JWT payloads contain strictly `{ username }` (never passwords, hashes, or secrets), because JWT payloads are Base64URL-encoded rather than encrypted.

### Environment Variable & Secret Protection
- Never commit `.env` files, API keys, or local user databases (`database/*.db`).
- Each laboratory directory contains a dedicated `.gitignore` excluding `.env`, `node_modules`, and debug log files.

---

## 3. Reporting a Vulnerability

If you discover a security concern or vulnerability in this repository:
1. Please do not open a public issue.
2. Contact the maintainer directly via GitHub profile: [@bharathwajverse](https://github.com/bharathwajverse) (`S.S.M.BHARADWAJ`).
3. Provide a detailed description of the vulnerability, steps to reproduce, and potential remediation.
