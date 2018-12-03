import { input } from './input';

// Day 1: Chronal Calibration

export async function run() {
  const output = input.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  console.log('Day 1: Chronal Calibration:');
  console.warn(output);
}
