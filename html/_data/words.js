import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default () => {
  const filePath = path.join(__dirname, 'het_woorden.txt');
  const content = fs.readFileSync(filePath, 'utf-8');

  return content.trim().split('\n').sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
};