import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() description: string = '';
  @Input() rating: number = 50;
  @Input() colour: string = '#00b9e3';
  @Input() left: boolean = true;
  @Input() background: string = '#2f3338';
  @Input() skillName: string = '';
  @Input() invertImage: boolean = false;
  @Input() barCount: number = 1;
}
