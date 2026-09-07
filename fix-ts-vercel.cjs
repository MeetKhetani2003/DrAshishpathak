const fs = require('fs');

// 1. Fix src/app/api/experts/[id]/route.ts
let f1 = 'src/app/api/experts/[id]/route.ts';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/contentType: imageFile\.type\s*\} as any/g, 'metadata: { contentType: imageFile.type }');
c1 = c1.replace(/contentType: imageFile\.type/g, 'metadata: { contentType: imageFile.type }');
c1 = c1.replace(/export async function GET\(\s*request: NextRequest,/g, 'export async function GET(\n  _request: NextRequest,');
c1 = c1.replace(/export async function PUT\(\s*request: NextRequest,/g, 'export async function PUT(\n  _request: NextRequest,');
c1 = c1.replace(/export async function DELETE\(\s*request: NextRequest,/g, 'export async function DELETE(\n  _request: NextRequest,');
fs.writeFileSync(f1, c1);

// 2. Fix src/app/api/experts/route.ts
let f2 = 'src/app/api/experts/route.ts';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/contentType: imageFile\.type\s*\} as any/g, 'metadata: { contentType: imageFile.type }');
c2 = c2.replace(/contentType: imageFile\.type/g, 'metadata: { contentType: imageFile.type }');
fs.writeFileSync(f2, c2);

// 3. Fix src/app/api/images/[id]/route.ts
let f3 = 'src/app/api/images/[id]/route.ts';
let c3 = fs.readFileSync(f3, 'utf8');
c3 = c3.replace(/export async function GET\(\s*request: NextRequest,/g, 'export async function GET(\n  _request: NextRequest,');
fs.writeFileSync(f3, c3);

// 4. Fix src/app/insights/page.tsx
let f4 = 'src/app/insights/page.tsx';
let c4 = fs.readFileSync(f4, 'utf8');
c4 = c4.replace(/<Link(.*?) to=/g, '<Link$1 href=');
if (!c4.includes('useParams')) {
  c4 = c4.replace(/import \{ useMemo \}/, 'import { useParams } from "next/navigation";\nimport { useMemo }');
  if (!c4.includes('useParams')) {
      c4 = "import { useParams } from 'next/navigation';\n" + c4;
  }
}
fs.writeFileSync(f4, c4);

// 5. Fix src/app/services/page.tsx
let f5 = 'src/app/services/page.tsx';
let c5 = fs.readFileSync(f5, 'utf8');
c5 = c5.replace(/<Link(.*?) to=/g, '<Link$1 href=');
if (!c5.includes('useParams')) {
  c5 = "import { useParams } from 'next/navigation';\n" + c5;
}
fs.writeFileSync(f5, c5);

console.log("Fixed for Vercel!");
