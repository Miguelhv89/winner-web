import { Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { ProductComponent } from './components/body/product/product.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { AboutComponent } from './components/body/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'productos', component: ProductComponent },
    { path: 'nosotros', component: AboutComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
