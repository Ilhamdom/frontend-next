const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const userComponentsDir = path.join(projectRoot, 'app', 'components', 'user');
const targetComponentsDir = path.join(projectRoot, 'app', 'components');

// 1. Move and rename User components
if (fs.existsSync(userComponentsDir)) {
  const files = fs.readdirSync(userComponentsDir);
  for (const file of files) {
    if (file.startsWith('User') && file.endsWith('.tsx')) {
      const newName = file.replace(/^User/, '');
      const srcPath = path.join(userComponentsDir, file);
      const destPath = path.join(targetComponentsDir, newName);
      let content = fs.readFileSync(srcPath, 'utf8');
      content = content.replace(/User([A-Z][a-zA-Z0-9]*)/g, '$1');
      fs.writeFileSync(destPath, content);
      console.log(`Created ${newName}`);
    }
  }
}

// 2. We don't need Admin components since User ones provide better UI
const adminComponentsDir = path.join(projectRoot, 'app', 'components', 'admin');
// (will delete folders later)

// Recursively find all tsx files
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
  // Don't modify the newly created components inside app/components/ 
  // (we already replaced things inside them, although running again wouldn't hurt much, but let's exclude the root components dir if we want, wait it's fine)
  
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace import paths
  // e.g. import UserSidebar from "../../components/user/UserSidebar" 
  //   -> import Sidebar from "../../components/Sidebar"
  content = content.replace(/\/components\/(user|admin)\/(User|Admin)([A-Za-z0-9]+)/g, '/components/$3');
  
  // Also for relative paths that might not have /components (like in UserLayoutShell)
  // e.g. import UserSidebar from "./UserSidebar"
  // Wait, we already processed the new components. We just need to fix usages in app/[slug] etc.

  // Replace component usages
  // <UserSidebar -> <Sidebar, UserSidebar -> Sidebar
  // <AdminInfoCard -> <InfoCard, AdminInfoCard -> InfoCard
  content = content.replace(/\b(User|Admin)([A-Z][a-zA-Z0-9]*)(?=\b)/g, '$2');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}

// Cleanup old dirs
fs.rmSync(userComponentsDir, { recursive: true, force: true });
fs.rmSync(adminComponentsDir, { recursive: true, force: true });
console.log('Cleanup complete.');
