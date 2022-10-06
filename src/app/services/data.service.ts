import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface City {
  _id: string;
  name: string;
}

const initCity: City = {
  _id: '',
  name: ''
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private city$ = new BehaviorSubject<City>(initCity);

  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) { }

  get selectedCity$(): Observable<City> {
    return this.city$.asObservable();
  }

  setCity(city: City): void {
    this.city$.next(city);
  }

  addNewCity(city: string): Observable<City> {
    const body = { name: city };
    return this.http.post<City>(this.API, body);
  }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.API);
  }

  updateCity(city: City): Observable<void> {
    const body = { name: city.name };
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }
  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
