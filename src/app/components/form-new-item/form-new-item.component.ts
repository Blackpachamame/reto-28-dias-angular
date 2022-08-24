import { Component } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css']
})
export class FormNewItemComponent {

  onAddNewItem(item: string): void {
    console.log('Item ->', item);
  }

}
