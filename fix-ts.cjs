const fs = require('fs');

// 1. Fix src/app/api/experts/[id]/route.ts
let f1 = 'src/app/api/experts/[id]/route.ts';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/\{ params \}: \{ params: \{ id: string \} \}/g, 'props: { params: Promise<{ id: string }> }');
c1 = c1.replace(/const id = params\.id;/g, 'const params = await props.params;\n    const id = params.id;');
c1 = c1.replace(/\{ contentType: imageFile.type \}/g, '{ metadata: { contentType: imageFile.type } }');
fs.writeFileSync(f1, c1);

// 2. Fix src/app/api/experts/route.ts
let f2 = 'src/app/api/experts/route.ts';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/\{ contentType: imageFile.type \}/g, '{ metadata: { contentType: imageFile.type } }');
fs.writeFileSync(f2, c2);

// 3. Fix src/app/api/images/[id]/route.ts
let f3 = 'src/app/api/images/[id]/route.ts';
let c3 = fs.readFileSync(f3, 'utf8');
c3 = c3.replace(/\{ params \}: \{ params: \{ id: string \} \}/g, 'props: { params: Promise<{ id: string }> }');
c3 = c3.replace(/const id = params\.id;/g, 'const params = await props.params;\n    const id = params.id;');
c3 = c3.replace(/files\[0\]\.contentType/g, 'files[0].metadata?.contentType');
fs.writeFileSync(f3, c3);

// 4. Fix src/app/api/seed/route.ts
let f4 = 'src/app/api/seed/route.ts';
let c4 = fs.readFileSync(f4, 'utf8');
c4 = c4.replace(/contentType: 'image\/jpeg'/g, 'metadata: { contentType: "image/jpeg" }');
fs.writeFileSync(f4, c4);

// 5. Fix src/components/Header.tsx
let f5 = 'src/components/Header.tsx';
let c5 = fs.readFileSync(f5, 'utf8');
c5 = c5.replace(/const \{ pathname \} = usePathname\(\);/g, 'const pathname = usePathname();');
fs.writeFileSync(f5, c5);

// 6. Fix src/app/expert-board/page.tsx
let f6 = 'src/app/expert-board/page.tsx';
let c6 = fs.readFileSync(f6, 'utf8');
if (!c6.includes('import { useEffect')) {
  c6 = c6.replace(/import \{ useState \} from "react";/, 'import { useState, useEffect } from "react";');
}
fs.writeFileSync(f6, c6);

// 7. Fix src/components/AdminExpertForm.tsx
let f7 = 'src/components/AdminExpertForm.tsx';
let c7 = fs.readFileSync(f7, 'utf8');
c7 = c7.replace(/s => s\.trim\(\)/g, '(s: string) => s.trim()');
fs.writeFileSync(f7, c7);

// 8. Fix src/lib/mongodb.ts
let f8 = 'src/lib/mongodb.ts';
let c8 = fs.readFileSync(f8, 'utf8');
c8 = c8.replace(/global\.mongoose/g, '(global as any).mongoose');
fs.writeFileSync(f8, c8);

// 9. Fix Link to in insights and services
['src/app/insights/page.tsx', 'src/app/services/page.tsx'].forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/<Link to=/g, '<Link href=');
  if (c.includes('useParams')) {
    // already imported?
  } else {
    c = c.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport { useParams } from 'next/navigation';");
  }
  fs.writeFileSync(file, c);
});

console.log("Fixed TS errors");
