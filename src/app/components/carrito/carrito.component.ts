import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  
    carrito: any[] = [];
  
    constructor(private carritoService: CarritoService) {}
  
    ngOnInit() {
      this.carrito = this.carritoService.obtenerCarrito();
    }
    agregarProducto(producto: any) {
      const productoExistente = this.carrito.find(p => p.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        this.carrito.push({ ...producto, cantidad: 1 });
      }
      console.log('Carrito actualizado:', this.carrito); // Verificar si el producto se añade
    }
    
  
    eliminarProducto(id: number) {
      this.carritoService.eliminarProducto(id);
      this.carrito = this.carritoService.obtenerCarrito(); // Actualizar carrito
    }
  
    get total() {
      return this.carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
    }
    abrirModal() {
      const modalElement = document.getElementById('pagoModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }

   
    confirmarPago() {
      console.log('Pago confirmado, total: ', this.total);
     
    }
}
