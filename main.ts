// Sleeve Notes for the Frog Trio — make.fun entry.
// Writes the album title and back cover blurb to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
