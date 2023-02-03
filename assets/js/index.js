const imageContainer = document.getElementById("image-container");

  async function getImages() {
    for (let i = 0; i < 12; i++) {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?query=hiking,mountaineering,traveling&client_id=H8jlm4V590DpLnhmytlnXOi71Nehjjs2giQZbqIEfyg"
      );
      const data = await response.json();
      const image = document.createElement("img");
      image.classList.add("image");
      image.src = data.urls.regular;
      image.alt = `Photo by ${data.user.name} on Unsplash`;
      image.addEventListener("click", () => {
        window.open(data.links.download, "_blank");
      });
      imageContainer.appendChild(image);
    }
  }

  getImages();