const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');

const targets = [
  // Project images
  { input: 'projetImage/strasevent.png', maxWidth: 1200 },
  { input: 'projetImage/cafeFlorette.png', maxWidth: 1200 },
  { input: 'projetImage/cookchef.png', maxWidth: 1200 },
  { input: 'projetImage/travelAgency.png', maxWidth: 1200 },
  { input: 'projetImage/portfolio.png', maxWidth: 1200 },
  { input: 'projetImage/onof.png', maxWidth: 1200 },
  { input: 'projetImage/likeAnAngel.png', maxWidth: 1200 },
  { input: 'projetImage/focusFlow.png', maxWidth: 1200 },
  { input: 'projetImage/operationIceStation.png', maxWidth: 1200 },
  { input: 'projetImage/toDo.png', maxWidth: 1200 },
  // Profile picture
  { input: 'me.jpg', maxWidth: 600, isJpeg: true },
];

async function optimizeImage({ input, maxWidth, isJpeg = false }) {
  const inputPath = path.join(IMAGES_DIR, input);
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠  Skipped (not found): ${input}`);
    return;
  }

  const statBefore = fs.statSync(inputPath).size;
  const tmpPath = inputPath + '.tmp';

  const pipeline = sharp(inputPath).resize({ width: maxWidth, withoutEnlargement: true });

  if (isJpeg) {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
  } else {
    await pipeline.png({ compressionLevel: 9, effort: 10 }).toFile(tmpPath);
  }

  fs.renameSync(tmpPath, inputPath);
  const statAfter = fs.statSync(inputPath).size;
  const saving = (((statBefore - statAfter) / statBefore) * 100).toFixed(1);
  console.log(
    `✓ ${input.padEnd(40)} ${(statBefore / 1024 / 1024).toFixed(2)} MB → ${(statAfter / 1024).toFixed(0)} KB  (${saving}% saved)`
  );
}

(async () => {
  console.log('Optimizing images...\n');
  for (const target of targets) {
    try {
      await optimizeImage(target);
    } catch (e) {
      console.error(`✗ ${target.input}: ${e.message}`);
    }
  }
  console.log('\nDone.');
})();
