import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() action: string = '';
  @Input() link: string = '';
  @Input() text: string = '';


  takeAction(): void{
    switch(this.action){
      case 'open':
        this.onClick();
        break;
      case 'close':
        console.log('close');
        break;
      default:
        console.log('No action defined');
        break;
    }
  }

  onClick(): void{
    window.open(this.link, '_blank');
  }
}
