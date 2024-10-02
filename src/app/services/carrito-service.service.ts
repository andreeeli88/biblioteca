import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carrito: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    // Verifica si el producto ya está en el carrito
    const productoExistente = this.carrito.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(item => item.id !== id);
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}
