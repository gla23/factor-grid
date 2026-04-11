export const axesLengths = [5, 2, 3, 2] as const;

export const urlStateDefaults = {
  "just-grid": false,
  blind: false,
  "grid-lines": true,
  printable: false,
  xP: axesLengths[0],
  xN: axesLengths[1],
  yP: axesLengths[2],
  yN: axesLengths[3],
  xAxisFactor: 2,
  yAxisFactor: 3,
  centralNumber: 1,
  base: 10,
} as const;
