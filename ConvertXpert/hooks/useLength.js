
export const metricUnits = [
  { name: 'Decimeter (dm)', abbreviation: 'dm', toMeter: value => value / 10 },
  { name: 'Light year (ly)', abbreviation: 'ly', toMeter: value => value * 9.461e+15 },
  { name: 'Millimeter (mm)', abbreviation: 'mm', toMeter: value => value / 1000 },
  { name: 'Kilometer (km)', abbreviation: 'km', toMeter: value => value * 1000 },
  { name: 'Centimeter (cm)', abbreviation: 'cm', toMeter: value => value / 100 },
  { name: 'Meter (m)', abbreviation: 'm', toMeter: value => value },
  { name: 'Micrometer (µm)', abbreviation: 'µm', toMeter: value => value / 1e+6 },
  { name: 'Parsec (pc)', abbreviation: 'pc', toMeter: value => value * 3.086e+16 },
  { name: 'Astronomical unit (AU)', abbreviation: 'AU', toMeter: value => value * 1.496e+11 },
  { name: 'Lunar distance (LD)', abbreviation: 'LD', toMeter: value => value * 3.844e+8 },
  { name: 'Picometer (pm)', abbreviation: 'pm', toMeter: value => value / 1e+12 },
  { name: 'Nanometer (nm)', abbreviation: 'nm', toMeter: value => value / 1e+9 }
];
export const imperialUnits = [
  { name: 'Inch (in)', abbreviation: 'in', toMeter: value => value * 0.0254 },
  { name: 'Foot (ft)', abbreviation: 'ft', toMeter: value => value * 0.3048 },
  { name: 'Yard (yd)', abbreviation: 'yd', toMeter: value => value * 0.9144 },
  { name: 'Mile (mi)', abbreviation: 'mi', toMeter: value => value * 1609.34 },
  { name: 'Nautical mile (nmi)', abbreviation: 'nmi', toMeter: value => value * 1852 },
  { name: 'Furlong (fur)', abbreviation: 'fur', toMeter: value => value * 201.168 },
  { name: 'Fathom (ftm)', abbreviation: 'ftm', toMeter: value => value * 1.8288 },
  { name: 'Rod (rd)', abbreviation: 'rd', toMeter: value => value * 5.0292 }
];
export const chineseUnits = [
  { name: 'Li (li)', abbreviation: 'li', toMeter: value => value * 500 },
  { name: 'Zhang (zhang)', abbreviation: 'zhang', toMeter: value => value * 3.333 },
  { name: 'Chi (chi)', abbreviation: 'chi', toMeter: value => value * 0.333 },
  { name: 'Cun (cun)', abbreviation: 'cun', toMeter: value => value * 0.0333 },
  { name: 'Fen (fen)', abbreviation: 'fen', toMeter: value => value * 0.00333 },
  { name: 'Li (li-cm)', abbreviation: 'li-cm', toMeter: value => value * 0.000333 },
  { name: 'Hao (hao)', abbreviation: 'hao', toMeter: value => value * 0.0000333 }
];

export const unitsText = {
  metricUnits: {
    "Decimeter (dm)": "dm",
    "Light year (ly)": "ly",
    "Millimeter (mm)": "mm",
    "Kilometer (km)": "km",
    "Centimeter (cm)": "cm",
    "Meter (m)": "m",
    "Micrometer (µm)": "µm",
    "Parsec (pc)": "pc",
    "Astronomical unit (AU)": "AU",
    "Lunar distance (LD)": "LD",
    "Picometer (pm)": "pm",
    "Nanometer (nm)": "nm"
  },
  imperialUnits: {
    "Inch (in)": "in",
    "Foot (ft)": "ft",
    "Yard (yd)": "yd",
    "Mile (mi)": "mi",
    "Nautical mile (nmi)": "nmi",
    "Furlong (fur)": "fur",
    "Fathom (ftm)": "ftm",
    "Rod (rd)": "rd"
  },
  chineseUnits: {
    "Li (li)": "li",
    "Zhang (zhang)": "zhang",
    "Chi (chi)": "chi",
    "Cun (cun)": "cun",
    "Fen (fen)": "fen",
    "Li (li-cm)": "li-cm",
    "Hao (hao)": "hao"
  }
};

export const units = [
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