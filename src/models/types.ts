export type ExampleType = Record< 'sentence' | 'example' | 'missed' | 'translate' | 'image' | 'answer', string >

export type AnswersType = {answers: Array<{value: string, answer: boolean}>}
