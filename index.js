const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'resources', 'input');
const outputPath = path.join(__dirname, 'resources', 'output.json');

const raw = fs.readFileSync(inputPath, 'utf8');

const data = raw
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line.length > 0)
  .map((line) => line.replace(/^data:\s*/, ''))
  .map((line) => JSON.parse(line));

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2) + '\n', 'utf8');

console.log(`Processed ${data.length} entries -> ${outputPath}`);
