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
    sound: 'sounds/units/unit_1/soldier.mp3',
    image: '/assets/images/units/unit_1/soldier.png'
  },
  {
    word: 'lawyer',
    translation: 'адвокат',
    sound: 'sounds/units/unit_1/lawyer.mp3',
    image: '/assets/images/units/unit_1/lawyer.png'
  },
  {
    word: 'pilot',
    translation: 'пілот',
    sound: 'sounds/units/unit_1/pilot.mp3',
    image: '/assets/images/units/unit_1/pilot.png'
  },
  {
    word: 'builder',
    translation: 'будівельник',
    sound: 'sounds/units/unit_1/builder.mp3',
    image: '/assets/images/units/unit_1/builder.png'
  },
  {
    word: 'police officer',
    translation: 'поліцейський',
    sound: 'sounds/units/unit_1/police_officer.mp3',
    image: '/assets/images/units/unit_1/police_officer.png'
  },
  {
    word: 'shop assistant',
    translation: 'продавець-консультант',
    sound: 'sounds/units/unit_1/shop_assistant.mp3',
    image: '/assets/images/units/unit_1/shop_assistant.png'
  },
  {
    word: 'nurse',
    translation: 'медсестра',
    sound: 'sounds/units/unit_1/nurse.mp3',
    image: '/assets/images/units/unit_1/nurse.png'
  },
  {
    word: 'hairdresser',
    translation: 'перукар',
    sound: 'sounds/units/unit_1/hairdresser.mp3',
    image: '/assets/images/units/unit_1/hairdresser.png'
  },
  {
    word: 'cleaner',
    translation: 'прибиральник',
    sound: 'sounds/units/unit_1/cleaner.mp3',
    image: '/assets/images/units/unit_1/cleaner.png'
  },
  {
    word: 'I',
    translation: 'я',
    sound: 'sounds/units/unit_1/i.mp3',
    image: '/assets/images/units/unit_1/i.png'
  },
  {
    word: 'you',
    translation: 'ти',
    sound: 'sounds/units/unit_1/you.mp3',
    image: '/assets/images/units/unit_1/you.png'
  },
  {
    word: 'he',
    translation: 'він',
    sound: 'sounds/units/unit_1/he.mp3',
    image: '/assets/images/units/unit_1/he.png'
  },
  {
    word: 'she',
    translation: 'вона',
    sound: 'sounds/units/unit_1/she.mp3',
    image: '/assets/images/units/unit_1/she.png'
  },
  {
    word: 'it',
    translation: 'воно',
    sound: 'sounds/units/unit_1/it.mp3',
    image: '/assets/images/units/unit_1/it.png'
  },
  {
    word: 'we',
    translation: 'ми',
    sound: 'sounds/units/unit_1/we.mp3',
    image: '/assets/images/units/unit_1/we.png'
  },
  {
    word: 'they',
    translation: 'вони',
    sound: 'sounds/units/unit_1/they.mp3',
    image: '/assets/images/units/unit_1/they.png'
  }
] as const;

export const sounds = [
  'sounds/units/unit_1/soldier.mp3',
  'sounds/units/unit_1/hairdresser.mp3',
  'sounds/units/unit_1/lawyer.mp3',
  'sounds/units/unit_1/police_officer.mp3',
  'sounds/units/unit_1/pilot.mp3',
  'sounds/units/unit_1/shop_assistant.mp3',
  'sounds/units/unit_1/cleaner.mp3',
  'sounds/units/unit_1/builder.mp3',
  'sounds/units/unit_1/i.mp3',
  'sounds/units/unit_1/you.mp3',
  'sounds/units/unit_1/he.mp3',
  'sounds/units/unit_1/she.mp3',
  'sounds/units/unit_1/it.mp3',
  'sounds/units/unit_1/we.mp3',
  'sounds/units/unit_1/they.mp3'
];

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