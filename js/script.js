function imageGallery() {
  const highlight = document.querySelector(".apple-img");
  const previews = document.querySelectorAll(".tech-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach((preview) => preview.classList.remove("tech-achtive"));
      highlight.src = bigSrc;
      preview.classList.add("tech-achtive");
    });
  });
}

imageGallery();
