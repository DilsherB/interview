const URL = "https://source.unsplash.com/random/300x300?sig=";
const container = document.querySelector(".container");
const loadingIndicator = document.querySelector(".loading-indicator");

createImg = (numImgs = 10) => {
  // Show the loading indicator.
  loadingIndicator.style.display = "none";

  // Create the images.
  for (let i = 0; i < numImgs; i++) {
    const img = document.createElement("img");
    img.src = `${URL}${Math.floor(Math.random() * 100)}`;
    img.onload = () => {
      // Hide the loading indicator when all images have loaded.
      if (document.querySelectorAll("img:not([loaded])").length !== 0) {
        loadingIndicator.style.display = "block";
      }
    };
    container.appendChild(img);
  }
};

createImg();

// Scroll listener to load more images when the user reaches the bottom of the page.
window.addEventListener("scroll", () => {
  if (
    Math.ceil(window.scrollY) >=
    document.documentElement.scrollHeight - window.innerHeight
  ) {
    createImg();
  }
});
