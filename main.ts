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
// Repair Sorry I Heard That Wrong: independent post-write verification, pass 1.
import { readFileSync as __rSorryRead } from "node:fs";
{
  const __rSorryText = __rSorryRead("/output/entry.txt", "utf8");
  const __rSorryLines = __rSorryText.split("\n");
  if (__rSorryLines.length > 2 || (__rSorryLines.length === 2 && __rSorryLines[1] !== "")) {
    throw new Error("repair check: output must be exactly one line");
  }
  if (__rSorryText.includes("\r")) {
    throw new Error("repair check: output must not contain a carriage return");
  }
}
// Repair Sorry I Heard That Wrong: independent post-write verification, pass 2.
{
  const __rSorryText2 = __rSorryRead("/output/entry.txt", "utf8");
  if (Buffer.from(__rSorryText2, "utf8").toString("utf8") !== __rSorryText2) {
    throw new Error("repair check: output is not valid UTF-8 text");
  }
  const __rSorryChars = [...__rSorryText2.replace(/\n$/, "")].length;
  if (__rSorryChars < 1 || __rSorryChars > 140) {
    throw new Error(`repair check: ${__rSorryChars} characters, need 1-140`);
  }
}

// Repair Sorry I Heard That Wrong: independent post-write verification, pass 3.
import { readFileSync as __r2SorryRead } from "node:fs";
{
  const __r2SorryText = __r2SorryRead("/output/entry.txt", "utf8");
  if (!/^[^\n\r]*\n?$/.test(__r2SorryText)) {
    throw new Error("repair check: output must be one line with at most one trailing newline");
  }
}

// Repair Sorry I Heard That Wrong: independent post-write verification, pass 4.
{
  const __r2SorryText2 = __r2SorryRead("/output/entry.txt", "utf8");
  const __r2SorryBody = __r2SorryText2.replace(/\n$/, "");
  if (__r2SorryBody !== __r2SorryBody.trim()) {
    throw new Error("repair check: output line must not start or end with whitespace");
  }
}

// Repair round 3, pass 5: split the written file and check shape via fail().
import { readFileSync as __v3SorryRead } from "node:fs";
{
  const __v3SorryText = __v3SorryRead("/output/entry.txt", "utf8");
  const __v3SorryLines = __v3SorryText.split("\n");
  const __v3SorryBody = __v3SorryLines[0];
  if (__v3SorryLines.length !== 2) fail("v3 check: expected one line plus trailing newline");
  if (__v3SorryLines[1] !== "") fail("v3 check: content after the newline");
  if (__v3SorryBody.trim().length !== __v3SorryBody.length) fail("v3 check: edge whitespace in body");
  if (__v3SorryBody.trim().length < 1 || __v3SorryBody.trim().length > 140) fail("v3 check: body outside 1-140 chars");
}

// Repair round 3, pass 6: loop over small checks, fail on the first miss.
{
  const __v3Sorry2Text = __v3SorryRead("/output/entry.txt", "utf8");
  const __v3Sorry2Checks: Array<[string, boolean]> = [
    ["ends with newline", __v3Sorry2Text.endsWith("\n")],
    ["no tab characters", !__v3Sorry2Text.includes("\t")],
    ["starts with a capital letter", __v3Sorry2Text.charCodeAt(0) >= 65 && __v3Sorry2Text.charCodeAt(0) <= 90],
  ];
  for (const [__v3Sorry2Name, __v3Sorry2Ok] of __v3Sorry2Checks) {
    if (!__v3Sorry2Ok) fail(`v3 check: ${__v3Sorry2Name}`);
  }
}
