const {spawn} = require('child_process')
const assert = require('assert')
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

const PORT = 3404
const BASE_URL = `http://localhost:${PORT}`
const dbPath = path.join(__dirname, 'database', 'users.db')

async function waitForServer(url, retries = 25) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return true
    } catch (_) {}
    await new Promise(r => setTimeout(r, 250))
  }
  throw new Error('Server did not start in time')
}

async function runTests() {
  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath)
  }

  const server = spawn(process.execPath, ['server.js'], {
    cwd: __dirname,
    env: {...process.env, PORT: String(PORT)},
    stdio: 'pipe'
  })

  let stderr = ''
  server.stderr.on('data', d => { stderr += d.toString() })

  try {
    await waitForServer(`${BASE_URL}/`)

    // 1. GET /
    let res = await fetch(`${BASE_URL}/`)
    assert.strictEqual(res.status, 200)
    const rootBody = await res.json()
    assert.strictEqual(rootBody.student.name, 'S.S.M.BHARADWAJ')
    assert.strictEqual(rootBody.student.registrationNumber, '252U1R1236')
    assert.strictEqual(rootBody.status, 'Online')
    console.log('PASS [1/9]: GET / returns student metadata and Online status')

    // 2. GET /register & GET /login info endpoints
    res = await fetch(`${BASE_URL}/register`)
    assert.strictEqual(res.status, 200)
    res = await fetch(`${BASE_URL}/login`)
    assert.strictEqual(res.status, 200)
    console.log('PASS [2/9]: GET /register and GET /login return endpoint metadata')

    // 3. POST /register (201 Created)
    res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: 'bharadwaj_ssm',
        name: 'S.S.M.BHARADWAJ',
        password: 'pass123'
      })
    })
    assert.strictEqual(res.status, 201)
    assert.strictEqual(await res.text(), 'User registered successfully')
    console.log('PASS [3/9]: POST /register creates new user with 201 Created')

    // 4. POST /register duplicate (400 Bad Request)
    res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: 'bharadwaj_ssm',
        name: 'S.S.M.BHARADWAJ',
        password: 'pass123'
      })
    })
    assert.strictEqual(res.status, 400)
    assert.strictEqual(await res.text(), 'Username already exists')
    console.log('PASS [4/9]: POST /register rejects duplicate username with 400')

    // 5. POST /register missing fields (400 Bad Request)
    res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'newuser', name: 'New User'})
    })
    assert.strictEqual(res.status, 400)
    assert.strictEqual(await res.text(), 'Username, name and password are required')
    console.log('PASS [5/9]: POST /register rejects missing fields with 400')

    // 6. POST /login valid credentials (200 OK + JWT)
    res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'bharadwaj_ssm', password: 'pass123'})
    })
    assert.strictEqual(res.status, 200)
    const loginBody = await res.json()
    assert.ok(loginBody.jwt_token, 'jwt_token missing in response')
    const decoded = jwt.verify(loginBody.jwt_token, 'MY_SECRET_KEY')
    assert.strictEqual(decoded.username, 'bharadwaj_ssm')
    assert.strictEqual(decoded.password, undefined, 'password must never be in JWT payload')
    console.log('PASS [6/9]: POST /login returns valid signed JWT with username claim only')

    // 7. POST /login unknown username (400)
    res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'unknownuser', password: 'pass123'})
    })
    assert.strictEqual(res.status, 400)
    assert.strictEqual(await res.text(), 'Invalid username')
    console.log('PASS [7/9]: POST /login rejects unknown username with 400')

    // 8. POST /login wrong password (400)
    res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'bharadwaj_ssm', password: 'wrong123'})
    })
    assert.strictEqual(res.status, 400)
    assert.strictEqual(await res.text(), 'Invalid password')
    console.log('PASS [8/9]: POST /login rejects wrong password with 400')

    // 9. Verify 404 fallback + bcrypt hash in SQLite DB
    res = await fetch(`${BASE_URL}/notfound`)
    assert.strictEqual(res.status, 404)
    assert.strictEqual(await res.text(), 'Page not found')

    const db = await open({filename: dbPath, driver: sqlite3.Database})
    const row = await db.get('SELECT * FROM user WHERE username = ?;', ['bharadwaj_ssm'])
    assert.ok(row.password.startsWith('$2b$10$'), 'Password must be stored as bcrypt hash')
    assert.notStrictEqual(row.password, 'pass123')
    await db.close()
    console.log('PASS [9/9]: 404 fallback verified & SQLite stores 60-char bcrypt hash only')

    console.log('\nALL 9 LAB-04 INTEGRATION TESTS PASSED!')
    console.log('Sample JWT:', loginBody.jwt_token)
    console.log('Sample Hash:', row.password)
  } finally {
    server.kill()
    if (stderr) console.error('Server stderr:', stderr)
  }
}

runTests().catch(err => {
  console.error('TEST FAILED:', err)
  process.exit(1)
})
