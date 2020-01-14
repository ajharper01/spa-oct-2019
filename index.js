// 'Destructure' each of the named components from the components directory.
import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

import * as state from "./store";

import Navigo from "navigo";

import axios from "axios";

const router = new Navigo(location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `${Header(st)} ${Nav(
    state.Links
  )} ${Main(st)} ${Footer(st)}`;

  render();
}

router

  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => render())
  .resolve();

//<a class="button"><a href="./_link.tolowerCase"/" data-nagio#>qdt lehone""Orga]ized"}
//} data navigo.> data navigo>${link"}</a></li>,

//function createListHTML(links){
//return links .map(link=> `<a class="button"><a href="./${_link.tolowerCase()" data-navigo>${link}</a></li>`).join(" ");
//}

axios

  .get("https://jsonplaceholder.typicode.com/posts")
  .then(results => {
    state.Resources.posts = results.data;
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "/Resources")
      render(state.Resources);
  })
  .catch(error => console.error(error));
