// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

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

document.querySelector(
  "#root"
).innerHTML = `${Header()} ${Nav()} ${Main()} ${Footer()}`;

//TODO: Listen for clicks on our menu and log what was clicked on.
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function() {
    event.preventDefault();
    console.log(state[event.target.textContent]);
  });
});
