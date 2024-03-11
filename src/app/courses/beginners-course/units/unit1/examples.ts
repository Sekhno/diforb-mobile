import { ExampleType } from 'src/models/types';

export const affirmative = [
  {
    sentence: 'I am a soldier',
    example: 'I {{input}} a soldier',
    missed: 'am',
    translate: 'Я солдат',
    image: '/assets/images/units/unit_1/soldier.png'
  },
  {
    sentence: 'He is a lawyer',
    example: 'He {{input}} a lawyer',
    missed: 'is',
    translate: 'Він адвокат',
    image: '/assets/images/units/unit_1/lawyer.png'
  },
  {
    sentence: 'She is a vet',
    example: 'She {{input}} a vet',
    missed: 'is',
    translate: 'Вона ветеринар',
    image: '/assets/images/units/unit_1/vet.png'
  },
  {
    sentence: 'We are pilots',
    example: 'We {{input}} pilots',
    missed: 'are',
    translate: 'Ми пілоти',
    image: '/assets/images/units/unit_1/pilot.png'
  },
  {
    sentence: 'They are builders',
    example: 'They {{input}} builders',
    missed: 'are',
    translate: 'Вони будівельники',
    image: '/assets/images/units/unit_1/builder.png'
  },
  {
    sentence: 'You are a police officer',
    example: 'You {{input}} a police officer',
    missed: 'are',
    translate: 'Ти поліцейський',
    image: '/assets/images/units/unit_1/police_officer.png'
  },
  {
    sentence: 'She is a shop assistant',
    example: 'She {{input}} a shop assistant',
    missed: 'is',
    translate: 'Вона продавець-консультант',
    image: '/assets/images/units/unit_1/shop_assistant.png'
  },
  {
    sentence: 'She is a nurse',
    example: 'She {{input}} a nurse',
    missed: 'is',
    translate: 'Вона медсестра',
    image: '/assets/images/units/unit_1/nurse.png'
  },
  {
    sentence: 'He is a hairdresser',
    example: 'He {{input}} a hairdresser',
    missed: 'is',
    translate: 'Він перукар',
    image: '/assets/images/units/unit_1/hairdresser.png'
  },
  {
    sentence: 'We are cleaners',
    example: 'We {{input}} cleaners',
    missed: 'are',
    translate: 'Ми прибиральники',
    image: '/assets/images/units/unit_1/cleaner.png'
  }
] as ExampleType[]

export const negative = [
  {
    sentence: "They aren't soldiers",
    example: 'They {{input}} soldiers',
    missed: "aren't",
    translate: 'Вони не солдати',
    image: '/assets/images/units/unit_1/soldier.png'
  },
  {
    sentence: "You aren't a vet",
    example: 'You {{input}} a vet',
    missed: "aren't",
    translate: 'Ти не ветеринар',
    image: '/assets/images/units/unit_1/vet.png'
  },
  {
    sentence: "He isn't a pilot",
    example: 'He {{input}} a pilot',
    missed: "isn't",
    translate: 'Він не пілот',
    image: '/assets/images/units/unit_1/pilot.png'
  },
  {
    sentence: "He isn't a builder",
    example: 'He {{input}} a builder',
    missed: "isn't",
    translate: 'Він не будівельник',
    image: '/assets/images/units/unit_1/builder.png'
  },
  {
    sentence: "She isn't a police officer",
    example: 'She {{input}} a police officer',
    missed: "isn't",
    translate: 'Вона не поліцейська',
    image: '/assets/images/units/unit_1/police_officer.png'
  },
  {
    sentence: "We aren't shop assistants",
    example: 'We {{input}} shop assistants',
    missed: "aren't",
    translate: 'Ми не продавці-консультанти',
    image: '/assets/images/units/unit_1/shop_assistant.png'
  },
  {
    sentence: "She isn't a nurse",
    example: 'She {{input}} a nurse',
    missed: "isn't",
    translate: 'Вона не медсестра',
    image: '/assets/images/units/unit_1/nurse.png'
  },
  {
    sentence: "I'm not a hairdresser",
    example: 'I {{input}} a hairdresser',
    missed: "'m not",
    translate: 'Я не перукар',
    image: '/assets/images/units/unit_1/hairdresser.png'
  },
  {
    sentence: 'They aren\'t cleaners',
    example: 'They {{input}} cleaners.',
    missed: 'aren\'t',
    translate: 'Вони не прибиральники',
    image: '/assets/images/units/unit_1/cleaner.png'
  }
] as ExampleType[]

