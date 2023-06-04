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

links.forEach(link => observer.observe(link));
