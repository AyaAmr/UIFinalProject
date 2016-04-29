window.onload = function() {

  // audio
  var audio = document.getElementById("audio");

  // Buttons
  var playButton = document.getElementById("audio-play-pause");
  var muteButton = document.getElementById("audio-mute");

  // Sliders
  var seekBar = document.getElementById("audio-seek-bar")


  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (audio.paused == true) {
      // Play the audio
      audio.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "Pause";
      playButton.style.background = "url('images/pause-light-icon.png') 50% 50% no-repeat no-repeat #DCDEDD" ;
    } else {
      // Pause the audio
      audio.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "Play";
      playButton.style.background = "url('images/play-light-icon.png') 50% 50% no-repeat no-repeat #DCDEDD" ;

    }
  });


  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
    if (audio.muted == false) {
      // Mute the audio
      audio.muted = true;

      // Update the button text
      muteButton.innerHTML = "Unmute";
      muteButton.style.background = "url('images/mute-light-icon.png') 50% 50% no-repeat no-repeat #DCDEDD" ;

    } else {
      // Unmute the audio
      audio.muted = false;

      // Update the button text
      muteButton.innerHTML = "Mute";
      muteButton.style.background = "url('images/volume-light-icon.png') 50% 50% no-repeat no-repeat #DCDEDD" ;

    }
  });


  // Event listener for the seek bar
  seekBar.addEventListener("change", function() {
    // Calculate the new time
    var time = audio.duration * (seekBar.value / 100);

    // Update the audio time
    audio.currentTime = time;

  });


  // Update the seek bar as the audio plays
  audio.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / audio.duration) * audio.currentTime;

    // Update the slider value
    seekBar.value = value;

    var val = ($('#audio-seek-bar').val() - $('#audio-seek-bar').attr('min')) / ($('#audio-seek-bar').attr('max') - $('#audio-seek-bar').attr('min'));
    $('#audio-seek-bar').css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #F39431), '
                + 'color-stop(' + val + ', #C7C8C9)'
                + ')'
                );
  });

  // Pause the audio when the seek handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    audio.pause();
  });

  // Play the audio when the seek handle is dropped
  seekBar.addEventListener("mouseup", function() {
    audio.play();
  });

}
