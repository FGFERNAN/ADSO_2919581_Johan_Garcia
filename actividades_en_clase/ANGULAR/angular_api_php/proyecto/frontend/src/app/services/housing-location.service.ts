import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {
  url = 'http://localhost/ADSO_2919581_Johan_Garcia/actividades_en_clase/ANGULAR/angular_api_php/proyecto/backend/controllers/locations.php';

  constructor() { }

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    try {
      const data = await fetch(this.url);
      if (!data.ok) {
        throw new Error(`Error HTTP: ${data.status}`);
      }
      const response = await data.json();
      return response.datos;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      return [];
    }
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const url = `${this.url}/${id}`;
    console.log('URL de la API:', url);
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Error HTTP: ${data.status}`);
      }
      const response = await data.json();
      return response.datos.find((item: HousingLocation) => item.id === id);
    } catch (error) {
      console.error('Error al obtener datos:', error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`FirstName: ${firstName} - LastName: ${lastName} - Email: ${email}`);
  }
}
