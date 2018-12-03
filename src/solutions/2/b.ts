import { input } from './input';

export async function run() {
  let match = '';
  const idCount = input.length;
  for(let i=0; i<idCount; i++) {
    for(let j=0; j<idCount; j++) {
      if (i !== j) {
        const matches = getIdCompare(input[i], input[j]);
        if (matches.length === input[1].length -1) {
          match = matches;
        }
      }
      if (match) {
        break;
      }
    }
    if (match) {
      break;
    }
  }

  console.log('Day 2 (part two): Id off by one');
  console.warn(match);
}

function getIdCompare(a: string, b: string) {
  const aParts = a.split('');
  const bParts = b.split('');
  let matches = '';
  for(let i=0; i<a.length; i++) {
    if (aParts[i] === bParts[i]) {
      matches = matches + aParts[i];
    }
  }
  return matches;
}