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
