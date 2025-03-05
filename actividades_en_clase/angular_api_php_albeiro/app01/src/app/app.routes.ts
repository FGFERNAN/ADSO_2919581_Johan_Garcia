import { Routes } from '@angular/router';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';

export const routes: Routes = [
    { path: 'locations', component: HousingLocationComponent },
    { path: '', redirectTo: '/locations', pathMatch: 'full' }
];
