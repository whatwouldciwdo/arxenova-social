// compress-images.mjs
// Converts and compresses heavy images to WebP for better PageSpeed scores
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

const targets = [
  // Hero art - biggest culprit (683 KiB)
  {
    input: join(publicDir, "images/hero-art.png"),
    output: join(publicDir, "images/hero-art.webp"),
    options: { quality: 82 },
  },
  // Portfolio images
  {
    input: join(publicDir, "images/portfolio/otobi/otobi-arxenova-portfolio.jpg"),
    output: join(publicDir, "images/portfolio/otobi/otobi-arxenova-portfolio.webp"),
    options: { quality: 80 },
  },
  {
    input: join(publicDir, "images/portfolio/putrajayantara-ananta/putrajayantara-ananta-valve.jpg"),
    output: join(publicDir, "images/portfolio/putrajayantara-ananta/putrajayantara-ananta-valve.webp"),
    options: { quality: 80 },
  },
  {
    input: join(publicDir, "images/portfolio/berdikariraya/berdikari-arxenova.jpg"),
    output: join(publicDir, "images/portfolio/berdikariraya/berdikari-arxenova.webp"),
    options: { quality: 80 },
  },
  {
    input: join(publicDir, "images/portfolio/plnindonesiapower/plnindonesiapower-arxenova.jpg"),
    output: join(publicDir, "images/portfolio/plnindonesiapower/plnindonesiapower-arxenova.webp"),
    options: { quality: 80 },
  },
];

async function getFileSizeKB(path) {
  try {
    const s = await stat(path);
    return Math.round(s.size / 1024);
  } catch {
    return null;
  }
}

async function run() {
  console.log("🔧 Compressing images to WebP...\n");

  for (const { input, output, options } of targets) {
    const beforeKB = await getFileSizeKB(input);
    if (beforeKB === null) {
      console.warn(`⚠️  Skipped (not found): ${input}`);
      continue;
    }

    await sharp(input).webp(options).toFile(output);

    const afterKB = await getFileSizeKB(output);
    const saved = beforeKB - afterKB;
    const pct = Math.round((saved / beforeKB) * 100);
    const name = basename(output);

    console.log(`✅ ${name}`);
    console.log(`   ${beforeKB} KB  →  ${afterKB} KB  (saved ${saved} KB / ${pct}%)\n`);
  }

  console.log("✨ Done! Update your CSS/HTML to use .webp paths.");
}

run().catch(console.error);
