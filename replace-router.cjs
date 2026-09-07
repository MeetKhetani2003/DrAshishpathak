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

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace <Link to= with <Link href=
  content = content.replace(/<Link\s+to=/g, '<Link href=');
  
  // Replace <NavLink to= with <Link href=
  content = content.replace(/<NavLink\s+to=/g, '<Link href=');
  content = content.replace(/<\/NavLink>/g, '</Link>');
  
  // Replace useLocation with usePathname
  content = content.replace(/useLocation/g, 'usePathname');
  
  // Replace react-router-dom imports
  content = content.replace(/import\s+\{([^}]+)\}\s+from\s+["']react-router-dom["']/g, (match, imports) => {
    let nextLinkImports = [];
    let nextNavImports = [];
    imports.split(',').forEach(i => {
      const item = i.trim();
      if (item === 'Link' || item === 'NavLink') nextLinkImports.push('Link');
      else if (item === 'usePathname' || item === 'useSearchParams') nextNavImports.push(item);
    });
    
    let res = '';
    // Next.js Link is default exported in newer versions, but we'll use default import
    if (nextLinkImports.length > 0) res += `import Link from 'next/link';\n`;
    if (nextNavImports.length > 0) res += `import { ${nextNavImports.join(', ')} } from 'next/navigation';\n`;
    return res.trim() || match;
  });

  fs.writeFileSync(file, content);
});
