function createListHTML(links){
  return links.map(link=> (<li>${link}</li>))
}

export default () => { (parameter) st: any
  console.log("nav got st", st);
  return `<nav>
  <ul class="flex justify-space-around">
    ${createListHTML(links)}
    <li class="button"><a href="#">Home</a></li class="button">
    <li class="button"><a href="./Contact/">Contact</a></li class="button">
    <li class="button"><a href="./Resources/">Resources</a></li class="button">
    <li class="button"><a href="./Keep/">Keep</a></li class="button">
    <li class="button"><a href="./Method/">Method</a></li>
  </ul>
</nav>`;
};
