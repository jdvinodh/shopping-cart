import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<any>();

  onClickbutton(event: any) {
    this.onClick.emit(event);
  }
}
