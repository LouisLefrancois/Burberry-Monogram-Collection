const cursorImage = document.querySelector("#cursor-image");

// Add a mousemove event listener to the document
document.addEventListener("mousemove", (e) => {
  // Set the position of the cursor-image element to be centered on the mouse pointer
  cursorImage.style.left = e.clientX - cursorImage.offsetWidth / 2 + "px";
  cursorImage.style.top = e.clientY - cursorImage.offsetHeight / 2 + "px";
});

// Add a mouseenter event listener to all elements with the .hover-area class
const hoverAreas = document.querySelectorAll(".hover-area");
hoverAreas.forEach((hoverArea) => {
  hoverArea.addEventListener("mouseenter", (e) => {
    // Get the data-cursor-image attribute value and set it as the background image of the cursor-image element
    const imageSrc = e.target.getAttribute("data-cursor-image");
    cursorImage.style.backgroundImage = `url('${imageSrc}')`;

    // Show the cursor-image element
    cursorImage.style.opacity = 1;
  });

  hoverArea.addEventListener("mouseleave", (e) => {
    // Hide the cursor-image element
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