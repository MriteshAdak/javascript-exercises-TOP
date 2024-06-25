const convertToCelsius = function(inputTemp)
{
  const inCelsius = (inputTemp - 32) * 5 / 9;
  return Number(inCelsius.toFixed(1));
};

const convertToFahrenheit = function(inputTemp)
{
  const inFahrenheit = (9 / 5) * inputTemp + 32; 
  return Number(inFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
