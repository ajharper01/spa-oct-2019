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

  render.updatePageLinks();
}

router

  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => render())
  .resolve();

axios

  .get("https://jsonplaceholder.typicode.com/posts")
  .then(results => {
    state.Resources.resources = results.data;
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "/Resources")
      render(state.Resources);
  })
  .catch(error => console.error(error));
