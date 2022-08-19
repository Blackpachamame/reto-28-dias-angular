import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;
  title = 'Día 9 del reto';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }
}
