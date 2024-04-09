export type ExampleType = Record< 'sentence' | 'example' | 'missed' | 'translate' | 'image' | 'answer', string >

export type AnswersType = {answers: Array<{value: string, answer: boolean}>}

export type WordsDivideType = {
  words: string[],
  categories: Array<{label: string, data: Array<string>}>
}
