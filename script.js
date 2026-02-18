function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// DARK MODE TOGGLE
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save preference to Local Storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Check Local Storage on page load
// If the user previously chose 'dark', apply it immediately
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}