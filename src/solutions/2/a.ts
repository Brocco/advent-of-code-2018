import { input } from './input';

export async function run() {
  let twos = 0;
  let threes = 0;

  input.forEach(word => {
    const wordResult = checkWord(word);
    if (wordResult.two) {
      twos++;
    }
    if (wordResult.three) {
      threes++;
    }
  });

  const output = twos * threes;

  console.log('Day 2: Inventory Management System:');
  console.warn(output);
}

interface WordCounts {
  two: boolean;
  three: boolean;
}

function checkWord(word: string): WordCounts {
  type WordMap = {
    [key: string]: number;
  }
  const map: WordMap = {};
  word.split('').forEach(c => {
    if (map[c]) {
      map[c] = map[c] + 1;
    } else {
      map[c] = 1;
    }
  });

  const wordCounts = {
    two: false,
    three: false
  }

  Object.keys(map).forEach(key => {
    const count = map[key];
    if (count === 2) {
      wordCounts.two = true;
    } else if (count === 3) {
      wordCounts.three = true;
    }
  });

  return wordCounts;
}