// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

document.querySelector(
  "#root"
).innerHTML = `${Header} ${Nav} ${Main} ${Footer}`;
