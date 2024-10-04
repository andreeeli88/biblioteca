import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { LoginComponent } from './pages/login/login.component';
import { adminGuard, adminobibliotecarioGuard, bibliotecarioGuard, invitadosGuard } from './guardian/privado.guard';
import { GestionLibroComponent } from './components/gestion-libro/gestion-libro.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { ContactosComponent } from './components/contactos/contactos.component';



export const routes: Routes = [
    {path:"home",component:HomeComponent },
    {path:"catalogo",component:CatalogoComponent },
    {path:"prestamos",component:PrestamosComponent, canActivate:[bibliotecarioGuard, adminGuard]},
    {path:"gestion",component:GestionLibroComponent, canActivate:[adminGuard]},
    {path:"usuarios",component:GestionUsuariosComponent, canActivate:[adminGuard]},
    {path:"nosotros",component:NosotrosComponent},
    {path:"terminos",component:TerminosComponent},
    {path:"contactos",component:ContactosComponent},
    {path:"carrito",component:CarritoComponent, canActivate:[adminobibliotecarioGuard]},



    {path:"",component:LoginComponent },
   



    {path:"**",redirectTo:"",pathMatch:'full' }
];
