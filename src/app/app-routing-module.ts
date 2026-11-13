import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ClientesComponent } from './components/clientes-component/clientes-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { HospitalesComponent } from './components/hospitales-component/hospitales-component';
import { CustomersApiComponent } from './components/customers-api-component/customers-api-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "comics", component: ComicsComponent},
  { path: "datosclientes", component: ClientesComponent },
  { path: "personas", component: PersonasApiComponent },
  { path: "hospitales", component: HospitalesComponent },
  { path: "customers", component: CustomersApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
