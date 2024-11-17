// Mousemove event for the trail effect
document.addEventListener("mousemove", (e) => {
  // Create a trail element
  const trail = document.createElement("div");
  trail.className = "trail";

  // Position the trail element at the cursor's location
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;

  // Add the trail to the document
  document.body.appendChild(trail);

  // Remove the trail after the animation ends
  setTimeout(() => {
    trail.remove();
  }, 1000); // Matches the animation duration
});

// Mousemove event for split-image effect
document.addEventListener("mousemove", (event) => {
  const container = document.querySelector(".split-container");
  if (!container) return; // Ensure the container exists

  const rect = container.getBoundingClientRect();
  const cursorX = event.clientX - rect.left; // Cursor X relative to container
  const width = rect.width;

  const percentage = (cursorX / width) * 100; // Cursor position in percentage

  // Adjust the clip-path for both images
  const imageA = document.querySelector(".image-a");
  const imageB = document.querySelector(".image-b");

  if (imageA && imageB) {
    imageA.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%)`;
    imageB.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
  }
});
