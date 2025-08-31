#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

console.log("🏗️  Building Dubai Real Estate Expo...\n");

try {
  // Clean previous build
  if (fs.existsSync(".next")) {
    console.log("🧹 Cleaning previous build...");
    execSync("rm -rf .next", { stdio: "inherit" });
  }

  // Install dependencies if needed
  if (!fs.existsSync("node_modules")) {
    console.log("📦 Installing dependencies...");
    execSync("npm install", { stdio: "inherit" });
  }

  // Set environment variables for build
  process.env.NODE_ENV = "production";
  process.env.ENABLE_CSS_OPTIMIZATION = "false"; // Disable CSS optimization to avoid critters issues

  // Run the build
  console.log("🏗️  Running Next.js build...");
  execSync("next build", { stdio: "inherit" });

  console.log("\n✅ Build completed successfully!");
  console.log("🚀 You can now run: npm start");
} catch (error) {
  console.error("\n❌ Build failed:", error.message);
  process.exit(1);
}
