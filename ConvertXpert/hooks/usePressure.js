export const pressureUnits = [
  { name: 'Millimeter of water (mmH2O)', abbreviation: 'mmH2O', toPascal: value => value * 9.80665 },
  { name: 'Pounds per square foot (psf)', abbreviation: 'psf', toPascal: value => value * 47.8803 },
  { name: 'Kilogram-force per square centimeter (kgf/cm²)', abbreviation: 'kgf/cm²', toPascal: value => value * 98066.5 },
  { name: 'Pounds per square inch (psi)', abbreviation: 'psi', toPascal: value => value * 6894.76 },
  { name: 'Millimeter of mercury (mmHg)', abbreviation: 'mmHg', toPascal: value => value * 133.322 },
  { name: 'Bar', abbreviation: 'bar', toPascal: value => value * 100000 },
  { name: 'Inch of mercury (inHg)', abbreviation: 'inHg', toPascal: value => value * 3386.39 },
  { name: 'Millibar (mbar)', abbreviation: 'mbar', toPascal: value => value * 100 },
  { name: 'Hectopascal (hPa)', abbreviation: 'hPa', toPascal: value => value * 100 },
  { name: 'Standard atmosphere (atm)', abbreviation: 'atm', toPascal: value => value * 101325 },
  { name: 'Kilopascal (kPa)', abbreviation: 'kPa', toPascal: value => value * 1000 },
  { name: 'Kilogram-force per square meter (kgf/m²)', abbreviation: 'kgf/m²', toPascal: value => value * 9.80665 },
  { name: 'Megapascal (MPa)', abbreviation: 'MPa', toPascal: value => value * 1000000 },
];

export const pressureUnitsText = {
  'Millimeter of water (mmH2O)': 'mmH2O',
  'Pounds per square foot (psf)': 'psf',
  'Kilogram-force per square centimeter (kgf/cm²)': 'kgf/cm²',
  'Pounds per square inch (psi)': 'psi',
  'Millimeter of mercury (mmHg)': 'mmHg',
  'Bar': 'bar',
  'Inch of mercury (inHg)': 'inHg',
  'Millibar (mbar)': 'mbar',
  'Hectopascal (hPa)': 'hPa',
  'Standard atmosphere (atm)': 'atm',
  'Kilopascal (kPa)': 'kPa',
  'Kilogram-force per square meter (kgf/m²)': 'kgf/m²',
  'Megapascal (MPa)': 'MPa',
};

export function usePressureConvert(value, fromUnit, toUnit) {
  const from = pressureUnits.find(unit => unit.abbreviation === fromUnit);
  const to = pressureUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid pressure unit');
  }

  const valueInPascal = from.toPascal(value);
  let convertedValue;

  convertedValue = valueInPascal / to.toPascal(1);

  return convertedValue;
}


// export const pressureUnits = [
//   { name: 'Millimeter of water (mmH₂O)', abbreviation: 'mmH₂O', toPascal: value => value * 9.80665 },
//   { name: 'Pounds/square foot (psf)', abbreviation: 'psf', toPascal: value => value * 47.8803 },
//   { name: 'Kilogram-force/square centimeter (kgf/cm²)', abbreviation: 'kgf/cm²', toPascal: value => value * 98066.5 },
//   { name: 'Pounds/square inch (psi)', abbreviation: 'psi', toPascal: value => value * 6894.76 },
//   { name: 'Millimeter of mercury (mmHg)', abbreviation: 'mmHg', toPascal: value => value * 133.322 },
//   { name: 'Bar', abbreviation: 'bar', toPascal: value => value * 100000 },
//   { name: 'Inch of mercury (inHg)', abbreviation: 'inHg', toPascal: value => value * 3386.39 },
//   { name: 'Millibar (mbar)', abbreviation: 'mbar', toPascal: value => value * 100 },
//   { name: 'Hectopascal (hPa)', abbreviation: 'hPa', toPascal: value => value * 100 },
//   { name: 'Standard atmosphere (atm)', abbreviation: 'atm', toPascal: value => value * 101325 },
//   { name: 'Kilopascal (kPa)', abbreviation: 'kPa', toPascal: value => value * 1000 },
//   { name: 'Kilogram-force/square meter (kgf/m²)', abbreviation: 'kgf/m²', toPascal: value => value * 9.80665 },
//   { name: 'Megapascal (MPa)', abbreviation: 'MPa', toPascal: value => value * 1000000 },
// ];

// export const pressureUnitsText = {
//   "Millimeter of water (mmH₂O)": "mmH₂O",
//   "Pounds/square foot (psf)": "psf",
//   "Kilogram-force/square centimeter (kgf/cm²)": "kgf/cm²",
//   "Pounds/square inch (psi)": "psi",
//   "Millimeter of mercury (mmHg)": "mmHg",
//   "Bar": "bar",
//   "Inch of mercury (inHg)": "inHg",
//   "Millibar (mbar)": "mbar",
//   "Hectopascal (hPa)": "hPa",
//   "Standard atmosphere (atm)": "atm",
//   "Kilopascal (kPa)": "kPa",
//   "Kilogram-force/square meter (kgf/m²)": "kgf/m²",
//   "Megapascal (MPa)": "MPa",
// };

// export const pressureUnitsList = [
//   ...pressureUnits,
// ];

// export function usePressureConvert(value, fromUnit, toUnit) {
//   const from = pressureUnits.find(unit => unit.abbreviation === fromUnit);
//   const to = pressureUnits.find(unit => unit.abbreviation === toUnit);

//   if (!from || !to) {
//     throw new Error('Invalid unit');
//   }

//   const valueInPascal = from.toPascal(value);
//   let convertedValue;
  
//   if (to.abbreviation === 'mmH₂O') {
//     convertedValue = valueInPascal / 9.80665;
//   } else if (to.abbreviation === 'psf') {
//     convertedValue = valueInPascal / 47.8803;
//   } else if (to.abbreviation === 'kgf/cm²') {
//     convertedValue = valueInPascal / 98066.5;
//   } else if (to.abbreviation === 'psi') {
//     convertedValue = valueInPascal / 6894.76;
//   } else if (to.abbreviation === 'mmHg') {
//     convertedValue = valueInPascal / 133.322;
//   } else if (to.abbreviation === 'bar') {
//     convertedValue = valueInPascal / 100000;
//   } else if (to.abbreviation === 'inHg') {
//     convertedValue = valueInPascal / 3386.39;
//   } else if (to.abbreviation === 'mbar') {
//     convertedValue = valueInPascal / 100;
//   } else if (to.abbreviation === 'hPa') {
//     convertedValue = valueInPascal / 100;
//   } else if (to.abbreviation === 'atm') {
//     convertedValue = valueInPascal / 101325;
//   } else if (to.abbreviation === 'kPa') {
//     convertedValue = valueInPascal / 1000;
//   } else if (to.abbreviation === 'kgf/m²') {
//     convertedValue = valueInPascal / 9.80665;
//   } else if (to.abbreviation === 'MPa') {
//     convertedValue = valueInPascal / 1000000;
//   }

//   return convertedValue;
// }
