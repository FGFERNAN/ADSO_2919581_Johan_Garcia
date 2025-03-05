import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {

  private apiUrl = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
