import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { City } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }
}
