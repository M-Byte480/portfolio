import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

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
  @Output() testValChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() description: string= '';
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';

  trustedHtml: SafeHtml = '';
  constructor(public sanitizer: DomSanitizer) {
  }

  open(): void{
  }

  close(): void{
    this.testVal = false;
    this.testValChange.emit(this.testVal);
  }

  nothing(): void {}

  openLink(): void {
    window.open(this.link, '_blank');
  }
}
