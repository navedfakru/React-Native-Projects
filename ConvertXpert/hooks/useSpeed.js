export const speedUnits = [
  { name: 'Speed of light (c)', abbreviation: 'c', toMeterPerSecond: value => value * 299792458 },
  { name: 'Kilometer/second (km/s)', abbreviation: 'km/s', toMeterPerSecond: value => value * 1000 },
  { name: 'Mile/hour (mph)', abbreviation: 'mph', toMeterPerSecond: value => value * 0.44704 },
  { name: 'Mach (Ma)', abbreviation: 'Ma', toMeterPerSecond: value => value * 340.29 },
  { name: 'Inch/second (in/s)', abbreviation: 'in/s', toMeterPerSecond: value => value * 0.0254 },
  { name: 'Meter/second (m/s)', abbreviation: 'm/s', toMeterPerSecond: value => value },
  { name: 'Kilometer/hour (km/h)', abbreviation: 'km/h', toMeterPerSecond: value => value * 0.277778 },
];

export const speedUnitsText = {
  "Speed of light (c)": "c",
  "Kilometer/second (km/s)": "km/s",
  "Mile/hour (mph)": "mph",
  "Mach (Ma)": "Ma",
  "Inch/second (in/s)": "in/s",
  "Meter/second (m/s)": "m/s",
  "Kilometer/hour (km/h)": "km/h",
};

export function useSpeedConvert(value, fromUnit, toUnit) {
  const from = speedUnits.find(unit => unit.abbreviation === fromUnit);
  const to = speedUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInMeterPerSecond = from.toMeterPerSecond(value);
  let convertedValue;
  
  if (to.abbreviation === 'c') {
    convertedValue = valueInMeterPerSecond / 299792458;
  } else if (to.abbreviation === 'km/s') {
    convertedValue = valueInMeterPerSecond / 1000;
  } else if (to.abbreviation === 'mph') {
    convertedValue = valueInMeterPerSecond / 0.44704;
  } else if (to.abbreviation === 'Ma') {
    convertedValue = valueInMeterPerSecond / 340.29;
  } else if (to.abbreviation === 'in/s') {
    convertedValue = valueInMeterPerSecond / 0.0254;
  } else if (to.abbreviation === 'm/s') {
    convertedValue = valueInMeterPerSecond;
  } else if (to.abbreviation === 'km/h') {
    convertedValue = valueInMeterPerSecond / 0.277778;
  }

  return convertedValue;
}
