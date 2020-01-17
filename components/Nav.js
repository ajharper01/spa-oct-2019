function createListHTML(links) {
  return links
    .map(
      link =>
        `<a href="./${link.toLowerCase()}/" data-navigo> <li class="button">${link}</li></a>`
    )
    .join(" ");
}

export default st => `
<nav>
      <ul class="flex justify-space-around">
        ${createListHTML(st)}
      </ul>
    </nav>
`;
