/*var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#8ec7ff',
    progressColor: 'dodgerblue'
});*/

$(document).ready(function(){
  var audio = document.getElementById("audio");
  audio.crossOrigin = "anonymous";
  audio.src = "audio/test.mp3";
  // audio.load();

  $('.play-icon').click(function(){
    if ($('.play-icon').hasClass("fa-play")) {
      $('.play-icon').removeClass("fa-play");
      $('.play-icon').addClass("fa-pause");
      
      if(audio.readyState == 0) {
        audio.load();
        audio.play();
      } else if(audio.readyState >= 3) {
        audio.play();
      }

      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();

      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      var bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);

      var dataArray = new Uint8Array(bufferLength);

      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;

      var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          var r = barHeight + (25 * (i/bufferLength));
          var g = 250 * (i/bufferLength);
          var b = 50;

          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      }

      renderFrame();
    }
    else {
      $('.play-icon').removeClass("fa-pause");
      $('.play-icon').addClass("fa-play");
      audio.pause();
    }
  });
});

/*window.onload = function() {

  // var file = document.getElementById("thefile");
  var audio = document.getElementById("audio");
  audio.src = "audio/test.mp3";

  // file.onchange = function() {
    // var files = this.files;
  // };
};*/
