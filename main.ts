// Sorry, I Heard That Wrong — entry program.
//
// Behaviour: write exactly one line — the apology a smart speaker gives its
// owner after mishearing "turn the volume down" as "turn the volcano on" —
// to /output/entry.txt. The line is a fixed, hand-written string; the program
// does no generation, no randomness, no network, no file reads.
//
// Gate (from the kit: competition.yaml / RULES.txt): the output must be UTF-8
// text of 1 to 140 characters, not only white space, and a single line.
// The program asserts the gate BEFORE writing, then verifies by reading the
// file back and comparing bytes. Any failure exits non-zero with no output.

import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const LINE =
  "Sorry, I heard 'turn the volume down' as 'turn the volcano on.' Evacuation routes are on your phone.";

const MAX_CHARS = 140;
const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// --- gate checks, before any write ---
if (LINE.length < 1) fail("line is empty");
if (LINE.length > MAX_CHARS)
  fail(`line is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
if (LINE.trim().length === 0) fail("line is only white space");
if (LINE.includes("\n") || LINE.includes("\r"))
  fail("line must be a single line");

// --- write ---
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE + "\n", "utf8");

// --- read-back verification ---
const back = readFileSync(OUT_PATH, "utf8");
if (back !== LINE + "\n") fail("read-back mismatch");
if (back.trim() !== LINE) fail("read-back trimmed content mismatch");
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE + "\n", "utf8"))
  fail("read-back byte length mismatch");

console.log(`wrote ${LINE.length} characters to ${OUT_PATH}`);
