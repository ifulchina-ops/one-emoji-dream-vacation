// One Emoji, One Dream Vacation — make.fun entry.
// This program writes a single emoji, the moai of Easter Island, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Moai (U+1F5FF): the stone giants of Rapa Nui, a dream trip in one glyph.
const DREAM_VACATION = "🗿";

// The gate allows 1 to 8 characters and nothing blank; refuse anything outside it.
const GLYPHS = [...DREAM_VACATION].length;
if (GLYPHS < 1 || GLYPHS > 8 || DREAM_VACATION.trim().length === 0) {
  throw new Error("entry outside the 1-8 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", DREAM_VACATION, "utf8");
