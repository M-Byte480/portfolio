import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent {

  modalRef: BsModalRef = new BsModalRef();

  constructor(public bsModalRef: BsModalRef) {
  }

  close() {
    this.bsModalRef.hide();
  }
}
