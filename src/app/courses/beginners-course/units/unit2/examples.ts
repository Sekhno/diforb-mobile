import {ExampleType} from "src/models/types";


export const affirmative = [
  {
    sentence: 'I have got a charger',
    example: 'I {{input}} a charger',
    missed: 'have got',
    translate: 'У мене є зарядний пристрій',
    image: '/assets/images/units/unit_2/charger.jpg'
  },
  {
    sentence: 'You have got a printer',
    example: 'You {{input}} a printer',
    missed: 'have got',
    translate: 'У тебе є прінтер',
    image: '/assets/images/units/unit_2/printer.jpg'
  },
  {
    sentence: 'She has got two laptops',
    example: 'She {{input}} two laptops',
    missed: 'has got',
    translate: 'У неї є два ноутбуки',
    image: '/assets/images/units/unit_2/laptop.jpg'
  },
  {
    sentence: 'He has got three computers',
    example: 'He {{input}} three computers',
    missed: 'has got',
    translate: 'У нього є три компьютери',
    image: '/assets/images/units/unit_2/computer.jpg'
  },
  {
    sentence: 'They have got a router',
    example: 'They {{input}} a router',
    missed: 'have got',
    translate: 'У них є роутер',
    image: '/assets/images/units/unit_2/router.jpg'
  },
  {
    sentence: 'We have got five memory sticks',
    example: 'We {{input}} five memory sticks',
    missed: 'have got',
    translate: 'У нас є п’ять флешок',
    image: '/assets/images/units/unit_2/memory_stick.jpg'
  },
  {
    sentence: 'She has got headphones',
    example: 'She {{input}} headphones',
    missed: 'has got',
    translate: 'У неї є навушники',
    image: '/assets/images/units/unit_2/headphones.jpg'
  },
  {
    sentence: 'He has got earphones',
    example: 'He {{input}} earphones',
    missed: 'has got',
    translate: 'У нього є навушники',
    image: '/assets/images/units/unit_2/earphones.jpg'
  },
  {
    sentence: 'I have got a keyboard',
    example: 'I {{input}} a keyboard',
    missed: 'have got',
    translate: 'У мене є клавіатура',
    image: '/assets/images/units/unit_2/keyboard.jpg'
  },
  {
    sentence: 'We have got a webcam',
    example: 'We {{input}} a webcam',
    missed: 'have got',
    translate: 'У нас є вебкамера',
    image: '/assets/images/units/unit_2/webcam.jpg'
  }
] as ExampleType[];

export const negative = [
  {
    sentence: "I haven't got a laptop",
    example: 'I {{input}} a laptop',
    missed: "haven't got",
    translate: 'Я не маю ноутбук',
    image: '/assets/images/units/unit_2/laptop.jpg'
  },
  {
    sentence: "You haven't got a charger",
    example: 'You {{input}} a charger',
    missed: "haven't got",
    translate: 'Ти не маєш зарядний пристрій',
    image: '/assets/images/units/unit_2/charger.jpg'
  },
  {
    sentence: "He hasn't got a keyboard",
    example: 'He {{input}} a keyboard',
    missed: "hasn't got",
    translate: 'Він не має клавіатура',
    image: '/assets/images/units/unit_2/keyboard.jpg'
  },
  {
    sentence: "She hasn't got earphones",
    example: 'She {{input}} earphones',
    missed: "hasn't got",
    translate: 'Вона не має навушники',
    image: '/assets/images/units/unit_2/earphones.jpg'
  },
  {
    sentence: "We haven't got a memory stick",
    example: 'We {{input}} a memory stick',
    missed: "haven't got",
    translate: 'Ми не маємо флешку',
    image: '/assets/images/units/unit_2/memory_stick.jpg'
  },
  {
    sentence: "They haven't got a printer",
    example: 'They {{input}} a printer',
    missed: "haven't got",
    translate: 'Вони не мають прінтер',
    image: '/assets/images/units/unit_2/printer.jpg'
  },
  {
    sentence: "He hasn't got a webcam",
    example: 'He {{input}} a webcam',
    missed: "hasn't got",
    translate: 'Він не має вебкамера',
    image: '/assets/images/units/unit_2/webcam.jpg'
  },
  {
    sentence: "She hasn't got headphones",
    example: 'She {{input}} headphones',
    missed: "hasn't got",
    translate: 'Вона не має навушники',
    image: '/assets/images/units/unit_2/headphones.jpg'
  },
  {
    sentence: "I haven't got earphones",
    example: 'I {{input}} earphones',
    missed: "haven't got",
    translate: 'Я не маю навушники',
    image: '/assets/images/units/unit_2/earphones.jpg'
  },
  {
    sentence: "He hasn't got a charger",
    example: 'He {{input}} a charger',
    missed: "hasn't got",
    translate: 'Він не має зарядний пристрій',
    image: '/assets/images/units/unit_2/charger.jpg'
  }
] as ExampleType[];

