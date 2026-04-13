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

const allFiles = [...walk(path.join(projectRoot, 'app')), ...walk(path.join(projectRoot, 'src', 'app'))];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace any relative import to LayoutShell with the absolute alias
  // For example: from "../components/LayoutShell" -> from "@/components/LayoutShell"
  content = content.replace(/from\s+['"](\.+\/)+([A-Za-z0-9_-]+\/)*components\/LayoutShell['"]/g, 'from "@/components/LayoutShell"');
  
  // Actually, let's just make it a blanket replace for any of those new components:
  const components = ['LayoutShell', 'Sidebar', 'Topbar', 'InfoCard', 'PageHeader', 'ProgressBar', 'StatCard', 'StatusBadge', 'TableCard'];
  
  for (const component of components) {
      const regex = new RegExp(`from\\s+['"](\\.\\.+\\/)+([A-Za-z0-9_-]+\\/)*components\\/${component}['"]`, 'g');
      content = content.replace(regex, `from "@/components/${component}"`);
      // also replacing the incorrectly depth ones: from "../components/X"
      const regex2 = new RegExp(`from\\s+['"]\\.\\.\/components\\/${component}['"]`, 'g');
      content = content.replace(regex2, `from "@/components/${component}"`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated paths in ${file}`);
  }
}
