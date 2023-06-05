const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("show");
      } else {
          entry.target.classList.remove("show");
      }
  })
})

const links = document.querySelectorAll("a");
const arrows = document.querySelectorAll(".arrow");

links.forEach((link) => observer.observe(link));
arrows.forEach((arrow) => observer.observe(arrow));