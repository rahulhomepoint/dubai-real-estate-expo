#!/usr/bin/env node

const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🏗️  Dubai Real Estate Expo - Build and Start Script\n");

// Configuration
const CONFIG = {
  port: 3000,
  projectName: "Dubai Real Estate Expo",
  buildDir: ".next",
};

// Utility functions
function runCommand(command, description) {
  console.log(`📋 ${description}...`);
  try {
    execSync(command, { stdio: "inherit" });
    console.log(`✅ ${description} completed successfully\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    return false;
  }
}

function checkPort(port) {
  try {
    const netstat = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
    });
    return netstat.length > 0;
  } catch (error) {
    return false;
  }
}

function killProcessOnPort(port) {
  try {
    console.log(`🔍 Checking if port ${port} is in use...`);
    const netstat = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
    });

    if (netstat) {
      const lines = netstat.split("\n").filter((line) => line.trim());
      for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 5) {
          const pid = parts[4];
          console.log(`🔄 Killing process ${pid} on port ${port}...`);
          try {
            execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
          } catch (error) {
            console.log(`⚠️  Could not kill process ${pid}`);
          }
        }
      }
    }
  } catch (error) {
    console.log(`ℹ️  No process found on port ${port}`);
  }
}

function waitForServer(port, maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const checkServer = () => {
      attempts++;
      try {
        const response = execSync(
          `curl -s http://localhost:${port}/api/health`,
          { encoding: "utf8" }
        );
        if (response.includes("healthy")) {
          console.log(`✅ Server is running on port ${port}`);
          resolve(true);
        } else {
          throw new Error("Server not ready");
        }
      } catch (error) {
        if (attempts >= maxAttempts) {
          reject(
            new Error(`Server failed to start after ${maxAttempts} attempts`)
          );
          return;
        }
        console.log(`⏳ Waiting for server... (${attempts}/${maxAttempts})`);
        setTimeout(checkServer, 1000);
      }
    };

    setTimeout(checkServer, 1000);
  });
}

function startServer() {
  console.log("🚀 Starting production server...");

  const server = spawn("npm", ["run", "start"], {
    stdio: "inherit",
    shell: true,
  });

  server.on("error", (error) => {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  });

  server.on("exit", (code) => {
    if (code !== 0) {
      console.error(`❌ Server exited with code ${code}`);
      process.exit(code);
    }
  });

  return server;
}

// Main execution
async function main() {
  try {
    // Step 1: Check and kill any process on the target port
    killProcessOnPort(CONFIG.port);

    // Step 2: Clean previous build
    if (fs.existsSync(CONFIG.buildDir)) {
      console.log("🧹 Cleaning previous build...");
      execSync(`rmdir /s /q ${CONFIG.buildDir}`, { stdio: "ignore" });
    }

    // Step 3: Install dependencies if needed
    if (!fs.existsSync("node_modules")) {
      console.log("📦 Installing dependencies...");
      runCommand("npm install", "Installing dependencies");
    }

    // Step 4: Build the project
    console.log("🏗️  Building project...");
    if (!runCommand("npm run build", "Building project")) {
      throw new Error("Build failed");
    }

    // Step 5: Start the server
    const server = startServer();

    // Step 6: Wait for server to be ready
    try {
      await waitForServer(CONFIG.port);
      console.log("\n🎉 Dubai Real Estate Expo is now running!");
      console.log(`🌐 Open your browser: http://localhost:${CONFIG.port}`);
      console.log(
        `📊 Health check: http://localhost:${CONFIG.port}/api/health`
      );
      console.log("\nPress Ctrl+C to stop the server");
    } catch (error) {
      console.error("❌ Server health check failed:", error.message);
      server.kill();
      process.exit(1);
    }

    // Handle graceful shutdown
    process.on("SIGINT", () => {
      console.log("\n🛑 Shutting down server...");
      server.kill();
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ Build and start failed:", error.message);
    process.exit(1);
  }
}

// Run the script
main();
