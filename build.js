const fs = require('fs');
const path = require('path');

// Read the header file
const header = fs.readFileSync('header.html', 'utf8');

// List of HTML files to process (add all pages that should include the header)
const pages = [
    'index.html',
    'special.html',
    // add other pages like about.html, mission.html, products.html, proof.html, contact.html, ef.html, pl.html, ep2.html, fc.html
];

pages.forEach(page => {
    const filePath = path.join(__dirname, page);
    if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  ${page} not found – skipping.`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace the include marker with the header content
    content = content.replace('<!--#include header -->', header);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${page}`);
});

console.log('🎉 All pages updated with shared header.');