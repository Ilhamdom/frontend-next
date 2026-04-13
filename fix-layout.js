const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const appFiles = walk(path.join(projectRoot, 'app'));
const srcAppFiles = walk(path.join(projectRoot, 'src', 'app'));
const allFiles = [...appFiles, ...srcAppFiles];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace import Layout from "../components/Layout" ... with LayoutShell
  content = content.replace(/import\s+Layout\s+from\s+['"](.*?)\/components\/Layout['"]/g, 'import LayoutShell from "$1/components/LayoutShell"');
  
  // Replace <Layout> and </Layout> with <LayoutShell> and </LayoutShell>
  content = content.replace(/<Layout>/g, '<LayoutShell>');
  content = content.replace(/<\/Layout>/g, '</LayoutShell>');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Fixed Layout -> LayoutShell in ${file}`);
  }
}
