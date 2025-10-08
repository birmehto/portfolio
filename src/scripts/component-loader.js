// Component Loader - Loads HTML components dynamically
document.addEventListener('DOMContentLoaded', async function() {
  
  // Component mapping
  const components = {
    'sidebar-container': './src/components/sidebar.html',
    'navbar-container': './src/components/navbar.html',
    'about-container': './src/components/about.html',
    'resume-container': './src/components/resume.html',
    'portfolio-container': './src/components/portfolio.html'
  };

  // Load component function
  async function loadComponent(containerId, componentPath) {
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        throw new Error(`Failed to load ${componentPath}`);
      }
      const html = await response.text();
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = html;
      }
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
    }
  }

  // Load all components
  const loadPromises = Object.entries(components).map(([containerId, path]) => 
    loadComponent(containerId, path)
  );

  // Wait for all components to load
  await Promise.all(loadPromises);

  // Initialize functionality after components are loaded
  initializeComponents();
});

// Initialize component functionality
function initializeComponents() {
  // Re-initialize sidebar functionality
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Re-initialize navigation functionality
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  if (navigationLinks.length > 0 && pages.length > 0) {
    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const targetPage = link.innerText.toLowerCase();

        pages.forEach((page) => {
          page.classList.toggle("active", targetPage === page.dataset.page);
        });

        navigationLinks.forEach((nav) => nav.classList.remove("active"));
        link.classList.add("active");
        window.scrollTo(0, 0);
      });
    });
  }
}