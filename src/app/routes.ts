import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];
