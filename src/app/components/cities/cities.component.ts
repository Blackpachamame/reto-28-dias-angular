import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
  <ul class="list-group">
  <li class="list-group-item mt-1 d-flex justify-content-between align-items-center" (click)="onCitySelected(city)"
      [ngClass]="{'active': city === selection}">
      {{city}}
        <button type="button" 
        class="btn btn-danger"
        (click)="onCityDelete('1')">Delete</button>
   </li>
   </ul>`,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;
  @Output() citySelectedEvent = new EventEmitter<string>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: string): void {
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
