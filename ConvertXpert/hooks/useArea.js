export const metricAreaUnits = [
  { name: 'Square meter (m²)', abbreviation: 'm²', toSquareMeter: value => value },
  { name: 'Square decimeter (dm²)', abbreviation: 'dm²', toSquareMeter: value => value / 100 },
  { name: 'Square centimeter (cm²)', abbreviation: 'cm²', toSquareMeter: value => value / 10000 },
  { name: 'Square kilometer (km²)', abbreviation: 'km²', toSquareMeter: value => value * 1e+6 },
  { name: 'Square millimeter (mm²)', abbreviation: 'mm²', toSquareMeter: value => value / 1e+6 },
  { name: 'Are (ar)', abbreviation: 'ar', toSquareMeter: value => value * 100 },
  { name: 'Hectare (ha)', abbreviation: 'ha', toSquareMeter: value => value * 10000 },
];

export const imperialAreaUnits = [
  { name: 'Square mile (mi²)', abbreviation: 'mi²', toSquareMeter: value => value * 2.59e+6 },
  { name: 'Square rod (rd²)', abbreviation: 'rd²', toSquareMeter: value => value * 25.2929 },
  { name: 'Square yard (yd²)', abbreviation: 'yd²', toSquareMeter: value => value * 0.836127 },
  { name: 'Square foot (ft²)', abbreviation: 'ft²', toSquareMeter: value => value * 0.092903 },
  { name: 'Acre (ac)', abbreviation: 'ac', toSquareMeter: value => value * 4046.86 },
  { name: 'Square inch (in²)', abbreviation: 'in²', toSquareMeter: value => value * 0.00064516 },
];

export const areaUnitsText = {
  metricAreaUnits: {
    "Square meter (m²)": "m²",
    "Square decimeter (dm²)": "dm²",
    "Square centimeter (cm²)": "cm²",
    "Square kilometer (km²)": "km²",
    "Square millimeter (mm²)": "mm²",
    "Are (ar)": "ar",
    "Hectare (ha)": "ha"
  },
  imperialAreaUnits: {
    "Square mile (mi²)": "mi²",
    "Square rod (rd²)": "rd²",
    "Square yard (yd²)": "yd²",
    "Square foot (ft²)": "ft²",
    "Acre (ac)": "ac",
    "Square inch (in²)": "in²"
  }
};

export const areaUnits = [
  ...metricAreaUnits,
  ...imperialAreaUnits,
];

export function useAreaConvert(value, fromUnit, toUnit) {
  const from = areaUnits.find(unit => unit.abbreviation === fromUnit);
  const to = areaUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInSquareMeters = from.toSquareMeter(value);
  const convertedValue = valueInSquareMeters / to.toSquareMeter(1); // Convert from square meters to the target unit

  return convertedValue;
}