import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios


// Componentes
import { AppComponent } from './app.component';
import { IngresarProductoComponent } from './pages/ingresar-producto/ingresar-producto.component';
import { ListarProductoComponent } from './pages/listar-producto/listar-producto.component';
import { ModificarProductoComponent } from './pages/modificar-producto/modificar-producto.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarProductoComponent,
    ListarProductoComponent,
    ModificarProductoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
