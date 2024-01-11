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
  @Input() rating: number = 0;
  @Input() colour: string = '';
  @Input() left: boolean = true;
  @Input() background: string = '';

}
