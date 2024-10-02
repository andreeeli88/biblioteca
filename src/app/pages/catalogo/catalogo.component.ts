  import { Component, inject } from '@angular/core';
  import { CatalogoService } from '../../services/catalogo.service';
import { CarritoService } from '../../services/carrito-service.service';


  @Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [],
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css'
  })
  export class CatalogoComponent {
    servicio = inject(CatalogoService);
    carritoService = inject(CarritoService);

    producto: any;

    ngOnInit() {
      this.servicio.getProdcuto().subscribe(t => {
        this.producto = t;
      });
    }

    addToCart(item: any) {
      this.carritoService.agregarProducto(item);
      console.log('Producto añadido al carrito', item);
    }

    trackById(index: number, item: any): number {
      return item.id;
    }
  }
