import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../entidades/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'http://localhost:50556/api/Producto';

  constructor( private http : HttpClient ) { }

  getAllProductos(){
    const url_api = this.url;
    return this.http.get(url_api);
  }

  getProducto(id : number){

    const url_api = this.url+'/'+id;
    console.log(url_api);
    return this.http.get(url_api);
  }

  addProducto(producto : Productos){
    console.log(producto.nombre);
    const url_api = this.url;
    this.http.post(url_api, producto)
    .subscribe(data => data);
  }

  updatePersonas(producto : Productos){
    console.log(producto.id);
    const url_api = this.url;
    this.http.put(url_api, producto)
    .subscribe(data => data);
  }

  deletePersonas(id : number){
    const url_api = this.url+'/'+id;
    this.http.delete(url_api)
    .subscribe(data => data);
  }

}
