// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec, index) => {
    gsap.to(sec, {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: index * 0.2,
      ease: "power3.out"
    });
  });

  const toggle = document.getElementById('themeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
    });
});