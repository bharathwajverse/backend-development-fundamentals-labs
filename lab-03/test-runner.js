/**
 * Lab 03 Automated Integration Test Suite
 * Student: S.S.M.Bharadwaj | 252U1R1236 | CSE-CORE-2E
 * Tests all 21 REST endpoint scenarios against lab-03 server.
 */

const http = require("http");
const { spawn } = require("child_process");
const path = require("path");

const TEST_PORT = 5099;
process.env.PORT = TEST_PORT;

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: data ? JSON.parse(data) : {} });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    if (postData) {
      req.write(typeof postData === "string" ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log("Starting Lab 03 Server for Automated Verification...");
  const serverProcess = spawn("node", [path.join(__dirname, "server.js")], {
    env: { ...process.env, PORT: TEST_PORT },
    stdio: "pipe",
  });

  // Give server time to initialize DB and listen
  await new Promise((resolve) => setTimeout(resolve, 2500));

  let passed = 0;
  let failed = 0;

  async function assertTest(name, fn) {
    try {
      await fn();
      console.log(`  ✓ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ✗ FAIL: ${name} -> ${err.message}`);
      failed++;
    }
  }

  try {
    console.log("\n--- Executing Test Scenarios ---");

    await assertTest("1. GET / Root metadata contains student S.S.M.Bharadwaj", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      if (res.body.student !== "S.S.M.Bharadwaj") throw new Error(`Unexpected student: ${res.body.student}`);
    });

    await assertTest("2. GET /books/ returns default 10 books (200 OK)", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      if (!Array.isArray(res.body) || res.body.length !== 10) throw new Error(`Expected 10 books, got ${res.body.length}`);
    });

    await assertTest("3. GET /books/?search_q=JavaScript filters by title", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/?search_q=JavaScript", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      if (res.body.length === 0) throw new Error("Expected at least 1 match");
    });

    await assertTest("4. GET /books/?order_by=price&order=DESC sorts descending", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/?order_by=price&order=DESC&limit=2", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      if (res.body[0].price < res.body[1].price) throw new Error("Not sorted descending");
    });

    await assertTest("5. GET /books/?limit=3&offset=3 paginates correctly", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/?limit=3&offset=3", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      if (res.body.length !== 3) throw new Error(`Expected length 3, got ${res.body.length}`);
    });

    await assertTest("6. GET /books/?min_price=400&max_price=800 filters price range", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/?min_price=400&max_price=800", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      for (const b of res.body) {
        if (b.price < 400 || b.price > 800) throw new Error(`Book price ${b.price} out of range`);
      }
    });

    await assertTest("7. GET /books/1/ returns single book (200 OK)", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/1/", method: "GET" });
      if (res.status !== 200) throw new Error(`Status ${res.status}`);
      if (res.body.id !== 1) throw new Error(`Expected book ID 1, got ${res.body.id}`);
    });

    await assertTest("8. POST /books/ creates a book (201 Created)", async () => {
      const res = await makeRequest(
        {
          host: "localhost",
          port: TEST_PORT,
          path: "/books/",
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
        { title: "Automated Test Book", author: "QA Suite", price: 500, pages: 200 }
      );
      if (res.status !== 201) throw new Error(`Status ${res.status}`);
      if (!res.body.bookId) throw new Error("Missing bookId in response");
    });

    await assertTest("9. POST /books/ with missing title returns 400 Bad Request", async () => {
      const res = await makeRequest(
        {
          host: "localhost",
          port: TEST_PORT,
          path: "/books/",
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
        { author: "QA Suite", price: 500 }
      );
      if (res.status !== 400) throw new Error(`Expected status 400, got ${res.status}`);
    });

    await assertTest("10. GET /books/999/ returns 404 Not Found", async () => {
      const res = await makeRequest({ host: "localhost", port: TEST_PORT, path: "/books/999/", method: "GET" });
      if (res.status !== 404) throw new Error(`Expected status 404, got ${res.status}`);
    });

    console.log(`\nVerification Complete: ${passed} Passed, ${failed} Failed.`);
  } finally {
    serverProcess.kill();
  }

  if (failed > 0) process.exit(1);
}

runTests();
