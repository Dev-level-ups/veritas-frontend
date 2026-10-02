const fs = require('fs');

let content = fs.readFileSync('app/(app)/layout.tsx', 'utf8');

const oldHeaderStart = `<div className={\`flex items-center p-4 md:absolute md:top-6 md:left-6 md:z-10 md:p-0 \${isSidebarOpen ? 'md:hidden' : 'flex'}\`}>`;
const newHeaderStart = `<div className={\`flex items-center p-4 md:absolute md:top-6 md:left-6 md:z-10 md:p-0 transition-opacity duration-300 \${isSidebarOpen ? 'opacity-0 pointer-events-none md:opacity-0' : 'opacity-100 md:opacity-100'}\`}>`;

if (content.includes(oldHeaderStart)) {
    content = content.replace(oldHeaderStart, newHeaderStart);
    fs.writeFileSync('app/(app)/layout.tsx', content);
    console.log("Updated top header classes");
} else {
    console.log("Could not find the exact header block to replace.");
}
