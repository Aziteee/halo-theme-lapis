import "./styles/main.css";
import "./styles/lapis/lapis.css";
import "./styles/lapis/lapis-dark.css";
import "virtual:uno.css";

export function init() {
  document.querySelectorAll(".menu-button").forEach((button) => {
    if (button.getAttribute("href") === window.location.pathname) {
      button.classList.add("selected");
      button.classList.add("shadow-button");
    }
  });
}

export function enableResizeImage() {
  // Resize images automatically, set width to 80%, or 100% for small screens
  function resizeImage(): void {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(".write img");
    const screenWidth: number = window.innerWidth;

    images.forEach((img: HTMLImageElement) => {
      img.removeAttribute("width");
      img.removeAttribute("height");

      const aspectRatio: number = img.naturalHeight / img.naturalWidth;
      if (aspectRatio > 1.5) {
        img.style.height = "300px";
      } else {
        if (screenWidth > 768) {
          img.style.width = "80%";
        } else {
          img.style.width = "100%";
        }
      }

      // Center the image
      (img.parentElement as HTMLParagraphElement).style.textAlign = "center";
    });
  }
  resizeImage();

  window.addEventListener("resize", resizeImage);
}
