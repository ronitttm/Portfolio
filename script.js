function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectsCarousel = document.querySelector(".projects-carousel");
const projectsNext = document.getElementById("projects-next");
let projectsIndex = 0;
let projectsAutoScroll = null;

function scrollProjects() {
  if (!projectsCarousel) return;
  const cards = projectsCarousel.querySelectorAll(".project-card");
  if (!cards.length) return;
  projectsIndex = (projectsIndex + 1) % cards.length;
  cards[projectsIndex].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}

function startProjectAutoScroll() {
  clearInterval(projectsAutoScroll);
  projectsAutoScroll = setInterval(scrollProjects, 5000);
}

if (projectsNext && projectsCarousel) {
  projectsNext.addEventListener("click", () => {
    scrollProjects();
    startProjectAutoScroll();
  });

  projectsCarousel.addEventListener("mouseenter", () => clearInterval(projectsAutoScroll));
  projectsCarousel.addEventListener("mouseleave", () => startProjectAutoScroll());
  startProjectAutoScroll();
}
