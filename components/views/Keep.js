export default `<div>
        <div class="header">
        </div>
        <div>
          <h2>Audio Only</h2>
          <figure><img src ="https://raw.githubusercontent.com/ajharper01/spa-oct-2019/master/Keep/audioreclink.jpg" alt="Audio Recording Link"></figure>
            <audio controls>
              <source src="viper.mp3" type="audio/mp3">
              <source src="viper.ogg" type="audio/ogg">
              <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
            </audio>
            <p>Click the microphone to start recording audio only.</p>
        </div>
        <div>
          <h2>Video</h2>
            <p>Click the camera to start recording video for group projects.</p>
          <figure><img src="https://raw.githubusercontent.com/ajharper01/spa-oct-2019/master/Keep/videorecordinglink.jpg"
            alt="Video Recording Link"
            /></figure>
            <video controls width="400" height="400"
            autoplay loop muted
            poster="poster.png">
              <source src="rabbit320.mp4" type="video/mp4">
              <source src="rabbit320.webm" type="video/webm">
              <p>Your browser doesn't support HTML video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
            </video>
        </div>
      </div>`;
