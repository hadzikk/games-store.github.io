document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const box1P = document.querySelector("#navbar .box:nth-child(1) p")
    const box1lia = document.querySelectorAll("#navbar .box:nth-child(1) ul li a")
    const icons = document.querySelectorAll("#navbar .box:nth-child(2) a i")
    const scrolled = window.scrollY > 50;

    if (scrolled) {
      navbar.classList.add("scrolled");
      box1P.style.color = "#000";
      box1lia.forEach(e => {
        e.style.color = "#000";
      });
      icons.forEach(e => {
        e.style.color = "#000";
      });
    } else {
      navbar.classList.remove("scrolled");
      box1P.style.color = "#fff";
      box1lia.forEach(e => {
        e.style.color = "#fff";
      });
      icons.forEach(e => {
        e.style.color = "#fff";
      });
    }
  });
});