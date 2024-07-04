export const temperatureUnits = [
  { name: 'Degree Rankine (°R)', abbreviation: '°R', toKelvin: value => value * (5/9) },
  { name: 'Degree Celsius (°C)', abbreviation: '°C', toKelvin: value => value + 273.15 },
  { name: 'Degree Reaumur (°Re)', abbreviation: '°Re', toKelvin: value => value * (5/4) + 273.15 },
  { name: 'Degree Fahrenheit (°F)', abbreviation: '°F', toKelvin: value => (value + 459.67) * (5/9) },
  { name: 'Kelvin (K)', abbreviation: 'K', toKelvin: value => value },
];

export const temperatureUnitsText = {
  "Degree Rankine (°R)": "°R",
  "Degree Celsius (°C)": "°C",
  "Degree Reaumur (°Re)": "°Re",
  "Degree Fahrenheit (°F)": "°F",
  "Kelvin (K)": "K",
};

export function useTemperatureConvert(value, fromUnit, toUnit) {
  const from = temperatureUnits.find(unit => unit.abbreviation === fromUnit);
  const to = temperatureUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInKelvin = from.toKelvin(value);
  let convertedValue;
  
  if (to.abbreviation === '°R') {
    convertedValue = valueInKelvin * (9/5);
  } else if (to.abbreviation === '°C') {
    convertedValue = valueInKelvin - 273.15;
  } else if (to.abbreviation === '°Re') {
    convertedValue = (valueInKelvin - 273.15) * (4/5);
  } else if (to.abbreviation === '°F') {
    convertedValue = valueInKelvin * (9/5) - 459.67;
  } else if (to.abbreviation === 'K') {
    convertedValue = valueInKelvin;
  }

  return convertedValue;
}