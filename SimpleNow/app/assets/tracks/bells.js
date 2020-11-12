var steelBell = {
  id: 'steelBell', // Must be a string, required

  url:
    'https://freesound.org/people/NoiseCollector/sounds/15842/download/15842__noisecollector__ab-ouch.wav', // Load media from the network

  title: 'NoiseCollector',
  artist: 'deadmau5',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339

  artwork:
    'https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTUzODEzNTY0NjA2MzkyMDEx/deadmau5.jpg', // Load artwork from the network
  // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
  // artwork: 'file:///storage/sdcard0/Downloads/artwork.png', // Load artwork from the file system
};

export { steelBell };
