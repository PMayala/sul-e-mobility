// export-src.js
// Run from inside /src

const fs = require("fs");
const path = require("path");

const SRC_DIR = __dirname; // <-- read current folder instead of src/src
const OUTPUT_FILE = path.join(__dirname, "src_dump.txt");

function readDirectory(dir, output = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      readDirectory(fullPath, output);
    } else {
      const ext = path.extname(fullPath);
      if ([".ts", ".tsx", ".js", ".jsx", ".css", ".md"].includes(ext)) {
        const content = fs.readFileSync(fullPath, "utf8");
        output.push({
          file: fullPath.replace(__dirname, ""),
          content,
        });
      }
    }
  }

  return output;
}

const allFiles = readDirectory(SRC_DIR);

let outputText = "### SOURCE CODE DUMP (SRC)\n\n";

allFiles.forEach(({ file, content }) => {
  outputText += `\n\n==============================\n`;
  outputText += `FILE: ${file}\n`;
  outputText += `==============================\n\n`;
  outputText += content + "\n";
});

fs.writeFileSync(OUTPUT_FILE, outputText, "utf8");

console.log("DONE! Export saved to:", OUTPUT_FILE);
