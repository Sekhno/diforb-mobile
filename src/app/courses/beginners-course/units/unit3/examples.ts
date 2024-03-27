import {AnswersType, ExampleType} from "src/models/types";

export const vocabulary = [
  {
    word: 'read',
    translation: 'читати',
    sound: 'units/unit_3/read.mp3',
    image: '/assets/images/units/unit_3/read.png'
  },
  {
    word: 'write',
    translation: 'писати',
    sound: 'units/unit_3/write.mp3',
    image: '/assets/images/units/unit_3/write.png'
  },
  {
    word: 'cook',
    translation: 'готувати',
    sound: 'units/unit_3/cook.mp3',
    image: '/assets/images/units/unit_3/cook.png'
  },
  {
    word: 'speak English',
    translation: 'розмовляти англійською',
    sound: 'units/unit_3/speak_english.mp3',
    image: '/assets/images/units/unit_3/speak_english.png'
  },
  {
    word: 'dance',
    translation: 'танцювати',
    sound: 'units/unit_3/dance.mp3',
    image: '/assets/images/units/unit_3/dance.png'
  },
  {
    word: 'sing',
    translation: 'співати',
    sound: 'units/unit_3/sing.mp3',
    image: '/assets/images/units/unit_3/sing.png'
  },
  {
    word: 'sleep',
    translation: 'спати',
    sound: 'units/unit_3/sleep.mp3',
    image: '/assets/images/units/unit_3/sleep.png'
  },
  {
    word: 'do a handstand',
    translation: 'робити стойку на руках',
    sound: 'units/unit_3/do_a_handstand.mp3',
    image: '/assets/images/units/unit_3/do_a_handstand.png'
  },
  {
    word: 'swim',
    translation: 'плавати',
    sound: 'units/unit_3/swim.mp3',
    image: '/assets/images/units/unit_3/swim.png'
  },
  {
    word: 'ride a bike',
    translation: 'їздити на велосипеді',
    sound: 'units/unit_3/ride_a_bike.mp3',
    image: '/assets/images/units/unit_3/ride_a_bike.png'
  }
];

export const affirmative = [
  {
    sentence: 'I can read',
    example: 'I {{input}} read',
    missed: 'can',
    translate: 'Я можу читати',
    image: '/assets/images/units/unit_3/read.png'
  },
  {
    sentence: 'You can write',
    example: 'You {{input}} write',
    missed: 'can',
    translate: 'Ти можеш писати',
    image: '/assets/images/units/unit_3/write.png'
  },
  {
    sentence: 'She can cook',
    example: 'She {{input}} cook',
    missed: 'can',
    translate: 'Вона може готувати',
    image: '/assets/images/units/unit_3/cook.png'
  },
  {
    sentence: 'We can speak English',
    example: 'We {{input}} speak English',
    missed: 'can',
    translate: 'Ми можемо розмовляти англійською',
    image: '/assets/images/units/unit_3/speak_english.png'
  },
  {
    sentence: 'They can dance',
    example: 'They {{input}} dance',
    missed: 'can',
    translate: 'Вони можуть танцювати',
    image: '/assets/images/units/unit_3/dance.png'
  },
  {
    sentence: 'He can sing',
    example: 'He {{input}} sing',
    missed: 'can',
    translate: 'Він може співати',
    image: '/assets/images/units/unit_3/sing.png'
  },
  {
    sentence: 'I can sleep',
    example: 'I {{input}} sleep',
    missed: 'can',
    translate: 'Я можу спати',
    image: '/assets/images/units/unit_3/sleep.png'
  },
  {
    sentence: 'He can do a handstand',
    example: 'He {{input}} do a handstand',
    missed: 'can',
    translate: 'Він може робити стойку на руках',
    image: '/assets/images/units/unit_3/do_a_handstand.png'
  },
  {
    sentence: 'She can swim',
    example: 'She {{input}} swim',
    missed: 'can',
    translate: 'Вона може плавати',
    image: '/assets/images/units/unit_3/swim.png'
  },
  {
    sentence: 'They can ride a bike',
    example: 'They {{input}} ride a bike',
    missed: 'can',
    translate: 'Вони можуть їздити на велосипеді',
    image: '/assets/images/units/unit_3/ride_a_bike.png'
  }

] as ExampleType[];

