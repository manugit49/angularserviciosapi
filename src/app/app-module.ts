import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ServiceComics } from './services/service.comics';
import { ClientesComponent } from './components/clientes-component/clientes-component';
import { ServiceClientes } from './services/service.clientes';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from './services/service.personas';
import { FormsModule } from '@angular/forms';
import { HospitalesComponent } from './components/hospitales-component/hospitales-component';
import { ServiceHospitales } from './services/service.hospitales';
import { ServiceCustomers } from './services/service.customers';
import { CustomersApiComponent } from './components/customers-api-component/customers-api-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { DetalleCocheComponent } from './components/detalle-coche-component/detalle-coche-component';
import { MenuCochesComponent } from './components/menu-coches-component/menu-coches-component';
import { DetalleHospitalComponent } from './components/detalle-hospital-component/detalle-hospital-component';
import { MenuHospitalesComponent } from './components/menu-hospitales-component/menu-hospitales-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    ComicsComponent,
    ClientesComponent,
    PersonasApiComponent,
    HospitalesComponent,
    CustomersApiComponent,
    CochesApiComponent,
    DetalleCocheComponent,
    MenuCochesComponent,
    DetalleHospitalComponent,
    MenuHospitalesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    ServiceComics,
    ServiceClientes,
    ServicePersonas,
    ServiceHospitales,
    ServiceCustomers,
    ServiceCoches,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App],
})
export class AppModule {}