export const question = [
  {
    sentence: 'Have you got a charger?',
    example: '{{input}} you got a charger?',
    answer: "Yes, I have",
    missed: 'Have',
    translate: 'У тебе є зарядний пристрій?',
    image: '/assets/images/units/unit_2/charger.jpg'
  },
  {
    sentence: 'Has he got a memory stick?',
    example: '{{input}} he got a memory stick?',
    answer: "Yes, he has",
    missed: 'Has',
    translate: 'У нього є флешка?',
    image: '/assets/images/units/unit_2/memory_stick.jpg'
  },
  {
    sentence: 'Has she got headphones?',
    example: '{{input}} she got headphones?',
    answer: "Yes, she has",
    missed: 'Has',
    translate: 'У неї є навушники?',
    image: '/assets/images/units/unit_2/headphones.jpg'
  },
  {
    sentence: 'Has he got a computer?',
    example: '{{input}} he got a computer?',
    answer: "Yes, he has",
    missed: 'Has',
    translate: 'У нього є компьютер?',
    image: '/assets/images/units/unit_2/computer.jpg'
  },
  {
    sentence: 'Have we got a printer?',
    example: '{{input}} we got a printer?',
    answer: "Yes, we have",
    missed: 'Have',
    translate: 'У нас є прінтер?',
    image: '/assets/images/units/unit_2/printer.jpg'
  },
  {
    sentence: 'Have they got a webcam?',
    example: '{{input}} they got a webcam?',
    answer: "Yes, they have",
    missed: 'Have',
    translate: 'У них є вебкамера?',
    image: '/assets/images/units/unit_2/webcam.jpg'
  },
  {
    sentence: 'Have you got a keyboard?',
    example: '{{input}} you got a keyboard?',
    answer: "Yes, you have",
    missed: 'Have',
    translate: 'У тебе є клавіатура?',
    image: '/assets/images/units/unit_2/keyboard.jpg'
  },
  {
    sentence: 'Have you got earphones?',
    example: '{{input}} you got earphones?',
    answer: "Yes, I have",
    missed: 'Have',
    translate: 'У тебе є навушники?',
    image: '/assets/images/units/unit_2/earphones.jpg'
  },
  {
    sentence: 'Has she got a laptop?',
    example: '{{input}} she got a laptop?',
    answer: "Yes, she has",
    missed: 'Has',
    translate: 'У неї є ноутбук?',
    image: '/assets/images/units/unit_2/laptop.jpg'
  },
  {
    sentence: 'Has he got a router?',
    example: '{{input}} he got a router?',
    answer: "Yes, he has",
    missed: 'Has',
    translate: 'У нього є роутер?',
    image: '/assets/images/units/unit_2/router.jpg'
  }
] as ExampleType[];

export const vocabulary = [
  {
    word: 'charger',
    translation: 'зарядний пристрій',
    sound: 'units/unit_2/charger.mp3',
    image: '/assets/images/units/unit_2/charger.jpg'
  },
  {
    word: 'printer',
    translation: 'прінтер',
    sound: 'units/unit_2/printer.mp3',
    image: '/assets/images/units/unit_2/printer.jpg'
  },
  {
    word: 'laptop',
    translation: 'ноутбук',
    sound: 'units/unit_2/laptop.mp3',
    image: '/assets/images/units/unit_2/laptop.jpg'
  },
  {
    word: 'computer',
    translation: 'компьютер',
    sound: 'units/unit_2/computer.mp3',
    image: '/assets/images/units/unit_2/computer.jpg'
  },
  {
    word: 'router',
    translation: 'роутер',
    sound: 'units/unit_2/router.mp3',
    image: '/assets/images/units/unit_2/router.jpg'
  },
  {
    word: 'memory stick',
    translation: 'флешка',
    sound: 'units/unit_2/memory_stick.mp3',
    image: '/assets/images/units/unit_2/memory_stick.jpg'
  },
  {
    word: 'headphones',
    translation: 'навушники',
    sound: 'units/unit_2/headphones.mp3',
    image: '/assets/images/units/unit_2/headphones.jpg'
  },
  {
    word: 'earphones',
    translation: 'навушники',
    sound: 'units/unit_2/earphones.mp3',
    image: '/assets/images/units/unit_2/earphones.jpg'
  },
  {
    word: 'webcam',
    translation: 'вебкамера',
    sound: 'units/unit_2/webcam.mp3',
    image: '/assets/images/units/unit_2/webcam.jpg'
  },
  {
    word: 'keyboard',
    translation: 'клавіатура',
    sound: 'units/unit_2/keyboard.mp3',
    image: '/assets/images/units/unit_2/keyboard.jpg'
  }
];
