// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

import * as state from "./store";

import Navigo from "navigo";
const router = new Navigo(location.origin);
location.origin;
router;

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `${Header(st)} ${Nav(
    state.Links
  )} ${Main(st)} ${Footer(st)}`;

  render();
}



router.on(":page", params => {
  console.log(params.page);
});

on("/", () => render()) .recolve())
<a class="button"><a href="./_link.tolowerCase"/" data-nagio#>qdt lehone""Orga]ized"}
} data navigo.> data navigo>${link"}</a></li>,

router.upread list

function createListHTML(links){
  return links .map(link=> `<a class="button"><a href="./${_link.tolowerCase()" data-navigo>${link}</a></li>`).join(" ");
}
