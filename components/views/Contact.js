export default `<div>
        <form class="contact-form" method="POST" name="contact">
          <div>
            <label for="Name">Name:</label>
            <input type="text" name="Name" id="Name" placeholder="Full Name">
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input type="Tel" name="Phone" id="Phone"placeholder="(###)-###-####">
          </div>
          <div>
            <label for="GitHub">GitHub:</label>
            <input type="URL" name="GitHub" id="GitHub" placeholder="github.com/yourgitaccount">
          </div>
          <div>
            <label for="Netlify">Netlify:</label>
            <input type="URL" name="Netlify" id="Netlify"placeholder="Your Link">
          </div>
          <div>
            <label for="Msg">Request:</label>
            <textarea name="Msg" id="Msg" cols="80" rows="10"placeholder="Let us know how we can help!"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>`;
