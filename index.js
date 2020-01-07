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
