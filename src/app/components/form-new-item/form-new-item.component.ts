import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css']
})
export class FormNewItemComponent {
  @Input() className = 'btn-primary';
  @Input() label!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    console.log('Item ->', item);
    this.newItemEvent.emit(item);
  }

}
