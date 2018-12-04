import { input } from './input';

// Day 3: No Matter How You Slice It

export async function run() {
  const coordCounts = input
    .map(getCoords)
    .reduce((acc, curr) => {
      curr.forEach(coord => {
        if (acc[coord]) {
          acc[coord] = acc[coord] + 1;
        } else {
          acc[coord] = 1;
        }
      });
      return acc;
    }, {} as { [key: string]: number });

  let count = 0;
  Object.keys(coordCounts).forEach(key => {
    if (coordCounts[key] > 1) {
      count++;
    }
  });

  console.log('Day 3: No Matter How You Slice It:');
  console.warn(count);
}

function getCoords(claim: string): string[] {
  const coords: string[] = [];

  const suggestion = claim.split('@')[1].trim();
  const [startPos, size] = suggestion.split(':');
  const [startX, startY] = startPos.trim().split(',').map(x => parseInt(x));
  const [width, height] = size.trim().split('x').map(x => parseInt(x));

  for(let x = startX; x < startX + width; x++) {
    for(let y = startY; y < startY + height; y++) {
      coords.push(`${x}x${y}`);
    }
  }

  return coords;
}
