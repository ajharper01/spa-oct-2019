// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

const state = {
  Home: {
    heading: "Home"
  },
  Contact: {
    heading: "Contact"
  },
  Resources: {
    heading: "Resources"
  },
  Keep: {
    heading: "Keep"
  },
  Method: {
    heading: "Method"
  }
};

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `${Header(st)} ${Nav(st)} ${Main(
    st
  )} ${Footer(st)}`;
}

render();
//TODO: Listen for clicks on our menu and log what was clicked on.
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function() {
    event.preventDefault();
    render(state[capitalize(event.target.textContent)]);
  });
});
