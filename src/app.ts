function greeting(name: string): string {
    return `Hello, ${name}!`;
}

// Select the app div
const appDiv = document.getElementById("app");

// Ensure the element exists before modifying it
if (appDiv) {
    appDiv.innerHTML += `<p>Hello, TypeScript!</p>`;
}