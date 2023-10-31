import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.75s ease-out',
              style({ height: '100%', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: '100%', opacity: 1 }),
            animate('0.5s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class BaseModalComponent {
  // Test val is the two way is modal open
  @Input() testVal: boolean = false;
  @Output() testValChange = new EventEmitter<boolean>();
  @Input() description: string= '';
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';
  constructor() {
  }

  open(): void{

  }

  close(): void{
    this.testVal = false;
    this.testValChange.emit(this.testVal);
  }

  nothing() {

  }

  openLink() {
    window.open(this.link, '_blank');

  }
}
