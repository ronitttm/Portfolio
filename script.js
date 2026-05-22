function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectsCarousel = document.querySelector(".projects-carousel");
const projectsPrev = document.getElementById("projects-prev");
const projectsNext = document.getElementById("projects-next");
let projectsIndex = 0;

function scrollProjects(direction = 1) {
  if (!projectsCarousel) return;
  const cards = projectsCarousel.querySelectorAll(".project-card");
  if (!cards.length) return;
  projectsIndex = (projectsIndex + direction + cards.length) % cards.length;
  cards[projectsIndex].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}

if (projectsCarousel) {
  if (projectsPrev) {
    projectsPrev.addEventListener("click", () => scrollProjects(-1));
  }
  if (projectsNext) {
    projectsNext.addEventListener("click", () => scrollProjects(1));
  }
}
