import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-words-writer',
  templateUrl: './words-writer.component.html',
  styleUrls: ['./words-writer.component.scss'],
})
export class WordsWriterComponent  implements OnInit {
  @Input() sentences: string[] = [
    'The weather {{input}} nice today.',
    'I {{input}} not rich.',
    'This bag {{input}} heavy.',
    'These bags {{input}} heavy.',
    'Look! There {{input}} Helen.',
    'My brother and I {{input}} good tennis players.',
    'Emily {{input}} at home. Her children {{input}} at school.',
    'I {{input}} a taxi driver. My sister {{input}} a nurse.'
  ];

  constructor() { }

  ngOnInit() {
    console.log('WordsWriterComponent -> ngOnInit')
  }

}
