const fs = require('fs');

if (fs.existsSync('src/types/api.ts')) {
  fs.renameSync('src/types/api.ts', 'src/types/vtech.ts');
}

const replaceInFile = (file) => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/types\/api/g, 'types/vtech');
  fs.writeFileSync(file, content);
}

const files = [
  'src/data/vtechRegistry.ts',
  'src/data/vtechEndpoints.fallback.ts',
  'src/data/vtechEndpoints.generated.ts',
  'src/components/ui/ToolResultViewer.tsx',
  'src/components/ui/EndpointForm.tsx',
  'src/components/modules/UniversalToolPage.tsx',
  'src/api/apiOutput.ts',
  'src/api/universalVtech.ts'
];

files.forEach(replaceInFile);
