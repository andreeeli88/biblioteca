import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  acceso:any="";
  rol : any ="";
  
  ngOnInit(){
    this.acceso=sessionStorage.getItem('login' );
    this.rol=sessionStorage.getItem('role' );
  }
  cerrar(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('rol');
    window.location.href = "/login";
  }
}
