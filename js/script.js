var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#8ec7ff',
    progressColor: 'dodgerblue'
});

wavesurfer('../audio/test.mp3')
