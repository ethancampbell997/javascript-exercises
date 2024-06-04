const convertToCelsius = function(fahren) {
  let cels = fahren - 32;
  cels *= 5;
  cels /= 9;
  cels = Math.round(cels * 10) / 10;
  return cels;
};

const convertToFahrenheit = function(cels) {
  let fahren = cels * 9;
  fahren /= 5;
  fahren += 32;
  fahren = Math.round(fahren * 10) / 10;
  return fahren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
