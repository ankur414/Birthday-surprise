/**
 * Navigation Logic
 * Switches between the different sections/pages
 */
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}
/**
 * Background Decoration
 * Creates random floating hearts on load
 */
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("heart-bg");
  const heartCount = 15;
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.opacity = Math.random() * 0.5;
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    bg.appendChild(heart);
  }
});
