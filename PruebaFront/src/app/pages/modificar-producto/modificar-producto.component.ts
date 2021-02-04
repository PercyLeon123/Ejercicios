import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../entidades/productos';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styles: [
  ]
})

export class ModificarProductoComponent implements OnInit {
  nombre : string = '';
  precio! : number;
  stock! : number;

  id! : number;

  constructor(private activateRoute : ActivatedRoute, private producto : ProductosService,  private router : Router) {

    this.activateRoute.params.subscribe(params =>{

      console.log(params.id)
      this.id =params.id;
    });
   }

  ngOnInit(): void {
    this.obtener();
  }

  obtener(): void {
    this.producto.getProducto(this.id).subscribe(xproductos => {
      this.nombre = xproductos.nombre;
      this.precio = xproductos.precio;
      this.stock = xproductos.stock;
    } );

  }

  updatePersonas(form: NgForm){
    console.log(form.value.nombre);
    this.producto.updatePersonas({
      id : this.id,
      nombre : form.value.nombre,
      precio: form.value.precio,
      stock: form.value.stock
    });
    this.router.navigate(['/ingresarProducto']);
  }

  deletePersonas():void{
    this.producto.deletePersonas(this.id);
      this.router.navigate(['/ingresarProducto']);
  }
}
