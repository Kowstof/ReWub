/*var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#8ec7ff',
    progressColor: 'dodgerblue'
});*/

$(document).ready(function(){
  $('.play-icon').click(function(){
    if ($(this).val() == "play-arrow") {
      $(this).val("pause");
    }
    else {
      $(this).val("play-arrow");
    }
  });
});
