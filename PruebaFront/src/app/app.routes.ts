/* Sistema de rutas del Angular */
import { RouterModule, Routes } from '@angular/router';
import { IngresarProductoComponent } from './pages/ingresar-producto/ingresar-producto.component';
import { ListarProductoComponent } from './pages/listar-producto/listar-producto.component';
import { ModificarProductoComponent } from './pages/modificar-producto/modificar-producto.component';


/* Agregar los componentes al APP_ROUTES*/
const APP_ROUTES: Routes = [
  { path: 'ingresarProducto', component: IngresarProductoComponent},
  { path: 'listarProducto', component: ListarProductoComponent},
  { path: 'modificarProducto/:id', component: ModificarProductoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'ingresarProducto' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
