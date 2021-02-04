import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-ingresar-producto',
  templateUrl: './ingresar-producto.component.html',
  styles: [
  ]
})
export class IngresarProductoComponent implements OnInit {

  constructor(private productosServ : ProductosService) { }

  ngOnInit(): void {
  }

  addProducto(form: NgForm){
    console.log(form.value.nombre);
    this.productosServ.addProducto({
      nombre : form.value.nombre,
      precio: form.value.precio,
      stock: form.value.stock
    });
  form.resetForm();
  }

}
