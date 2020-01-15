function createSourceHTML(resources) {
  return resources
    .map(({ title, sources }) => {
      return `
      <article>
        <h2>${title}</h2>
        <img src=${pictures}/>
        <p>${sources}</p>
      </article>
    `;
    })
    .join(" ");
}

export default ({ resources }) => `
  ${createSourceHTML(resources)}
`;
export default `<div class="mobile-hidden"></div>
      <div id="Organized" class="flex align-center justify-center"></div>
      <div id="Resources" class="flex flex--wrap justify-space-around">
        <div class="card">
          <h2>AGILE & Business Sources</h2>
          <img src="https://theagilecoach.com/wp-content/uploads/2019/01/Agile-Coach-Logo11-1-300x225.jpg" class="img" alt="Agile Coach Logo"/>
          <h3>These skills can make you competitive in today's job market!</h3>
          <p><a href="https://wireframe.cc/">Wire framing</a></p>
          <p><a   href="https://www.draw.io/">Wire Framing and Planning</p></p>
          <p><a href="https://www.youtube.com/watch?v=oheekef7oJk">Scrum Fun</a></p>
          <p><a href="https://craigsmith.id.au/2015/12/03/yow-2015-40-agile-methods-in-40-minutes/">Agile Methods</a></p>
          <p><a href="https://www.corpedgroup.com/resources/ba-tools.asp">Business Analis</a></p>
          <p><a href="https://courses.smartpassiveincome.com/p/build-your-own-brand">Branding Your Website</a></p>
          <p><a href="https://www.freecodecamp.org/news/writing-a-killer-software-engineering-resume-b11c91ef699d/">Resume Ideas</a>  < /p>
          <p><a href="http://thecodebarbarian.com/my-3-favorite-javascript-interview-questions.html">Possible Interview Questions</a></p>
          <p><a href="https://scrumguides.org/scrum-guide.html">Scrum Guide</a></p>
          <p><a href="https://www.investintech.com/resources/articles/excelcheatsheet/">Excel Cheat-sheet</a></p>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/GitHub_Logo.png/800px-GitHub_Logo.png"class="img" alt="Git Logo"/>
          <h3>Github is life, and Gitbash is your link. <b class="term">REMEMBER TO COMMIT OFTEN</b>. Use the gitbook [search query] command to search through Savvy Coders for more juicy brain food.</h3>
          <p><a href="https://github.com/MunGell/awesome-for-beginners">Beginner friendly Projects</a></p>
          <p><a href="https://www.codetriage.com/">Open Source Projects (to see what is out there)</a></p>
          <p><a href="https://lab.github.com/">ALL of GIT Knowledge <b class="term">*AWESOME*</b></a></p>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" class="img" alt="JS Shield"/>
          <h3>Overwhelmed with the amount of resources online and in <b class="term">SLACK</b>? </h3>
          <p><a href="https://www.hackerrank.com/">Practice Code - Get Hired</a></p>
          <p><a href="https://www.fizzbuzz.com/">Fizz Buzz</a></p>
          <p><a href="https://www.youtube.com/channel/UCE2hluTBKYrp0JiZldgp2pw">MANAV'S CHANNEL</a></p>
          <p><a href="https://codepen.io/">GOOD PLACE TO PRACTICE</a></p>
          <p><a href="https://www.30secondsofcode.org/list">Creative code Snippets</a></p>
          <p><a href="https://medium.com/better-programming/how-to-start-using-map-filter-and-reduce-e01edba0d81">Map/Filter/Reduce</a></p>
          <p><a href="https://www.w3schools.com/howto/default.asp">HOW TO: EVERYTHING</a></p>
          <p><a href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript">Classes in JS</a></p>
          <p><a href="https://html-css-js.com/">ALL things HTML/CSS/JS</a></p>
          <p><a href="https://medium.com/@hardikpthv/object-destructuring-in-javascript-25aeaa207861">Object Destructuring Easy Example</a></p>
          <p><a href="https://www.freecodecamp.org/news/10-js-util-functions-in-reduce/?fbclid=IwAR3ds62yMbsgvEH4hJk-QpPorWIPde4UqXkSDh0DuHkOU7BT56PMAbZfr1U">JS Functions for YOUR LIB</a></p>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png" class="img" alt="CSS Shield"/>
          <h3>MDN is your friend...</h3>
          <p><a href="https://material.io/resources/color/#!/">Color Scheme</a></p>
          <p><a href="https://greensock.com/">ANIMATION</a></p>
          <p><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox Guide</a></p>
          <p><a href="https://drafts.csswg.org/css-nesting/">CSS Nesting</a></p>
          <p><a href="https://type-scale.com/">Text scaling</a></p>
          <p><a href="https://mycolor.space/">Color Schemes</a></p>
          <p><a href="https://syntax.fm/show/068/design-tips-for-developers">DESIGN Tips</a></p>
          <p><a href="https://mothereffinghsl.com/">Color Finder</a></p>
          <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">MDN CSS Custom Properties</a></p>
          <p><a href="https://www.templatemonster.com/blog/how-to-add-social-media-icons-website/">Add Social Media Icons</a></p>
          <p><a href="https://imagecolorpicker.com/en">Color Picker from Image</a></p>
          <p><a href="https://flexboxfroggy.com/">Flexbox Frog FUN!</a></p>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" class="img" alt="HTML Shield"/>
          <h3>MDN is your <b class="term">BEST FRIEND</b>!</h3>
          <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_element">MDN HTML</a></p>
          <p><a href="https://www.notion.so/HTML-a718282f707944c0913199678b0dac4e">MANAV'S HTML HELP</a></p>
          <p><a href="https://docs.emmet.io/abbreviations/syntax/">Abbreviations</a></p>
          <p><a href="https://www.rapidtables.com/web/html/html-codes.html">More HTML</a></p>
          <p><a href="https://fonts.google.com/">Google Fonts</a></p>
          <p><a href="https://www.templatemonster.com/blog/how-to-add-social-media-icons-website/">Social Media <b class="term">ICONS</b>!</a></p>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png" class="img" alt="Markdown Logo"/>
          <h3>Don't stress about markdown, you can have this down in no time!</h3>
          <p><a href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat-sheet</a></p>
          <p><a href="https://dev.to/soshace/markdown-cheat-sheet-definitive-guide-to-markdown-markdown-resources-n15">Markdown Cheat-sheet 2</a></p>
          <p><a href="https://devhints.io/markdown">Simple Breakdown of Markdown</a></p>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/469px-Firebase_Logo.svg.png"class="img" alt="Random Image"/>
          <h3>Some sources out there are NOT the greatest. If you find one that we missed, should remove, or add, please let us know!</h3>
          <p><a href="https://firebase.google.com/?gclid=CjwKCAiAjMHwBRAVEiwAzdLWGOapwmV529uUhzE1mNnB975sRa8AkrMVxqquuJ73HoO4ICEtm8CrgxoCq9YQAvD_BwE"></a></p>
          <p><a href="https://hackr.io/tutorials/learn-firebase">Firebase Tutorial</a></p>
          <p><a href="https://www.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352">Firebase in 2 days</a></p>
          <p><a href="https://medium.com/wolox-driving-innovation/fighting-back-fire-with-firebase-dc3e47021a81">FIREbase</a></p>
          <p><a href="https://www.lynda.com/Firebase-tutorials/9020-0.html">Firebase Tutorial $$</a></p>
          <p><a href="https://www.udemy.com/course/learning-firebase/">Firebase Training $</a></p>
        </div>
      </div>`;
