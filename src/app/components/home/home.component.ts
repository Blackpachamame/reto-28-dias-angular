import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;
  criteria = '';
  title = 'Día 15 del reto';

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCitySelected(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onCityDelete(id: string): void {
    console.log('id', id);
  }

}
