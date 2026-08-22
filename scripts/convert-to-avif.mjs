import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = 'src/assets';
const QUALITY = 75;
const EFFORT = 6;

async function convertToAvif() {
  const files = await glob(`${SOURCE_DIR}/**/*.{png,jpg,jpeg}`, { nocase: true });
  
  console.log(`Encontradas ${files.length} imágenes para convertir...`);
  
  let converted = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const avifPath = file.replace(ext, '.avif');
    
    // Verificar si ya existe el AVIF
    if (fs.existsSync(avifPath)) {
      console.log(`⏭️  Ya existe: ${avifPath}`);
      skipped++;
      continue;
    }
    
    try {
      await sharp(file)
        .avif({ quality: QUALITY, effort: EFFORT })
        .toFile(avifPath);
      
      const originalSize = fs.statSync(file).size;
      const avifSize = fs.statSync(avifPath).size;
      const savings = ((1 - avifSize / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${file} → ${avifPath} (${savings}% menor)`);
      converted++;
    } catch (err) {
      console.error(`❌ Error con ${file}:`, err.message);
      errors++;
    }
  }
  
  console.log(`\n📊 Resumen:`);
  console.log(`   Convertidas: ${converted}`);
  console.log(`   Omitidas (ya existían): ${skipped}`);
  console.log(`   Errores: ${errors}`);
  console.log(`   Total: ${files.length}`);
}

convertToAvif().catch(console.error);