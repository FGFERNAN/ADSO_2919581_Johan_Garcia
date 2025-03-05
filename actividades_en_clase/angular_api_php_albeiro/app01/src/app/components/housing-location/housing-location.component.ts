import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingLocationService } from '../../services/housing-location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent implements OnInit {

  locations: HousingLocation[] = [];

  constructor(private housingLocationService: HousingLocationService){}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.housingLocationService.getAllLocations().subscribe(
      response => {
        console.log('Respuesta de la API:', response); 
        this.locations = response.datos;
      },
      error => console.error('Error al obtener las ubicaciones:', error)
    );
  }

}
