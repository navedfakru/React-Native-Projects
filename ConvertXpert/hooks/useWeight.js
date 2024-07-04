export const metricWeightUnits = [
  { name: 'Gram (g)', abbreviation: 'g', toKilogram: value => value / 1000 },
  { name: 'Microgram (µg)', abbreviation: 'µg', toKilogram: value => value / 1e+9 },
  { name: 'Quintal (q)', abbreviation: 'q', toKilogram: value => value * 100 },
  { name: 'Carat (ct)', abbreviation: 'ct', toKilogram: value => value * 0.0002 },
  { name: 'Ton (t)', abbreviation: 't', toKilogram: value => value * 1000 },
  { name: 'Milligram (mg)', abbreviation: 'mg', toKilogram: value => value / 1e+6 },
  { name: 'Kilogram (kg)', abbreviation: 'kg', toKilogram: value => value },
];

export const imperialWeightUnits = [
  { name: 'Ounce (oz)', abbreviation: 'oz', toKilogram: value => value * 0.0283495 },
  { name: 'Grain (gr)', abbreviation: 'gr', toKilogram: value => value * 6.4799e-5 },
  { name: 'Dram (dr)', abbreviation: 'dr', toKilogram: value => value * 0.00177185 },
  { name: 'Short hundredweight (sh cwt)', abbreviation: 'sh cwt', toKilogram: value => value * 45.3592 },
  { name: 'Pound (lb)', abbreviation: 'lb', toKilogram: value => value * 0.453592 },
  { name: 'Stone (st)', abbreviation: 'st', toKilogram: value => value * 6.35029 },
  { name: 'Long hundredweight (Ig cwt)', abbreviation: 'Ig cwt', toKilogram: value => value * 50.8023 },
];

export const weightUnitsText = {
  metricWeightUnits: {
    "Gram (g)": "g",
    "Microgram (µg)": "µg",
    "Quintal (q)": "q",
    "Carat (ct)": "ct",
    "Ton (t)": "t",
    "Milligram (mg)": "mg",
    "Kilogram (kg)": "kg",
  },
  imperialWeightUnits: {
    "Ounce (oz)": "oz",
    "Grain (gr)": "gr",
    "Dram (dr)": "dr",
    "Short hundredweight (sh cwt)": "sh cwt",
    "Pound (lb)": "lb",
    "Stone (st)": "st",
    "Long hundredweight (Ig cwt)": "Ig cwt",
  }
};

export const weightUnits = [
  ...metricWeightUnits,
  ...imperialWeightUnits,
];

export function useWeightConvert(value, fromUnit, toUnit) {
  const from = weightUnits.find(unit => unit.abbreviation === fromUnit);
  const to = weightUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInKilograms = from.toKilogram(value);
  const convertedValue = valueInKilograms / to.toKilogram(1); // Convert from kilograms to the target unit

  return convertedValue;
}
