import "./styles/main.css";
import "./styles/lapis/lapis.css";
import "./styles/lapis/lapis-dark.css";
import "virtual:uno.css";

export function init() {
  document.querySelectorAll(".menu-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const href = button.getAttribute("href");
      window.location.href = href as string;
    });
    if (button.getAttribute("href") === window.location.pathname) {
      button.classList.add("selected");
    }
  });
}
