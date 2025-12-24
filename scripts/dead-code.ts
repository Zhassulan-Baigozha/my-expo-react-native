#!/usr/bin/env node
// scripts/dead-code.ts
import { execSync } from "node:child_process";

const IGNORED_PATTERNS = ["unstable_settings"];

type ExecError = Error & {
  stdout?: Buffer | string;
};

function isExecError(error: unknown): error is ExecError {
  return typeof error === "object" && error !== null && "stdout" in error;
}

function run() {
  let output = "";

  try {
    output = execSync("ts-prune -p tsconfig.json", {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
  } catch (error: unknown) {
    if (isExecError(error)) {
      output = error.stdout?.toString() ?? "";
    } else {
      throw error;
    }
  }

  const lines = output
    .split("\n")
    .filter(Boolean)
    .filter(
      (line) => !IGNORED_PATTERNS.some((pattern) => line.includes(pattern)),
    );

  const defaultLines: string[] = [];
  const otherLines: string[] = [];

  for (const line of lines) {
    if (line.includes(" - default")) {
      defaultLines.push(line);
    } else {
      otherLines.push(line);
    }
  }

  // Вывод default экспорта как предупреждение
  if (defaultLines.length > 0) {
    console.log("⚠️  Default exports (warning):");
    console.log(defaultLines.join("\n"));
    console.log("");
  }

  // Вывод остального мёртвого кода как ошибка
  if (otherLines.length > 0) {
    console.log(otherLines.join("\n"));
    console.log("");
    process.exit(1);
  }

  console.log("✅ No dead code found");
}

run();
