import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.css']
})
export class StrengthBarComponent {
  @Input() rating: number = 0;
  @Input() colour: string = '';
  @Input() backgroundColour: string = '';
  @Input() skillName: string = '';
  @Input() barCount: number = 1;
}
