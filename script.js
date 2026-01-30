console.log("JavaScript loaded successfully.");

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Visual proof JS is working
  setTimeout(() => {
    app.classList.add("active");
    console.log("CSS class applied by JS.");
  }, 500);
});
