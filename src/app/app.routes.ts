import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./component/products/products.component').then(m => m.ProductsComponent) 
    }
];
