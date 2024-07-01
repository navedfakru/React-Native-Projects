export const metricUnits = [
  { name: 'Decimeter', abbreviation: 'dm', toMeter: value => value / 10 },
  { name: 'Light year', abbreviation: 'ly', toMeter: value => value * 9.461e+15 },
  { name: 'Millimeter', abbreviation: 'mm', toMeter: value => value / 1000 },
  { name: 'Kilometer', abbreviation: 'km', toMeter: value => value * 1000 },
  { name: 'Centimeter', abbreviation: 'cm', toMeter: value => value / 100 },
  { name: 'Meter', abbreviation: 'm', toMeter: value => value },
  { name: 'Micrometer', abbreviation: 'µm', toMeter: value => value / 1e+6 },
  { name: 'Parsec', abbreviation: 'pc', toMeter: value => value * 3.086e+16 },
  { name: 'Astronomical unit', abbreviation: 'AU', toMeter: value => value * 1.496e+11 },
  { name: 'Lunar distance', abbreviation: 'LD', toMeter: value => value * 3.844e+8 },
  { name: 'Picometer', abbreviation: 'pm', toMeter: value => value / 1e+12 },
  { name: 'Nanometer', abbreviation: 'nm', toMeter: value => value / 1e+9 }
];


export const imperialUnits = [
  { name: 'Inch', abbreviation: 'in', toMeter: value => value * 0.0254 },
  { name: 'Foot', abbreviation: 'ft', toMeter: value => value * 0.3048 },
  { name: 'Yard', abbreviation: 'yd', toMeter: value => value * 0.9144 },
  { name: 'Mile', abbreviation: 'mi', toMeter: value => value * 1609.34 },
  { name: 'Nautical mile', abbreviation: 'nmi', toMeter: value => value * 1852 },
  { name: 'Furlong', abbreviation: 'fur', toMeter: value => value * 201.168 },
  { name: 'Fathom', abbreviation: 'ftm', toMeter: value => value * 1.8288 },
  { name: 'Rod', abbreviation: 'rd', toMeter: value => value * 5.0292 }
];


export const chineseUnits = [
  { name: 'Li', abbreviation: 'li', toMeter: value => value * 500 },
  { name: 'Zhang', abbreviation: 'zhang', toMeter: value => value * 3.333 },
  { name: 'Chi', abbreviation: 'chi', toMeter: value => value * 0.333 },
  { name: 'Cun', abbreviation: 'cun', toMeter: value => value * 0.0333 },
  { name: 'Fen', abbreviation: 'fen', toMeter: value => value * 0.00333 },
  { name: 'Li (cm)', abbreviation: 'li-cm', toMeter: value => value * 0.000333 },
  { name: 'Hao', abbreviation: 'hao', toMeter: value => value * 0.0000333 }
];


const units = [
  ...metricUnits,
  ...imperialUnits,
  ...chineseUnits
];


export function useLenghtConvert(value, fromUnit, toUnit) {
  const from = units.find(unit => unit.abbreviation === fromUnit);
  const to = units.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInMeters = from.toMeter(value);
  const convertedValue = valueInMeters / to.toMeter(1); // Convert from meters to the target unit

  return convertedValue;
}