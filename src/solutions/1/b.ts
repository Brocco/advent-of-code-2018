import { input } from './input';

// Day 1: Part Two

export async function run() {
  const output = findFirstDuplicate();

  console.log('Day 1 (part two): First duplicate frequency');
  console.warn(output);
}

function findFirstDuplicate(): number {
  let total = 0;
  const frequencies: any = {0: true};
  let firstDuplicate: null | number = null;
  while(firstDuplicate === null) {
    input.forEach(curr => {
      const operation = curr.substr(0, 1) === '+' ? add : subtract;
      const val = parseInt(curr.substr(1));
      total = operation(total, val);
      if (frequencies[total] && firstDuplicate === null) {
        firstDuplicate = total;
      }
      frequencies[total] = true;
    });
  }

  return firstDuplicate;
}

function add(a: number, b: number): number { return a + b; }
function subtract(a: number, b: number): number { return a - b; }

