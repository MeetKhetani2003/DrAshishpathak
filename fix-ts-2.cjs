const fs = require('fs');

// 1. fix api routes GridFS options and params
let p1 = 'src/app/api/experts/[id]/route.ts';
let c1 = fs.readFileSync(p1, 'utf8');
c1 = c1.replace(/\{ metadata: \{ contentType: imageFile.type \} \}/g, '{ contentType: imageFile.type } as any');
c1 = c1.replace(/export async function DELETE\(\s*request: NextRequest,\s*\{ params \}: \{ params: \{ id: string \} \}\s*\)/g, 'export async function DELETE(request: NextRequest, props: { params: Promise<{ id: string }> })');
c1 = c1.replace(/await Expert.findByIdAndDelete\(params.id\);/g, 'const params = await props.params;\n    const expert = await Expert.findByIdAndDelete(params.id);');
fs.writeFileSync(p1, c1);

let p2 = 'src/app/api/experts/route.ts';
let c2 = fs.readFileSync(p2, 'utf8');
c2 = c2.replace(/\{ metadata: \{ contentType: imageFile.type \} \}/g, '{ contentType: imageFile.type } as any');
fs.writeFileSync(p2, c2);

let p2b = 'src/app/api/seed/route.ts';
let c2b = fs.readFileSync(p2b, 'utf8');
c2b = c2b.replace(/\{ metadata: \{ contentType: "image\/jpeg" \} \}/g, '{ contentType: "image/jpeg" } as any');
fs.writeFileSync(p2b, c2b);

// 3. fix expert-board p any
let p3 = 'src/app/expert-board/page.tsx';
let c3 = fs.readFileSync(p3, 'utf8');
c3 = c3.replace(/expert\.bio\.map\(\(p\) =>/g, 'expert.bio.map((p: string) =>');
fs.writeFileSync(p3, c3);

// 4. fix insights and services
let p4 = 'src/app/insights/page.tsx';
let c4 = fs.readFileSync(p4, 'utf8');
if (!c4.includes('useParams')) {
  c4 = c4.replace(/import Link from 'next\/link';/g, "import Link from 'next/link';\nimport { useParams } from 'next/navigation';");
}
c4 = c4.replace(/<Link to=/g, '<Link href=');
fs.writeFileSync(p4, c4);

let p5 = 'src/app/services/page.tsx';
let c5 = fs.readFileSync(p5, 'utf8');
if (!c5.includes('useParams')) {
  c5 = c5.replace(/import Link from 'next\/link';/g, "import Link from 'next/link';\nimport { useParams } from 'next/navigation';");
}
c5 = c5.replace(/<Link to=/g, '<Link href=');
fs.writeFileSync(p5, c5);

console.log('Fixed');
