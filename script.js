let video = document.getElementById("vid1");

video.addEventListener('loadedmetadata', function() {
    this.currentTime = 96;
  }, true);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const objects = document.querySelectorAll(".arrow");
const overlay = document.querySelector(".overlay")
const awards = document.querySelectorAll(".award");
const title = document.querySelector(".title")

objects.forEach(object => observer.observe(object))
observer.observe(overlay);
awards.forEach(award => observer.observe(award));
observer.observe(title);