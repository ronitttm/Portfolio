function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectsCarousel = document.querySelector(".projects-carousel");
const projectsPrev = document.getElementById("projects-prev");
const projectsNext = document.getElementById("projects-next");

function scrollProjects(direction = 1) {
  if (!projectsCarousel) return;
  projectsCarousel.scrollBy({
    left: direction * projectsCarousel.clientWidth,
    behavior: "smooth",
  });
}

if (projectsCarousel) {
  if (projectsPrev) {
    projectsPrev.addEventListener("click", () => scrollProjects(-1));
  }
  if (projectsNext) {
    projectsNext.addEventListener("click", () => scrollProjects(1));
  }
}
