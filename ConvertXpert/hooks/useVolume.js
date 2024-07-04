export const metricVolumeUnits = [
  { name: 'Hectoliter (hl)', abbreviation: 'hl', toCubicMeter: value => value * 0.1 },
  { name: 'Cubic meter (m³)', abbreviation: 'm³', toCubicMeter: value => value },
  { name: 'Cubic centimeter (cm³)', abbreviation: 'cm³', toCubicMeter: value => value / 1e+6 },
  { name: 'Deciliter (dl)', abbreviation: 'dl', toCubicMeter: value => value / 10000 },
  { name: 'Centiliter (cl)', abbreviation: 'cl', toCubicMeter: value => value / 100000 },
  { name: 'Cubic decimeter (dm³)', abbreviation: 'dm³', toCubicMeter: value => value / 1000 },
  { name: 'Liter (l)', abbreviation: 'l', toCubicMeter: value => value / 1000 },
  { name: 'Cubic millimeter (mm³)', abbreviation: 'mm³', toCubicMeter: value => value / 1e+9 },
  { name: 'Milliliter (ml)', abbreviation: 'ml', toCubicMeter: value => value / 1e+6 },
];

export const imperialVolumeUnits = [
  { name: 'Cubic foot (ft³)', abbreviation: 'ft³', toCubicMeter: value => value * 0.0283168 },
  { name: 'US fluid ounce (US fl oz)', abbreviation: 'US fl oz', toCubicMeter: value => value * 2.9574e-5 },
  { name: 'Cubic yard (yd³)', abbreviation: 'yd³', toCubicMeter: value => value * 0.764555 },
  { name: 'Cubic inch (in³)', abbreviation: 'in³', toCubicMeter: value => value * 1.6387e-5 },
  { name: 'Acre-foot (af³)', abbreviation: 'af³', toCubicMeter: value => value * 1233.48 },
  { name: 'UK gallon (UK gal)', abbreviation: 'UK gal', toCubicMeter: value => value * 0.00454609 },
  { name: 'US gallon (US gal)', abbreviation: 'US gal', toCubicMeter: value => value * 0.00378541 },
  { name: 'UK fluid ounce (UK fl oz)', abbreviation: 'UK fl oz', toCubicMeter: value => value * 2.8413e-5 },
];

export const volumeUnitsText = {
  metricVolumeUnits: {
    "Hectoliter (hl)": "hl",
    "Cubic meter (m³)": "m³",
    "Cubic centimeter (cm³)": "cm³",
    "Deciliter (dl)": "dl",
    "Centiliter (cl)": "cl",
    "Cubic decimeter (dm³)": "dm³",
    "Liter (l)": "l",
    "Cubic millimeter (mm³)": "mm³",
    "Milliliter (ml)": "ml",
  },
  imperialVolumeUnits: {
    "Cubic foot (ft³)": "ft³",
    "US fluid ounce (US fl oz)": "US fl oz",
    "Cubic yard (yd³)": "yd³",
    "Cubic inch (in³)": "in³",
    "Acre-foot (af³)": "af³",
    "UK gallon (UK gal)": "UK gal",
    "US gallon (US gal)": "US gal",
    "UK fluid ounce (UK fl oz)": "UK fl oz",
  }
};

export const volumeUnits = [
  ...metricVolumeUnits,
  ...imperialVolumeUnits,
];

export function useVolumeConvert(value, fromUnit, toUnit) {
  const from = volumeUnits.find(unit => unit.abbreviation === fromUnit);
  const to = volumeUnits.find(unit => unit.abbreviation === toUnit);

  if (!from || !to) {
    throw new Error('Invalid unit');
  }

  const valueInCubicMeters = from.toCubicMeter(value);
  const convertedValue = valueInCubicMeters / to.toCubicMeter(1); // Convert from cubic meters to the target unit

  return convertedValue;
}