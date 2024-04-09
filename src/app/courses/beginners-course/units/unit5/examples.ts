import {AnswersType, ExampleType, WordsDivideType} from "src/models/types";

export const vocabulary = [
  {
    word: 'Rubber',
    translation: 'Гумка',
    sound: 'units/unit_5/rubber.mp3',
    image: '/assets/images/units/unit_5/rubber.jpg'
  },
  {
    word: 'Ruler',
    translation: 'Лінійка',
    sound: 'units/unit_5/ruler.mp3',
    image: '/assets/images/units/unit_5/ruler.jpg'
  },
  {
    word: 'Pen',
    translation: 'Ручка',
    sound: 'units/unit_5/pen.mp3',
    image: '/assets/images/units/unit_5/pen.jpg'
  },
  {
    word: 'Pencil',
    translation: 'Олівець',
    sound: 'units/unit_5/pencil.mp3',
    image: '/assets/images/units/unit_5/pencil.jpg'
  },
  {
    word: 'Pencil sharpener',
    translation: 'Точилка',
    sound: 'units/unit_5/pencil_sharpener.mp3',
    image: '/assets/images/units/unit_5/pencil_sharpener.jpg'
  },
  {
    word: 'Folder',
    translation: 'Папка',
    sound: 'units/unit_5/folder.mp3',
    image: '/assets/images/units/unit_5/folder.jpg'
  },
  {
    word: 'Bag',
    translation: 'Сумка',
    sound: 'units/unit_5/bag.mp3',
    image: '/assets/images/units/unit_5/bag.jpg'
  },
  {
    word: 'Desk',
    translation: 'Стіл',
    sound: 'units/unit_5/desk.mp3',
    image: '/assets/images/units/unit_5/desk.jpg'
  },
  {
    word: 'Key',
    translation: 'Ключ',
    sound: 'units/unit_5/key.mp3',
    image: '/assets/images/units/unit_5/key.jpg'
  },
  {
    word: 'Chair',
    translation: 'Стілець',
    sound: 'units/unit_5/chair.mp3',
    image: '/assets/images/units/unit_5/chair.jpg'
  }
];


/*
* Folder	box	baby
bag	brush	butterfly
chair	watch	lady
pencil sharpener	tomato	fly (муха)
rubber	dress	strawberry
video	tomato	city
* */

export const words = {} as WordsDivideType;

export const affirmative = [] as ExampleType[];

export const negative = [] as ExampleType[];

export const question = [] as ExampleType[];