export const negative = [
  {
    sentence: "I can't ride a bike",
    image: '/assets/images/units/unit_3/ride_a_bike.png'
  },
  {
    sentence: "You can't sing",
    image: '/assets/images/units/unit_3/sing.png'
  },
  {
    sentence: "He can't dance",
    image: '/assets/images/units/unit_3/dance.png'
  },
  {
    sentence: "She can't speak English",
    image: '/assets/images/units/unit_3/speak_english.png'
  },
  {
    sentence: "We can't swim",
    image: '/assets/images/units/unit_3/swim.png'
  },
  {
    sentence: "They can't write",
    image: '/assets/images/units/unit_3/write.png'
  },
  {
    sentence: "I can't sleep",
    image: '/assets/images/units/unit_3/sleep.png'
  },
  {
    sentence: "You can't cook",
    image: '/assets/images/units/unit_3/cook.png'
  }
] as ExampleType[];

export const question = [
  {
    sentence: 'Can I dance?',
    answers: [{value: 'Yes, you can', answer: true}, {value: 'Yes, he can', answer: false}, {value: 'Yes, we can', answer: false}],
    image: '/assets/images/units/unit_3/dance.png'
  },
  {
    sentence: 'Can you sing?',
    answers: [{value: 'Yes, I can', answer: true}, {value: "No, they can't", answer: false}, {value: 'Yes, he can', answer: false}],
    image: '/assets/images/units/unit_3/sing.png'
  },
  {
    sentence: 'Can he swim?',
    answers: [{value: 'Yes, he can', answer: true}, {value: "No, we can't", answer: false}, {value: 'Yes, we can', answer: false}],
    image: '/assets/images/units/unit_3/swim.png'
  },
  {
    sentence: 'Can she write?',
    answers: [{value: "No, she can't", answer: true}, {value: "No, they can", answer: false}, {value: "Yes, he can", answer: false}],
    image: '/assets/images/units/unit_3/write.png'
  },
  {
    sentence: 'Can we sleep?',
    answers: [{value: "Yes, we can", answer: true}, {value: "Yes, they can", answer: false}, {value: "Yes, I can", answer: false}],
    image: '/assets/images/units/unit_3/sleep.png'
  },
  {
    sentence: 'Can they cook?',
    answers: [{value: "No, they can't", answer: true}, {value: "No, we can't", answer: false}, {value: "Yes, you can", answer: false}],
    image: '/assets/images/units/unit_3/cook.png'
  },
  {
    sentence: 'Can you read?',
    answers: [{value: "Yes, you can", answer: true}, {value: "No, they can't", answer: false}, {value: "Yes, he can", answer: false}],
    image: '/assets/images/units/unit_3/read.png'
  },
  {
    sentence: 'Can you do a handstand?',
    answers: [{value: 'Yes, I can', answer: true}, {value: "No, he can't", answer: false}, {value: 'Yes, she can', answer: false}],
    image: '/assets/images/units/unit_3/do_a_handstand.png'
  },
  {
    sentence: 'Can he speak English?',
    answers: [{value: 'Yes, he can', answer: true}, {value: "No, they can't", answer: false}, {value: 'Yes, she can', answer: false}],
    image: '/assets/images/units/unit_3/speak_english.png'
  },
  {
    sentence: 'Can they ride a bike?',
    answers: [{value: "No, they can't", answer: true}, {value: "No, we can't", answer: false}, {value: 'Yes, I can', answer: false}],
    image: '/assets/images/units/unit_3/ride_a_bike.png'

  }
] as (ExampleType & AnswersType)[];
