import {ExampleType} from "src/models/types";


/**
 * I have got a charger.
 * You have got a printer.
 * She has got two laptops.
 * He has got three computers.
 * They have got a router.
 * We have got five memory sticks.
 * She has got headphones
 * He has got earphones.
 * I have got a keyboard.
 * We have got a webcam.
 * */
export const affirmative = [
  {
    sentence: 'I have got a charger',
    example: 'I {{input}} a charger',
    missed: 'have got',
    translate: 'У мене є зарядний пристрій',
    image: '/assets/images/units/unit_2/charger.png'
  },
  {
    sentence: 'You have got a printer',
    example: 'You {{input}} a printer',
    missed: 'have got',
    translate: 'У тебе є прінтер',
    image: '/assets/images/units/unit_2/printer.png'
  },
  {
    sentence: 'She has got two laptops',
    example: 'She {{input}} two laptops',
    missed: 'has got',
    translate: 'У неї є два ноутбуки',
    image: '/assets/images/units/unit_2/laptop.png'
  },
  {
    sentence: 'He has got three computers',
    example: 'He {{input}} three computers',
    missed: 'has got',
    translate: 'У нього є три компьютери',
    image: '/assets/images/units/unit_2/computer.png'
  },
  {
    sentence: 'They have got a router',
    example: 'They {{input}} a router',
    missed: 'have got',
    translate: 'У них є роутер',
    image: '/assets/images/units/unit_2/router.png'
  },
  {
    sentence: 'We have got five memory sticks',
    example: 'We {{input}} five memory sticks',
    missed: 'have got',
    translate: 'У нас є п’ять флешок',
    image: '/assets/images/units/unit_2/memory_stick.png'
  },
  {
    sentence: 'She has got headphones',
    example: 'She {{input}} headphones',
    missed: 'has got',
    translate: 'У неї є навушники',
    image: '/assets/images/units/unit_2/headphones.png'
  },
  {
    sentence: 'He has got earphones',
    example: 'He {{input}} earphones',
    missed: 'has got',
    translate: 'У нього є навушники',
    image: '/assets/images/units/unit_2/earphones.png'
  },
  {
    sentence: 'I have got a keyboard',
    example: 'I {{input}} a keyboard',
    missed: 'have got',
    translate: 'У мене є клавіатура',
    image: '/assets/images/units/unit_2/keyboard.png'
  },
  {
    sentence: 'We have got a webcam',
    example: 'We {{input}} a webcam',
    missed: 'have got',
    translate: 'У нас є вебкамера',
    image: '/assets/images/units/unit_2/webcam.png'
  }
] as ExampleType[]

export const vocabulary = [
  {
    word: 'charger',
    translation: 'зарядний пристрій',
    sound: 'units/unit_2/charger.mp3',
    image: '/assets/images/units/unit_2/charger.png'
  },
  {
    word: 'printer',
    translation: 'прінтер',
    sound: 'units/unit_2/printer.mp3',
    image: '/assets/images/units/unit_2/printer.png'
  },
  {
    word: 'laptop',
    translation: 'ноутбук',
    sound: 'units/unit_2/laptop.mp3',
    image: '/assets/images/units/unit_2/laptop.png'
  },
  {
    word: 'computer',
    translation: 'компьютер',
    sound: 'units/unit_2/computer.mp3',
    image: '/assets/images/units/unit_2/computer.png'
  },
  {
    word: 'router',
    translation: 'роутер',
    sound: 'units/unit_2/router.mp3',
    image: '/assets/images/units/unit_2/router.png'
  },
  {
    word: 'memory stick',
    translation: 'флешка',
    sound: 'units/unit_2/memory_stick.mp3',
    image: '/assets/images/units/unit_2/memory_stick.png'
  },
  {
    word: 'headphones',
    translation: 'навушники',
    sound: 'units/unit_2/headphones.mp3',
    image: '/assets/images/units/unit_2/headphones.png'
  },
  {
    word: 'earphones',
    translation: 'навушники',
    sound: 'units/unit_2/earphones.mp3',
    image: '/assets/images/units/unit_2/earphones.png'
  },
  {
    word: 'webcam',
    translation: 'вебкамера',
    sound: 'units/unit_2/webcam.mp3',
    image: '/assets/images/units/unit_2/webcam.png'
  },
  {
    word: 'keyboard',
    translation: 'клавіатура',
    sound: 'units/unit_2/keyboard.mp3',
    image: '/assets/images/units/unit_2/keyboard.png'
  }
];
