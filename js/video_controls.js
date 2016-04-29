window.onload = function() {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");

  // Sliders
  var seekBar = document.getElementById("seek-bar")


  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      // Play the video
      video.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "Pause";
      playButton.style.background = "url('images/pause-icon.png') 50% 50% no-repeat no-repeat #5A5B5C" ;
    } else {
      // Pause the video
      video.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "Play";
      playButton.style.background = "url('images/play-icon.png') 50% 50% no-repeat no-repeat #5A5B5C" ;

    }
  });


  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

      // Update the button text
      muteButton.innerHTML = "Unmute";
      muteButton.style.background = "url('images/mute-icon.png') 50% 50% no-repeat no-repeat #5A5B5C" ;

    } else {
      // Unmute the video
      video.muted = false;

      // Update the button text
      muteButton.innerHTML = "Mute";
      muteButton.style.background = "url('images/volume-icon.png') 50% 50% no-repeat no-repeat #5A5B5C" ;

    }
  });


  // Event listener for the seek bar
  seekBar.addEventListener("change", function() {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;

  });


  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;

    var val = ($('#seek-bar').val() - $('#seek-bar').attr('min')) / ($('#seek-bar').attr('max') - $('#seek-bar').attr('min'));
    $('#seek-bar').css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #F39431), '
                + 'color-stop(' + val + ', #fff)'
                + ')'
                );
  });

  // Pause the video when the seek handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });

  // Play the video when the seek handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });

}
