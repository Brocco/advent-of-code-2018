import { input } from './input';

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

  let goodId;
  input.forEach(claim => {
    const id = parseInt(claim.split('@')[0].trim().substr(1));
    const coords = getCoords(claim);
    const isGoodId = coords.every((coord => {
      return coordCounts[coord] === 1;
    }));
    if (isGoodId) {
      goodId = id;
    }
  });

  console.log('Day 3 (part two):');
  console.warn(goodId);
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
