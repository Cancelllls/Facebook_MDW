const fs = require('fs');
const path = require('path');

const baseDir = '/workspaces/Facebook_MDW/FullScreenMario_New';
const scriptList = fs.readFileSync('script_list.txt', 'utf8').split('\n').filter(Boolean);

let bundledJs = '';

scriptList.forEach(file => {
    const filePath = path.join(baseDir, file.trim());
    if (fs.existsSync(filePath)) {
        console.log('Adding: ' + file);
        bundledJs += `\n/* --- START FILE: ${file} --- */\n`;
        bundledJs += fs.readFileSync(filePath, 'utf8');
        bundledJs += `\n/* --- END FILE: ${file} --- */\n`;
    } else {
        console.warn('File not found: ' + filePath);
    }
});

fs.writeFileSync('bundled_mario.js', bundledJs);
console.log('Bundled JS size: ' + (bundledJs.length / 1024).toFixed(2) + ' KB');