import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Customer } from "../models/customer";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCustomers {

    //Constructor con el objeto HttpClient para realizar la petición
    constructor(
        private _http: HttpClient
    ){}

    async getCustomersAsync(): Promise<Customer[]> {
        //Necesitamos la request para la petición a nuestro servicio
        let request = "Customers";
        //Indicamos la url
        let url = environment.apicustomers + request;
        //Devolvemos el primer valor del get de la petición. Lee cualquier porque no sabe que son customers
        let response = await firstValueFrom(
            this._http.get<any>(url)
        )
        //Devuelve un array de customers haciendo referencia a la clave value que contiene el array
        return response.value;
    }
}