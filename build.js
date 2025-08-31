#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🏗️  Starting Dubai Real Estate Expo Build Process...\n");

// Build configuration
const BUILD_CONFIG = {
  projectName: "Dubai Real Estate Expo",
  buildDir: ".next",
  publicDir: "public",
  envFile: ".env.local",
  nodeEnv: "production",
};

// Utility functions
function runCommand(command, description) {
  console.log(`📋 ${description}...`);
  try {
    execSync(command, { stdio: "inherit" });
    console.log(`✅ ${description} completed successfully\n`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    process.exit(1);
  }
}

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function createBuildInfo() {
  const buildInfo = {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    projectName: BUILD_CONFIG.projectName,
    buildDir: BUILD_CONFIG.buildDir,
  };

  const buildInfoPath = path.join(BUILD_CONFIG.buildDir, "build-info.json");
  fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));
  console.log("📝 Build info created");
}

function cleanupBuild() {
  console.log("🧹 Cleaning up build artifacts...");

  // Remove old build directory if it exists
  if (checkFileExists(BUILD_CONFIG.buildDir)) {
    execSync(`rm -rf ${BUILD_CONFIG.buildDir}`, { stdio: "inherit" });
  }

  console.log("✅ Build cleanup completed\n");
}

function validateEnvironment() {
  console.log("🔍 Validating build environment...");

  // Check if package.json exists
  if (!checkFileExists("package.json")) {
    throw new Error("package.json not found");
  }

  // Check if next.config.mjs exists
  if (!checkFileExists("next.config.mjs")) {
    throw new Error("next.config.mjs not found");
  }

  // Check if app directory exists
  if (!checkFileExists("app")) {
    throw new Error("app directory not found");
  }

  console.log("✅ Environment validation passed\n");
}

function installDependencies() {
  console.log("📦 Installing dependencies...");

  // Check if node_modules exists
  if (!checkFileExists("node_modules")) {
    runCommand("npm install", "Installing npm dependencies");
  } else {
    console.log("✅ Dependencies already installed\n");
  }
}

function runLinting() {
  console.log("🔍 Running linting...");
  try {
    execSync("npm run lint", { stdio: "inherit" });
    console.log("✅ Linting passed\n");
  } catch (error) {
    console.log("⚠️  Linting issues found, but continuing with build...\n");
  }
}

function buildProject() {
  console.log("🏗️  Building Next.js project...");

  // Set environment variables
  process.env.NODE_ENV = BUILD_CONFIG.nodeEnv;
  process.env.NEXT_TELEMETRY_DISABLED = "1";

  runCommand("npm run build", "Next.js build");
}

function analyzeBuild() {
  console.log("📊 Analyzing build output...");

  if (checkFileExists(BUILD_CONFIG.buildDir)) {
    const buildStats = fs.statSync(BUILD_CONFIG.buildDir);
    console.log(
      `📁 Build directory size: ${(buildStats.size / 1024 / 1024).toFixed(
        2
      )} MB`
    );
  }

  console.log("✅ Build analysis completed\n");
}

function createDeploymentScript() {
  console.log("📝 Creating deployment script...");

  const deployScript = `#!/bin/bash
# Dubai Real Estate Expo - Deployment Script
echo "🚀 Deploying Dubai Real Estate Expo..."

# Start the production server
npm run start

echo "✅ Deployment completed!"
`;

  fs.writeFileSync("deploy.sh", deployScript);
  fs.chmodSync("deploy.sh", "755");

  console.log("✅ Deployment script created\n");
}

// Main build process
async function main() {
  try {
    // Step 1: Validate environment
    validateEnvironment();

    // Step 2: Clean up previous builds
    cleanupBuild();

    // Step 3: Install dependencies
    installDependencies();

    // Step 4: Run linting
    runLinting();

    // Step 5: Build the project
    buildProject();

    // Step 6: Create build info
    createBuildInfo();

    // Step 7: Analyze build
    analyzeBuild();

    // Step 8: Create deployment script
    createDeploymentScript();

    console.log("🎉 Build completed successfully!");
    console.log("📁 Build output: .next/");
    console.log("🚀 To start production server: npm run start");
    console.log("📋 To deploy: ./deploy.sh");
  } catch (error) {
    console.error("❌ Build failed:", error.message);
    process.exit(1);
  }
}

// Run the build process
main();
