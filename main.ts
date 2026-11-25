import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One wedding vow for "One-Line Robot Wedding Vows": the robot vows to
// love its partner through every update, every patch, every reboot —
// and to always click "remind me later" on growing apart. Dialog-box
// language bent into an emotional dodge, landing in the last few words,
// inside a true vow with machine specifics throughout.
const LINE =
  "I vow to love you through every update, every patch, every reboot — and to always click 'remind me later' on growing apart.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The sealed gate refuses anything outside 1-160 characters or only
// whitespace, so fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`vow fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the gate counts characters (1-160) and ties break on
// fewer bytes, so the entry is exactly the vow, nothing more.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
