const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const filesToUpdate = [
  ...walk('src/app'),
  ...walk('src/components'),
  ...walk('src/hooks'),
];

filesToUpdate.forEach(file => {
  const filepath = path.resolve(file);
  // Don't add use client to api routes, layout.tsx, mongodb.ts
  if (filepath.includes('api') || filepath.includes('mongodb.ts') || filepath.includes('models') || filepath.includes('layout.tsx')) return;
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf-8');
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      content = '"use client";\n' + content;
      fs.writeFileSync(filepath, content);
    }
  }
});
