/*var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#8ec7ff',
    progressColor: 'dodgerblue'
});*/

$(document).ready(function(){
  $('.play-icon').click(function(){
      console.log("stuf");
    if ($('.play-icon').hasClass("fa-play")) {
      $('.play-icon').removeClass("fa-play");
      $('.play-icon').addClass("fa-pause");
    }
    else {
      $('.play-icon').removeClass("fa-pause");
      $('.play-icon').addClass("fa-play");
    }
  });
});
