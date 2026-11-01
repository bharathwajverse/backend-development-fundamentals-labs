# Lab 2: SQLite Database and CRUD Routes

## Lab Details

- **Lab Number:** 02
- **Subject:** Backend Development Fundamentals
- **Academic Context:** Year II, Term II
- **Module:** SQLite and Relational Database Operations

## Student Details

- **Name:** S.S.M.Bharadwaj
- **Registration Number:** 252U1R1231
- **Section:** CSE-CORE-2E

## Deployment Status

- **Live URL:** Not Deployed (Locally Hosted)
- **Host:** `http://localhost:3000`
- **Reason:** [Local Development Environment - Course requirements specify local execution and offline relational database persistence using an embedded SQLite database engine; cloud database provisioning and remote PaaS deployment are outside the scope of this laboratory assignment.]

---

## 1. Objective

The primary objective of this laboratory exercise is to connect an Express.js backend server to an embedded SQLite database using modern asynchronous JavaScript (`async`/`await`) and expose a full suite of RESTful CRUD (Create, Read, Update, Delete) endpoints over HTTP. The lab emphasizes clean SQL query parameterization to eliminate SQL injection vulnerabilities, strict HTTP status code semantics, and structured JSON communication.

---

## 2. Technologies Used

- **Runtime Environment:** Node.js (v18.x / v20.x)
- **Web Application Framework:** Express.js (`^5.1.0`)
- **Database Engine:** SQLite (Embedded relational database)
- **Database Drivers & Wrappers:**
  - `sqlite3` (`^5.1.7`) – Asynchronous SQLite client driver
  - `sqlite` (`^5.1.1`) – Promise-based wrapper around sqlite3
- **Language:** JavaScript (ES6+ with `async`/`await`)
- **Development Utility:** Nodemon (`^3.1.10`)
- **API Testing Suite:** VS Code REST Client (`lab-02.http`)

---

## 3. Project Structure

```text
lab-02/
├── database/
│   └── bookStore.db     # Pre-populated binary SQLite database file
├── .gitignore           # Excludes node_modules, .env, and log files
├── lab-02.http          # Declarative CRUD test requests for REST Client
├── package.json         # Project metadata, scripts, and runtime dependencies
├── package-lock.json    # Exact dependency tree lockfile
├── README.md            # Lab 2 documentation and viva guide
└── server.js            # Express server with SQLite connection and routes
```

---

## 4. Database Design & Schema

The application uses an embedded SQLite database located at `database/bookStore.db`. The primary table is `book`, designed with the following verified schema:

### Table Name: `book`

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `INTEGER` | `PRIMARY KEY AUTOINCREMENT` | Unique identifier automatically generated for each book record |
| `title` | `TEXT` | None | Title of the book |
| `author` | `TEXT` | None | Name of the author |
| `price` | `INTEGER` | None | Retail price of the book |
| `pages` | `INTEGER` | None | Total page count |

### Verified DDL (Data Definition Language)

```sql
CREATE TABLE book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    price INTEGER,
    pages INTEGER
);
```

---

## 5. Sample Data

The repository's SQLite database (`database/bookStore.db`) contains an initial seed dataset of **10 records**:

| ID | Title | Author | Price | Pages |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Wings of Fire | A.P.J. Abdul Kalam | 250 | 180 |
| 2 | The Alchemist | Paulo Coelho | 300 | 200 |
| 3 | Atomic Habits | James Clear | 450 | 320 |
| 4 | Rich Dad Poor Dad | Robert Kiyosaki | 350 | 240 |
| 5 | Ikigai | Hector Garcia | 280 | 190 |
| 6 | Think and Grow Rich | Napoleon Hill | 320 | 250 |
| 7 | Deep Work | Cal Newport | 400 | 280 |
| 8 | The Power of Habit | Charles Duhigg | 380 | 300 |
| 9 | Zero to One | Peter Thiel | 290 | 210 |
| 10 | The Psychology of Money | Morgan Housel | 350 | 250 |

---

## 6. Installation and Setup

### Prerequisites
- Node.js (v18.x or later)
- npm (v9.x or later)
- Windows PowerShell or command terminal

### Installation Steps
From the repository root or the `lab-02` directory:

```powershell
cd lab-02
npm install
```

---

## 7. Database Setup & Initialization

> **Important Note:** The pre-populated SQLite database is already committed in the repository at `database/bookStore.db`. You do **not** need to recreate or reseed the database file to execute the application.

If you ever need to recreate or seed a fresh database from scratch, use the following commands:

```powershell
# Create database directory if missing
mkdir -p database

# Open/create SQLite database via CLI (if sqlite3 CLI is installed)
sqlite3 database/bookStore.db
```

Seed SQL:
```sql
CREATE TABLE IF NOT EXISTS book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    price INTEGER,
    pages INTEGER
);

INSERT INTO book (title, author, price, pages) VALUES
('Wings of Fire', 'A.P.J. Abdul Kalam', 250, 180),
('The Alchemist', 'Paulo Coelho', 300, 200),
('Atomic Habits', 'James Clear', 450, 320),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 350, 240),
('Ikigai', 'Hector Garcia', 280, 190),
('Think and Grow Rich', 'Napoleon Hill', 320, 250),
('Deep Work', 'Cal Newport', 400, 280),
('The Power of Habit', 'Charles Duhigg', 380, 300),
('Zero to One', 'Peter Thiel', 290, 210),
('The Psychology of Money', 'Morgan Housel', 350, 250);
```

