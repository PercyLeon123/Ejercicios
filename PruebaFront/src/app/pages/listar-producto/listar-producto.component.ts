import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../entidades/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styles: [
  ]
})
export class ListarProductoComponent implements OnInit {

  productos : any = [];

  constructor( private Producto : ProductosService, private router : Router) { }


  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos() : void {
     this.Producto.getAllProductos().subscribe(xproductos => this.productos = xproductos );
  }
  opciones(id : number):void {
    this.router.navigate(['/modificarProducto', id]);
  }

}
