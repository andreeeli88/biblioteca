import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { CarritoService } from '../../services/carrito-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  servicio = inject(CatalogoService);
  carritoService = inject(CarritoService);

  producto: any[] = [];
  productosFiltrados: any[] = [];
  categorias: string[] = [];
  categoriaSelecc: string = '';
  precioMin: number = 0;
  precioMax: number = 1000;

  ngOnInit() {
    this.servicio.getProdcuto().subscribe(t => {
      this.producto = t;
      this.categorias = [...new Set(t.map((item: any) => String(item.genre)))] as string[];
    });
  }

  getCategorias(): string[] {
    return this.categorias;
  }

  addToCart(item: any) {
    this.carritoService.agregarProducto(item);
    console.log('Producto añadido al carrito', item);
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  aplicarFiltros() {
    this.productosFiltrados = this.producto.filter(item => {
      // Si no se selecciona una categoría, mostramos todos los productos
      const cumpleCategoria = this.categoriaSelecc ? item.genre === this.categoriaSelecc : true;
      
      // Filtrar por precio mínimo y máximo
      const cumplePrecio = item.price >= this.precioMin && item.price <= this.precioMax;

      // Retornar los productos que cumplen ambas condiciones
      return cumpleCategoria && cumplePrecio;
    });
  }
}
