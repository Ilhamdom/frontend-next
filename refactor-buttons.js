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

const allFiles = [...walk(path.join(projectRoot, 'app')), ...walk(path.join(projectRoot, 'src'))];

for (const file of allFiles) {
  if (file.includes('Button.tsx') || file.includes('ButtonGroup.tsx') || file.includes('Card.tsx')) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Replace size="sm" -> size="32", "md" -> "44", "lg" -> "48" inside <Button ...> components
  // Need to make sure it's for <Button.
  content = content.replace(/<Button([^>]*?)size=(["'])sm\2([^>]*?)>/g, '<Button$1size=$232$2$3>');
  content = content.replace(/<Button([^>]*?)size=(["'])md\2([^>]*?)>/g, '<Button$1size=$244$2$3>');
  content = content.replace(/<Button([^>]*?)size=(["'])lg\2([^>]*?)>/g, '<Button$1size=$248$2$3>');

  // 2. Replace table-action-icon-btn with <Button variant="tertiary" size="32" iconOnly ...>
  let replacedTableAction = false;
  content = content.replace(/<button([^>]*?)className=(["'])(.*?table-action-icon-btn.*?)\2([^>]*?)>([\s\S]*?)<\/button>/g, (m, g1, q, cls, g3, children) => {
    replacedTableAction = true;
    
    // Check if there was other classes that shouldn't be lost.
    // Usually it's just 'table-action-icon-btn table-action-icon-btn--neutral'
    // Let's just strip 'table-action-icon-btn' and 'table-action-icon-btn--neutral' and see if anything is left
    let remainingClass = cls.replace(/table-action-icon-btn(--neutral)?/g, '').trim();
    let classFragment = remainingClass ? ` className="${remainingClass}" ` : '';
    
    // We remove the old CSS and use our native variant
    return `<Button variant="secondary" size="32" iconOnly${classFragment}${g1}${g3}>${children}</Button>`;
  });

  if (replacedTableAction) {
    if (!content.includes('import { Button }')) {
      // Find a good place to inject the import
      if (content.includes('import React')) {
        content = content.replace('import React', "import { Button } from '@/components/ui/Button';\nimport React");
      } else {
        content = "import { Button } from '@/components/ui/Button';\n" + content;
      }
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
