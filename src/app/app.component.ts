import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;
  criteria = '';
  title = 'Día 13 del reto';

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onSearch(): void {
    console.log('onSearch');
  }
}
