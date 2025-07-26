'use strict';

// ✅ Reusable toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// ✅ Sidebar Toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// ✅ Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0 && formBtn) {
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      form.checkValidity()
        ? formBtn.removeAttribute("disabled")
        : formBtn.setAttribute("disabled", "");
    });
  });
}

// ✅ Page Navigation
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
