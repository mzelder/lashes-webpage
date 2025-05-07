document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar");
    loadComponent("footer");
});

async function loadComponent(componentName) {
    try {
        const response = await fetch(`/components/${componentName}.html`);
        if (!response.ok) throw new Error(`Failed to load ${componentName}`);
        
        const html = await response.text();
        document.getElementById(componentName).innerHTML = html;
      } catch (error) {
        console.error(error);
      }
}