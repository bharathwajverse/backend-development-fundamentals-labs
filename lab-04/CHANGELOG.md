# Lab 4: Engineering & Verification Log

**Student:** S.S.M.BHARADWAJ (`252U1R1236`)  
**Section:** CSE-CORE-2E  
**Faculty:** Mr Yugandhar Gurjalwar  
**Repository:** `bharathwajverse/backend-development-fundamentals-labs`  

---

## Atomic Development & Verification Milestones

- **[001] `chore(lab-04)`:** verify Node.js v20.18.0 LTS compatibility for native addons
- **[002] `chore(lab-04)`:** configure npm start and npm run dev lifecycle scripts
- **[003] `chore(lab-04)`:** add npm run db shortcut for inspecting SQLite user records
- **[004] `chore(lab-04)`:** configure npm test script invoking automated test-runner.js
- **[005] `chore(lab-04)`:** validate .gitignore rules for node_modules, .env, logs, and users.db
- **[006] `chore(lab-04)`:** verify .node-version runtime pin matches package.json engines field
- **[007] `chore(lab-04)`:** verify .env.example excludes all production secrets and keys
- **[008] `feat(lab-04)`:** enable express.json() body parsing middleware for JSON auth payloads
- **[009] `feat(lab-04)`:** implement synchronous database directory check via fs.existsSync and fs.mkdirSync
- **[010] `feat(lab-04)`:** resolve portable SQLite path using path.join(__dirname, 'database', 'users.db')
- **[011] `feat(lab-04)`:** configure asynchronous SQLite driver connection using sqlite open() and sqlite3
- **[012] `feat(lab-04)`:** provision user table with INTEGER PRIMARY KEY AUTOINCREMENT id column
- **[013] `feat(lab-04)`:** enforce UNIQUE constraint on user.username column in SQLite schema
- **[014] `feat(lab-04)`:** define TEXT name column in user table for full student display name
- **[015] `feat(lab-04)`:** define TEXT password column storing exclusively 60-char bcrypt hashes
- **[016] `feat(lab-04)`:** configure dynamic port binding via process.env.PORT || 3000 for Render
- **[017] `feat(lab-04)`:** add fail-fast database initialization error handler exiting with code 1
- **[018] `feat(lab-04)`:** implement GET / root endpoint returning Lab 4 title and Online status
- **[019] `feat(lab-04)`:** populate student metadata S.S.M.BHARADWAJ and 252U1R1236 in root response
- **[020] `feat(lab-04)`:** populate section CSE-CORE-2E and faculty Mr Yugandhar Gurjalwar in root response
- **[021] `feat(lab-04)`:** document register and login POST paths in root JSON discovery object
- **[022] `feat(lab-04)`:** implement GET /register helper endpoint with sample JSON registration payload
- **[023] `feat(lab-04)`:** implement POST /register request destructuring for username, name, and password
- **[024] `feat(lab-04)`:** validate required registration fields returning 400 Bad Request when missing
- **[025] `feat(lab-04)`:** query existing username using parameterized SELECT * FROM user WHERE username = ?
- **[026] `feat(lab-04)`:** reject duplicate username registrations with 400 Username already exists
- **[027] `feat(lab-04)`:** hash registration passwords with bcrypt.hash(password, 10) adaptive salt rounds
- **[028] `feat(lab-04)`:** insert newly registered user using parameterized INSERT INTO user VALUES (?, ?, ?)
- **[029] `feat(lab-04)`:** return 201 Created response User registered successfully upon account creation
- **[030] `feat(lab-04)`:** wrap POST /register handler in try-catch returning 500 on unexpected failure
- **[031] `feat(lab-04)`:** implement GET /login helper endpoint with sample JSON login payload
- **[032] `feat(lab-04)`:** implement POST /login request destructuring for username and password
- **[033] `feat(lab-04)`:** validate required login fields returning 400 Username and password are required
- **[034] `feat(lab-04)`:** look up login account via parameterized SELECT * FROM user WHERE username = ?
- **[035] `feat(lab-04)`:** reject unregistered usernames with 400 Invalid username
- **[036] `feat(lab-04)`:** verify incoming password against stored hash using async bcrypt.compare
- **[037] `feat(lab-04)`:** reject mismatched passwords with 400 Invalid password
- **[038] `feat(lab-04)`:** construct minimal JWT identity payload containing strictly { username }
- **[039] `feat(lab-04)`:** sign stateless HS256 JWT token via jwt.sign(payload, secretKey)
- **[040] `feat(lab-04)`:** return 200 OK JSON response { jwt_token } upon verified login
- **[041] `feat(lab-04)`:** wrap POST /login handler in try-catch returning 500 Unable to login on error
- **[042] `feat(lab-04)`:** register catch-all 404 middleware returning Page not found for unknown routes
- **[043] `security(lab-04)`:** verify zero plain-text password logging across all route handlers
- **[044] `security(lab-04)`:** verify zero plain-text password storage in SQLite database/users.db
- **[045] `security(lab-04)`:** verify bcrypt hash modular format $2b$10$<22-char-salt><31-char-digest>
