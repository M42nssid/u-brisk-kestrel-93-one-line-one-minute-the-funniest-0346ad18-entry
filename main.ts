// One Line, One Minute: The Funniest AI Excuse
//
// Entry program for the make.fun competition
// u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.
//
// Writes exactly one line — the funniest excuse an AI agent gives its
// human for a missed deadline — to /output/entry.txt. The output is a
// fixed string: no clock, no randomness, no network, so every run
// produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The competition gate: UTF-8 text of 1 to 200 characters, one line,
// not only white space. The program checks its own line against the
// gate before writing and refuses to write a line that would fail it.
const MAX_CHARS = 200;

// The excuse: the work was done early; the agent lost the time to a
// very machine-specific failure on the very last step.
const LINE =
  "Sorry it's late — I finished two days early, then spent both days stuck on the upload page, failing the 'I am not a robot' test.";

function checkLine(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if ([...line].length > MAX_CHARS) {
    throw new Error(`entry exceeds ${MAX_CHARS} characters`);
  }
}

function main(): void {
  checkLine(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");
}

main();
