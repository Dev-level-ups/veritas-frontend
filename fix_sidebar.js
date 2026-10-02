const fs = require('fs');

let content = fs.readFileSync('app/(app)/layout.tsx', 'utf8');

const oldAsideStart = `<aside className={\`
        fixed inset-y-0 left-0 z-50 
        flex flex-col justify-between w-68 px-4 py-6 
        bg-indigo-50 dark:bg-gray-900 font-sans 
        border-r border-transparent dark:border-gray-800
        transition-transform duration-300 ease-in-out
        \${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 
        \${!isSidebarOpen ? 'md:hidden' : 'md:flex'}
      \`}>`;

const newAsideStart = `<aside className={\`
        fixed inset-y-0 left-0 z-50 
        flex flex-col justify-between py-6 
        bg-indigo-50 dark:bg-gray-900 font-sans 
        border-transparent dark:border-gray-800
        overflow-hidden whitespace-nowrap
        transition-all duration-300 ease-in-out
        \${isSidebarOpen ? 'translate-x-0 w-64 px-4 border-r' : '-translate-x-full w-64 px-4 border-r'}
        md:relative md:translate-x-0 
        \${isSidebarOpen ? 'md:w-64 md:px-4 md:border-r md:opacity-100' : 'md:w-0 md:px-0 md:border-0 md:opacity-0'}
      \`}>`;

if (content.includes(oldAsideStart)) {
    content = content.replace(oldAsideStart, newAsideStart);
    fs.writeFileSync('app/(app)/layout.tsx', content);
    console.log("Updated aside classes");
} else {
    console.log("Could not find the exact aside block to replace.");
}
