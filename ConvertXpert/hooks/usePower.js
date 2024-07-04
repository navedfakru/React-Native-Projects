export const powerUnits = [
  { name: 'Joule/second (J/s)', abbreviation: 'J/s', toWatt: value => value },
  { name: 'British thermal unit/second (Btu/s)', abbreviation: 'Btu/s', toWatt: value => value * 1055.06 },
  { name: 'Metric horsepower (PS)', abbreviation: 'PS', toWatt: value => value * 735.499 },
  { name: 'Kilogram-meter/second (kg-m/s)', abbreviation: 'kg-m/s', toWatt: value => value * 9.80665 },
  { name: 'Kilocalorie/second (kcal/s)', abbreviation: 'kcal/s', toWatt: value => value * 4184 },
  { name: 'Watt (W)', abbreviation: 'W', toWatt: value => value },
  { name: 'Imperial horsepower (hp)', abbreviation: 'hp', toWatt: value => value * 745.7 },
  { name: 'Foot-pound/second (ft·lb/s)', abbreviation: 'ft·lb/s', toWatt: value => value * 1.35582 },
  { name: 'Newton-meter/second (N·m/s)', abbreviation: 'N·m/s', toWatt: value => value },
  { name: 'Kilowatt (kW)', abbreviation: 'kW', toWatt: value => value * 1000 },
];

export const powerUnitsText = {
  "Joule/second (J/s)": "J/s",
  "British thermal unit/second (Btu/s)": "Btu/s",
  "Metric horsepower (PS)": "PS",
  "Kilogram-meter/second (kg-m/s)": "kg-m/s",
  "Kilocalorie/second (kcal/s)": "kcal/s",
  "Watt (W)": "W",
  "Imperial horsepower (hp)": "hp",
  "Foot-pound/second (ft·lb/s)": "ft·lb/s",
  "Newton-meter/second (N·m/s)": "N·m/s",
  "Kilowatt (kW)": "kW",
};

export function usePowerConvert(value, fromUnit, toUnit) {
  const from = powerUnits.find(unit => unit.abbreviation === fromUnit);
  const to = powerUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInWatt = from.toWatt(value);
  let convertedValue;

  convertedValue = valueInWatt / to.toWatt(1);

  return convertedValue;

  // if (to.abbreviation === 'J/s') {
  //   convertedValue = valueInWatt;
  // } else if (to.abbreviation === 'Btu/s') {
  //   convertedValue = valueInWatt / 1055.06;
  // } else if (to.abbreviation === 'PS') {
  //   convertedValue = valueInWatt / 735.499;
  // } else if (to.abbreviation === 'kg-m/s') {
  //   convertedValue = valueInWatt / 9.80665;
  // } else if (to.abbreviation === 'kcal/s') {
  //   convertedValue = valueInWatt / 4184;
  // } else if (to.abbreviation === 'W') {
  //   convertedValue = valueInWatt;
  // } else if (to.abbreviation === 'hp') {
  //   convertedValue = valueInWatt / 745.7;
  // } else if (to.abbreviation === 'ft·lb/s') {
  //   convertedValue = valueInWatt / 1.35582;
  // } else if (to.abbreviation === 'N·m/s') {
  //   convertedValue = valueInWatt;
  // } else if (to.abbreviation === 'kW') {
  //   convertedValue = valueInWatt / 1000;
  // }

  // return convertedValue;
}
