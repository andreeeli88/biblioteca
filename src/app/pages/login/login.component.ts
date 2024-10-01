import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminService } from '../../services/service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  password: any;
  servicio = inject(AdminService);

  login(datos: any){
    this.servicio.postLogin(datos.value).subscribe(p =>{
      console.log(p.accessToken)
      if (p.accessToken!= ""){
        sessionStorage.setItem("login", "true")
        if (datos.value.email === "admin@gmail.com"){
          sessionStorage.setItem("role", "admin");
          location.href = "/gestion"
        }else if (datos.value.email === "bibliotecario@gmail.com") {
          sessionStorage.setItem("role", "bibliotecario");
          location.href = "/catalogo"
        } else if (datos.value.email === "invitado@gmail.com") {
          sessionStorage.setItem("role", "invitado");
          location.href = "/home"
        }
       
      }
    })
  }

}
