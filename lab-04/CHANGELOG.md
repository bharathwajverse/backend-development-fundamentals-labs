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
