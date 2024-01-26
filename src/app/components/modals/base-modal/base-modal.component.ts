import {Component, EventEmitter, Input, OnInit, Output, Signal} from '@angular/core';
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
  // testVal is the two-way checker for, isModalOpen
  @Input() testVal: boolean = false;
  @Output() testValChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() description: string= '';
  @Input() firstParagraph: string = '';
  @Input() secondParagraph: string = '';
  @Input() ulElements: string[] = [];
  @Input() olElements: string[] = [];
  @Input() thirdParagraph: string = '';
  @Input() videoSrc: string = '';
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';
  @Output() isActive = new EventEmitter<boolean>();
  constructor(public sanitizer: DomSanitizer) {
  }


  open(): void{
  }

  close(): void{
    this.testVal = false;
    this.testValChange.emit(this.testVal);
    this.isActive.emit(false);
  }

  doNothing(): void {}

  openLink(): void {
    window.open(this.link, '_blank');
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  protected readonly transition = transition;
}
