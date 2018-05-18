/*var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#8ec7ff',
    progressColor: 'dodgerblue'
});*/

$(document).ready(function(){
  $('.play-icon').click(function(){
    if ($(this).text() == "play-arrow") {
      $(this).text() = "pause";
    }
    else {
      $(this).text() = "play-arrow";
    }
  });
});
