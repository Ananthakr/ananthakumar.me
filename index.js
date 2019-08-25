console.log("👋 Hola!");
const switcher = document.getElementsByClassName("switch")[0];
const root = document.getElementsByTagName("html")[0];

// detects if dark mode is available, for default setup
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
root.className = isDarkMode ? "dark" : "light";

switcher.addEventListener("click", () => {
  root.className = root.className === "light" ? "dark" : "light";
});
