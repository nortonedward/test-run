#!/usr/bin/env node
/**
 * Generates component documentation from vue-docgen-api for VitePress.
 * Output: docs/.vitepress/docgen.json
 */
import { parse } from 'vue-docgen-api';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const componentsDir = join(root, 'packages/ui/src/components');
const outputPath = join(root, 'docs/.vitepress/docgen.json');

const componentFiles = [
  'UiButton.vue',
  'UiCard.vue',
  'UiHeading.vue',
  'UiLink.vue',
  'UiInput.vue',
  'UiContainer.vue',
  'UiStack.vue',
  'UiSelect.vue',
  'UiCheckbox.vue',
  'UiRadio.vue',
  'UiAlert.vue',
  'UiTabs.vue',
];

async function main() {
  const docgen = {};
  for (const file of componentFiles) {
    const filePath = join(componentsDir, file);
    try {
      const doc = await parse(filePath);
      const name = file.replace('.vue', '');
      docgen[name] = {
        props: (doc.props || []).map((p) => ({
          name: p.name,
          type: p.type?.name || '-',
          default: p.defaultValue?.value ?? '-',
          description: p.description || '',
        })),
      };
    } catch (err) {
      console.warn(`Could not parse ${file}:`, err.message);
      docgen[file.replace('.vue', '')] = { props: [] };
    }
  }
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(docgen, null, 2));
  console.log('Generated docgen.json');
}

main().catch(console.error);
