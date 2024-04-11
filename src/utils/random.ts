export function randomWords(sentence: string) {
  const words = sentence.split(' ');

  // Then, shuffle the array of words using the "Fisher-Yates" algorithm
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  if (sentence === words.join(' ')) {
    return randomWords(sentence);
  }
  return words;
}

export function randomLetters(word: string) {
  const letters = word.split('');

  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  if (word === letters.join('')) {
    return randomLetters(word);
  }
  return letters;
}

