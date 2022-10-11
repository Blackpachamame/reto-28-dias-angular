/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { City, DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cities: City[] = [];
  selection!: City;
  criteria = '';

  constructor(private readonly dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.selectedCity$.subscribe(
      (city: City) => (this.selection = city)
    );

    this.dataSvc.getCities().subscribe(cities => {
      this.cities = [...cities];
    });
  }

  updateCity(city: City): void {
    this.dataSvc.updateCity(city).subscribe(res => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    });
  }

  addNewCity(city: string): void {
    // Enviamos a la api nuestra nueva ciudad
    this.dataSvc.addNewCity(city).subscribe(res => {
      // La respuesta de la api la añadimos a nuestro array de cities
      this.cities.push(res);
    });
  }

  onCitySelected(city: City): void {
    this.dataSvc.setCity(city);
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.dataSvc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr];
        this.onClear();
      });
    }
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }
}
