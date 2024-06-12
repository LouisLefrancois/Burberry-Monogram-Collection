const cursorImage = document.querySelector("#cursor-image");

document.addEventListener("mousemove", (e) => {
  cursorImage.style.left = e.clientX - cursorImage.offsetWidth / 2 + "px";
  cursorImage.style.top = e.clientY - cursorImage.offsetHeight / 2 + "px";
});

const hoverAreas = document.querySelectorAll(".hover-area");
hoverAreas.forEach((hoverArea) => {
  hoverArea.addEventListener("mouseenter", (e) => {
    const imageSrc = e.target.getAttribute("data-cursor-image");
    cursorImage.style.backgroundImage = `url('${imageSrc}')`;

    cursorImage.style.opacity = 1;
  });

  hoverArea.addEventListener("mouseleave", (e) => {
    cursorImage.style.opacity = 0;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const titles = document.querySelectorAll(".title-footer");

  titles.forEach(title => {
    title.addEventListener('click', function() {
      var value = this.getAttribute("aria-expanded");
      var contentId = this.getAttribute("aria-controls");
      var content = document.getElementById(contentId);

      if (value === "true") {
        this.setAttribute("aria-expanded", "false");
        content.setAttribute("hidden", "");
      } else {
        this.setAttribute("aria-expanded", "true");
        content.removeAttribute("hidden");
      }
    });
  });
});