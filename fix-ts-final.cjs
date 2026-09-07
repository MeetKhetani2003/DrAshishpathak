const fs = require('fs');

let f1 = 'src/app/services/page.tsx';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/<ArrowLink href=/g, '<ArrowLink to=');
if (!c1.includes('useParams')) {
  c1 = "import { useParams } from 'next/navigation';\n" + c1;
}
fs.writeFileSync(f1, c1);

let f2 = 'src/app/insights/page.tsx';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/<ArrowLink href=/g, '<ArrowLink to=');
if (!c2.includes('useParams')) {
  c2 = "import { useParams } from 'next/navigation';\n" + c2;
}
fs.writeFileSync(f2, c2);

console.log("Fixed missing useParams and ArrowLink props");
