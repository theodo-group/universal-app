#!/usr/bin/env node
import { spawn } from "child_process";
import fs from "fs-extra";
import ora from "ora";
import path from "path";

const repoURL = "https://github.com/theodo-group/universal-app.git";
const projectName = process.argv[2];

if (!projectName) {
  console.error("Please provide a project name as an argument.");
  process.exit(1);
}

const projectDir = path.join(process.cwd(), projectName);

const runAsyncProcess = async (spawnFunction) => {
  return new Promise((resolve, reject) => {
    spawnFunction()
      .on("close", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error("Failed to clone repository"));
        }
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

(async () => {
  try {
    if (fs.existsSync(projectDir)) {
      console.error(`Directory "${projectDir}" already exists.`);
      return;
    }

    const cloning = ora(`Cloning repository to "${projectDir}"...`).start();
    await runAsyncProcess(() => spawn("git", ["clone", "--depth", "1", repoURL, projectDir]));
    cloning.stop();

    //remove git history and init a new one
    const initGit = ora("Initializing new Git repository...").start();
    await fs.remove(path.join(projectDir, ".git"));
    await runAsyncProcess(() => spawn("git", ["init"], { cwd: projectDir }));
    initGit.stop();

    const cleanRepo = ora("Cleaning up repo...").start();
    const packagesDir = path.join(projectDir, "packages");
    const createUniversalAppDir = path.join(packagesDir, "create-universal-app");
    await fs.remove(createUniversalAppDir);
    cleanRepo.stop();

    console.log("Project generated successfully!");
  } catch (err) {
    console.error(err);
  }
})();
