const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = 'full_project_code_dump.md'; // You can change this
const ROOT_DIR = process.cwd();
const EXCLUDE_EXT = ['.png', '.jpg', '.jpeg', '.svg', '.mp4', '.woff', '.ttf', '.cr2', '.html', '.css'];
const INCLUDE_EXT = ['.js', '.ts', '.tsx', '.json', '.md', '.mjs']; // extend as needed

let output = `# Full Project Code Dump\n\nGenerated from: ${ROOT_DIR}\n\n`;

function readFilesRecursively(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (let entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            readFilesRecursively(fullPath);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (INCLUDE_EXT.includes(ext) && !EXCLUDE_EXT.includes(ext)) {
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const relativePath = path.relative(ROOT_DIR, fullPath);
                    output += `---\n\n## 📄 ${relativePath}\n\n\`\`\`${ext.replace('.', '')}\n${content}\n\`\`\`\n\n`;
                } catch (err) {
                    console.warn(`Skipped: ${fullPath} (error reading)`);
                }
            }
        }
    }
}

readFilesRecursively(ROOT_DIR);
fs.writeFileSync(OUTPUT_FILE, output);
console.log(`✅ Code dump saved to: ${OUTPUT_FILE}`);
