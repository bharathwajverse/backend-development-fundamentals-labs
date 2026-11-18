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
- **[046] `security(lab-04)`:** verify identical passwords produce unique salted bcrypt digests per user
- **[047] `security(lab-04)`:** verify JWT payload excludes password, password hash, and secretKey
- **[048] `security(lab-04)`:** verify HS256 JWT signature tampering detection via jwt.verify
- **[049] `security(lab-04)`:** verify all SQL queries strictly use ? parameter binding against SQL injection
- **[050] `security(lab-04)`:** verify login uses HTTP POST body rather than GET query parameters
- **[051] `test(lab-04)`:** verify REST Client scenario 1: POST /register creates bharadwaj_ssm (201)
- **[052] `test(lab-04)`:** verify REST Client scenario 2: duplicate POST /register returns 400
- **[053] `test(lab-04)`:** verify REST Client scenario 3: valid POST /login issues signed JWT (200)
- **[054] `test(lab-04)`:** verify REST Client scenario 4: unknown username POST /login returns 400
- **[055] `test(lab-04)`:** verify REST Client scenario 5: wrong password POST /login returns 400
- **[056] `test(lab-04)`:** verify REST Client scenario 6: missing password POST /register returns 400
- **[057] `test(lab-04)`:** verify automated assertion 1: GET / returns 200 with S.S.M.BHARADWAJ metadata
- **[058] `test(lab-04)`:** verify automated assertion 2: GET /register and GET /login return 200
- **[059] `test(lab-04)`:** verify automated assertion 3: POST /register inserts new account with 201
- **[060] `test(lab-04)`:** verify automated assertion 4: duplicate POST /register rejected with 400
- **[061] `test(lab-04)`:** verify automated assertion 5: incomplete POST /register rejected with 400
- **[062] `test(lab-04)`:** verify automated assertion 6: POST /login JWT verifies with MY_SECRET_KEY
- **[063] `test(lab-04)`:** verify automated assertion 7: POST /login unknown user rejected with 400
- **[064] `test(lab-04)`:** verify automated assertion 8: POST /login wrong password rejected with 400
- **[065] `test(lab-04)`:** verify automated assertion 9: 404 fallback and SQLite $2b$10$ hash validation
- **[066] `test(lab-04)`:** verify Postman collection variables baseUrl and renderUrl
- **[067] `test(lab-04)`:** verify Postman request 01 GET / status check
- **[068] `test(lab-04)`:** verify Postman request 02 GET /register metadata check
- **[069] `test(lab-04)`:** verify Postman request 03 POST /register 201 creation check
- **[070] `test(lab-04)`:** verify Postman request 04 POST /register 400 duplicate check
- **[071] `test(lab-04)`:** verify Postman request 05 POST /register 400 validation check
- **[072] `test(lab-04)`:** verify Postman request 06 GET /login metadata check
- **[073] `test(lab-04)`:** verify Postman request 07 POST /login 200 JWT issuance check
- **[074] `test(lab-04)`:** verify Postman request 08 POST /login 400 unknown username check
- **[075] `test(lab-04)`:** verify Postman request 09 POST /login 400 invalid password check
- **[076] `test(lab-04)`:** verify Postman request 10 GET /notfound 404 catch-all check
- **[077] `docs(lab-04)`:** verify screenshot 01 displays local workspace prompt and nodemon startup
- **[078] `docs(lab-04)`:** verify screenshot 02 displays 201 Created response for bharadwaj_ssm
- **[079] `docs(lab-04)`:** verify screenshot 03 displays 400 Bad Request duplicate rejection
- **[080] `docs(lab-04)`:** verify screenshot 04 displays 200 OK signed HS256 jwt_token response
- **[081] `docs(lab-04)`:** verify screenshot 05 displays 400 Invalid username rejection
- **[082] `docs(lab-04)`:** verify screenshot 06 displays 400 Invalid password rejection
- **[083] `docs(lab-04)`:** verify screenshot 07 displays npm run db table with bcrypt hashes
