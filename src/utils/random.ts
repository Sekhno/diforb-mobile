export function randomWords(sentence: string) {
  const words = sentence.split(' ');

  // Then, shuffle the array of words using the "Fisher-Yates" algorithm
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  return words;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(randomWords(sentence));
