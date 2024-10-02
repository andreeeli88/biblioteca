import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { LoginComponent } from './pages/login/login.component';
import { adminGuard, bibliotecarioGuard, invitadosGuard } from './guardian/privado.guard';
import { GestionLibroComponent } from './components/gestion-libro/gestion-libro.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { CarritoComponent } from './components/carrito/carrito.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent ,canActivate:[invitadosGuard]},
    {path:"catalogo",component:CatalogoComponent, canActivate:[bibliotecarioGuard] },
    {path:"prestamos",component:PrestamosComponent, canActivate:[bibliotecarioGuard]},
    {path:"gestion",component:GestionLibroComponent, canActivate:[adminGuard]},
    {path:"usuarios",component:GestionUsuariosComponent, canActivate:[adminGuard]},
    {path:"carrito",component:CarritoComponent},

    {path:"",component:LoginComponent },
   



    {path:"**",redirectTo:"",pathMatch:'full' }
];
