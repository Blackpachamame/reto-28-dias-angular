import { Component, OnInit } from '@angular/core';
import { City, DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: City[] = [];
  selection!: City;
  criteria = '';

  constructor(private readonly dataSVc: DataService) { }

  ngOnInit(): void {
    this.dataSVc.getCities().subscribe(cities => {
      this.cities = [...cities];
    })
  }

  addNewCity(city: string): void {
    // Enviamos a la api nuestra nueva ciudad
    this.dataSVc.addNewCity(city).subscribe(res => {
      // La respuesta de la api la añadimos a nuestro array de cities
      this.cities.push(res);
    })
  }

  onCitySelected(city: City): void {
    this.selection = city;
  }

  onCityDelete(id: string): void {
    console.log('id', id);
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: ''
    };
  }

}
