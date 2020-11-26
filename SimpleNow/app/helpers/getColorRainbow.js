var Rainbow = require('rainbowvis.js');

function getColorRainbow(rangeMin, rangeMax, colors) {
  const rainbow = new Rainbow();
  rainbow.setSpectrum(...colors);
  rainbow.setNumberRange(rangeMin, rangeMax);

  let count = rangeMin;
  const result = [];

  while (count < rangeMax) {
    const nextcolor = `#${rainbow.colourAt(count)}`;
    result.push(nextcolor);
    count += 1;
  }

  return result;
}

export default getColorRainbow;