---

## 8. Running the Server

### Development Mode (Recommended)
Automatically restarts server upon saving file changes:

```powershell
npm run dev
```

### Standard Execution
```powershell
npm start
```

Console Output:
```text
Server Running at http://localhost:3000/
```

---

## 9. API Specifications & Endpoints

| HTTP Method | Endpoint | Description | Status Codes |
| :--- | :--- | :--- | :--- |
| **GET** | `/books/` | Retrieves array of all book records | `200 OK` |
| **GET** | `/books/:bookId/` | Retrieves a single book by primary key ID | `200 OK`, `404 Not Found` |
| **POST** | `/books/` | Inserts a new book record | `201 Created` |
| **PUT** | `/books/:bookId/` | Updates an existing book record by ID | `200 OK`, `404 Not Found` |
| **DELETE** | `/books/:bookId/` | Deletes a book record by ID | `200 OK`, `404 Not Found` |

---

## 10. Request and Response Examples

### 1. GET `/books/` (Retrieve All Books)
- **Request:**
  ```http
  GET http://localhost:3000/books/
  ```
- **Response Status:** `200 OK`
- **Response Payload:**
  ```json
  [
    {
      "id": 1,
      "title": "Wings of Fire",
      "author": "A.P.J. Abdul Kalam",
      "price": 250,
      "pages": 180
    },
    {
      "id": 2,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 300,
      "pages": 200
    }
  ]
  ```

### 2. GET `/books/:bookId/` (Retrieve Single Book)
- **Request:**
  ```http
  GET http://localhost:3000/books/1/
  ```
- **Response Status:** `200 OK`
- **Response Payload:**
  ```json
  {
    "id": 1,
    "title": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam",
    "price": 250,
    "pages": 180
  }
  ```
- **Non-Existent ID Request:** `GET http://localhost:3000/books/999/`
- **Response Status:** `404 Not Found`
- **Response Body:** `Book Not Found`

### 3. POST `/books/` (Add New Book)
- **Request:**
  ```http
  POST http://localhost:3000/books/
  Content-Type: application/json

  {
    "title": "JavaScript Basics",
    "author": "John Smith",
    "price": 400,
    "pages": 300
  }
  ```
- **Response Status:** `201 Created`
- **Response Payload:**
  ```json
  {
    "message": "Book Added Successfully",
    "bookId": 11
  }
  ```

### 4. PUT `/books/:bookId/` (Update Existing Book)
- **Request:**
  ```http
  PUT http://localhost:3000/books/1/
  Content-Type: application/json

  {
    "title": "Updated Wings of Fire",
    "author": "A.P.J. Abdul Kalam",
    "price": 300,
    "pages": 200
  }
  ```
- **Response Status:** `200 OK`
- **Response Body:** `Book Updated Successfully`
- **Non-Existent ID Response:** `404 Not Found` (`Book Not Found`)

### 5. DELETE `/books/:bookId/` (Delete Book)
- **Request:**
  ```http
  DELETE http://localhost:3000/books/10/
  ```
- **Response Status:** `200 OK`
- **Response Body:** `Book Deleted Successfully`
- **Non-Existent ID Response:** `404 Not Found` (`Book Not Found`)

---

## 11. SQL Injection Prevention & Parameterized Queries

### Vulnerability Mechanism
SQL injection occurs when unsanitized client inputs are directly concatenated or interpolated into raw SQL command strings:

```javascript
// DANGEROUS - VULNERABLE TO SQL INJECTION
const query = `SELECT * FROM book WHERE id = ${bookId};`;
```
If an attacker supplies `' OR 1=1 --` as `bookId`, the resulting query executes as:
```sql
SELECT * FROM book WHERE id = '' OR 1=1 --;
```
This bypasses access controls, potentially exposes sensitive tables, or permits destructive statements (`DROP TABLE`).

### Implemented Defense in Lab 02
In this lab, all user inputs are passed using **parameterized queries with `?` placeholders**:

```javascript
// SECURE - PARAMETERIZED QUERY
const getBookQuery = `
  SELECT * FROM book
  WHERE id = ?;
`;
const book = await db.get(getBookQuery, [bookId]);
```

#### How Placeholders Protect the Database:
1. **Compilation Separation:** The SQL query structure is sent to the SQLite query engine and parsed/compiled *before* binding user data.
2. **Type Literal Enforcement:** The SQLite engine treats values passed in the parameter array strictly as literal values (data literals), never as executable SQL tokens.
3. **Automatic Escaping:** Even if the input contains SQL control characters (e.g., `'`, `;`, `--`), the engine treats them as literal string content, completely neutralizing injection vectors.

---

## 12. Verification & Screenshot Audit