export const question = [
  {
    sentence: 'Are you a pilot?',
    example: '{{input}} you a pilot?',
    answer: "Yes, I am",
    missed: 'Are',
    image: '/assets/images/units/unit_1/pilot.png'
  },
  {
    sentence: 'Is he a builder?',
    example: '{{input}} he a builder?',
    answer: "No, he isn't",
    missed: 'Is',
    image: '/assets/images/units/unit_1/builder.png'
  },
  {
    sentence: 'Is she a hairdresser?',
    example: '{{input}} she a hairdresser?',
    answer: "Yes, she is",
    missed: 'Is',
    image: '/assets/images/units/unit_1/hairdresser.png'
  },
  {
    sentence: 'Are they cleaners?',
    example: '{{input}} they cleaners?',
    answer: "No, they aren't",
    missed: 'Are',
    image: '/assets/images/units/unit_1/cleaner.png'
  },
  {
    sentence: 'Are we soldiers?',
    example: '{{input}} we soldiers?',
    answer: "Yes, you are",
    missed: 'Are',
    image: '/assets/images/units/unit_1/soldier.png'
  },
  {
    sentence: 'Are you a police officer?',
    example: '{{input}} you a police officer?',
    missed: 'Are',
    image: '/assets/images/units/unit_1/police_officer.png'
  },
  {
    sentence: 'Is she a lawyer?',
    example: '{{input}} she a lawyer?',
    missed: 'Is',
    image: '/assets/images/units/unit_1/lawyer.png'
  },
  {
    sentence: 'Is he a shop assistant?',
    example: '{{input}} he a shop assistant?',
    missed: 'Is',
    image: '/assets/images/units/unit_1/shop_assistant.png'
  },
  {
    sentence: 'Are they nurses?',
    example: '{{input}} they nurses?',
    missed: 'Are',
    image: '/assets/images/units/unit_1/nurse.png'
  }
] as ExampleType[]

export const rightSentences = [
  'I am a soldier',
  'He is a lawyer',
  'She is a vet',
  'We are pilots',
  'They are builders',
  'You are a police officer',
  'She is a shop assistant',
  'She is a nurse',
  'He is a hairdresser',
  'We are cleaners'
]

export const sentences = [
  'I {{input}} a soldier.',
  'He {{input}} a lawyer',
  'She {{input}} a vet',
  'We {{input}} pilots',
  'They {{input}} builders',
  'You {{input}} a police officer',
  'She {{input}} a shop assistant',
  'She {{input}} a nurse',
  'He {{input}} a hairdresser',
  'We {{input}} cleaners'
];

export const rightAnswers = ['am', 'is', 'is', 'are', 'are', 'are', 'is', 'is', 'is', 'are'];

export const sentencesForTranslate = [
  'Я солдат',
  'Він адвокат',
  'Вона ветеринар',
  'Ми пілоти',
  'Вони будівельники',
  'Ти поліцейський',
  'Вона продавець-консультант',
  'Вона медсестра',
  'Він перукар',
  'Ми прибиральники'
];

export const images = [
  'i_am_a_soldier.png',
  'he_is_a_lawyer.png',
  'she_is_a_vet.png',
  'we_are_pilots.png',
  'they_are_builders.png',
  'police_officer.png',
  'shop_assistant.png',
  'she_is_a_nurse.png',
  'he_is_a_hairdresser.png',
  'we_are_cleaners.png'
];

export const vocabulary = [
  {
    word: 'soldier',
    translation: 'солдат',
    sound: 'units/unit_1/soldier.mp3',
    image: '/assets/images/units/unit_1/soldier.png'
  },
  {
    word: 'lawyer',
    translation: 'адвокат',
    sound: 'units/unit_1/lawyer.mp3',
    image: '/assets/images/units/unit_1/lawyer.png'
  },
  {
    word: 'pilot',
    translation: 'пілот',
    sound: 'units/unit_1/pilot.mp3',
    image: '/assets/images/units/unit_1/pilot.png'
  },
  {
    word: 'builder',
    translation: 'будівельник',
    sound: 'units/unit_1/builder.mp3',
    image: '/assets/images/units/unit_1/builder.png'
  },
  {
    word: 'police officer',
    translation: 'поліцейський',
    sound: 'units/unit_1/police_officer.mp3',
    image: '/assets/images/units/unit_1/police_officer.png'
  },
  {
    word: 'shop assistant',
    translation: 'продавець-консультант',
    sound: 'units/unit_1/shop_assistant.mp3',
    image: '/assets/images/units/unit_1/shop_assistant.png'
  },
  {
    word: 'nurse',
    translation: 'медсестра',
    sound: 'units/unit_1/nurse.mp3',
    image: '/assets/images/units/unit_1/nurse.png'
  },
  {
    word: 'hairdresser',
    translation: 'перукар',
    sound: 'units/unit_1/hairdresser.mp3',
    image: '/assets/images/units/unit_1/hairdresser.png'
  },
  {
    word: 'cleaner',
    translation: 'прибиральник',
    sound: 'units/unit_1/cleaner.mp3',
    image: '/assets/images/units/unit_1/cleaner.png'
  },
  {
    word: 'I',
    translation: 'я',
    sound: 'units/unit_1/i.mp3',
    image: '/assets/images/units/unit_1/i.png'
  },
  {
    word: 'you',
    translation: 'ти',
    sound: 'units/unit_1/you.mp3',
    image: '/assets/images/units/unit_1/you.png'
  },
  {
    word: 'he',
    translation: 'він',
    sound: 'units/unit_1/he.mp3',
    image: '/assets/images/units/unit_1/he.png'
  },
  {
    word: 'she',
    translation: 'вона',
    sound: 'units/unit_1/she.mp3',
    image: '/assets/images/units/unit_1/she.png'
  },
  {
    word: 'it',
    translation: 'воно',
    sound: 'units/unit_1/it.mp3',
    image: '/assets/images/units/unit_1/it.png'
  },
  {
    word: 'we',
    translation: 'ми',
    sound: 'units/unit_1/we.mp3',
    image: '/assets/images/units/unit_1/we.png'
  },
  {
    word: 'they',
    translation: 'вони',
    sound: 'units/unit_1/they.mp3',
    image: '/assets/images/units/unit_1/they.png'
  }
];