### Status of Screenshots:
The following screenshot verification items are required by the laboratory specification:
- `1. GET all books`
- `2. GET book by ID`
- `3. POST add book`
- `4. PUT update book`
- `5. DELETE book`
- `6. SQLite database view`

> **Documentation Audit Note:** The physical image assets are currently **pending capture / not committed** inside the `lab-02/screenshots/` directory. In accordance with strict documentation integrity guidelines, broken image links are not rendered. Once screenshots are captured using VS Code REST Client and a SQLite viewer (e.g., DB Browser for SQLite), save the PNG files into `lab-02/screenshots/` using the naming convention below:
> - `lab-02/screenshots/get-all-books.png`
> - `lab-02/screenshots/get-book-by-id.png`
> - `lab-02/screenshots/post-book.png`
> - `lab-02/screenshots/put-book.png`
> - `lab-02/screenshots/delete-book.png`
> - `lab-02/screenshots/database.png`

---

## 13. Testing with VS Code REST Client

API testing is conducted via [`lab-02.http`](./lab-02.http):
1. Launch the server:
   ```powershell
   npm run dev
   ```
2. Open `lab-02/lab-02.http` in VS Code.
3. Click **Send Request** above any of the 5 requests.
4. Verify returned HTTP status codes:
   - `200` for successful GET, PUT, and DELETE operations.
   - `201` for successful POST creation with generated `bookId`.
   - `404` when targeting non-existent IDs.

*(Note: In accordance with academic honesty, only REST Client tests are documented; no Postman collection was provided or claimed).*

---

## 14. Problems Faced and Solutions

### 1. Dual `app.listen(3000)` Invocation in `server.js`
- **Issue:** In `server.js`, line 22 invokes `app.listen(3000)` inside `initializeDBAndServer()`, while line 126 also invokes `app.listen(3000)` at the top level. This creates a race condition where the server may listen before the SQLite connection is established, or crash with `EADDRINUSE`.
- **Solution Identified:** The top-level call at line 126 should be omitted, allowing the server to listen solely inside the resolved `initializeDBAndServer` callback after SQLite successfully opens.

### 2. Primary Key Retrieval on INSERT
- **Issue:** SQLite does not support PostgreSQL-style `RETURNING id` natively in older driver versions without specific handling.
- **Solution:** Utilized `result.lastID` returned by the promise-based `db.run()` method to accurately return `{ message: 'Book Added Successfully', bookId: result.lastID }`.

### 3. Tracking Affected Rows on UPDATE and DELETE
- **Issue:** SQLite queries that update or delete a non-existent ID do not throw an SQL syntax error; they simply affect 0 rows.
- **Solution:** Evaluated `result.changes === 0`. If 0 rows were modified, the route explicitly returns a `404 Not Found` response with the body `'Book Not Found'`.

---

## 15. Viva Voce Preparation

### Q1: Why must database calls in Node.js be awaited with `await`?
> **Answer:** SQLite database operations (reading from disk, executing SQL queries, writing transactions) are I/O-bound asynchronous operations. In Node.js's non-blocking single-threaded event loop, `db.all()`, `db.get()`, and `db.run()` return Promises. Awaiting them pauses route function execution until the database operation completes, preventing race conditions and ensuring data is available before sending the HTTP response.

### Q2: What is SQL Injection and what risk does it pose?
> **Answer:** SQL injection is a web security vulnerability where malicious input alters the structure of a backend SQL statement. It occurs when untrusted user input is directly concatenated into SQL queries. An attacker can manipulate queries to bypass authentication, expose confidential database records, modify or corrupt data, or execute administrative commands.

### Q3: How do placeholders (`?`) prevent SQL injection?
> **Answer:** Placeholders (`?`) instruct the database driver to use parameterized queries. The SQL statement template is compiled separately by the database engine. When parameter values are bound, they are treated strictly as literal data values rather than executable code. Special characters like quotes or semicolons are treated as plain text, eliminating the possibility of query restructuring.

### Q4: When should HTTP `PUT` be used instead of `POST`?
> **Answer:** `POST` is used to create a new resource where the server typically determines the resource's URI and ID (non-idempotent operation). `PUT` is used to replace or update an existing resource at a specific URI (e.g., `/books/:bookId/`). `PUT` is idempotent: executing the identical `PUT` request multiple times results in the same database state.

### Q5: Why is `app.listen()` called inside `initializeDBAndServer()`?
> **Answer:** Connecting to the SQLite database is an asynchronous operation. If `app.listen()` is executed before the database connection resolves, incoming HTTP requests that arrive immediately will attempt to access `db`, which remains `null`. This causes unhandled promise rejections and server crashes. Nesting `app.listen()` inside `initializeDBAndServer()` guarantees the server accepts traffic only after the database connection is fully established.

*(For full course-wide viva preparation, see the [Master Viva Voce Guide](../VIVA_GUIDE.md)).*

---

## 16. Conclusion

Lab 02 successfully demonstrates the integration of an Express.js backend with an embedded SQLite database. All five core CRUD operations were implemented, utilizing parameterized SQL queries for injection security, proper asynchronous error handling, and standard HTTP response status codes.
