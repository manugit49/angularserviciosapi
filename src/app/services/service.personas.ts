import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";
 
@Injectable()
export class ServicePersonas {
    //en los servicios api debemos recuperar HttpClient
    constructor(
        private _http: HttpClient
    ) {}

    async getPersonasAsync(): Promise<Persona[]> {
        //necesitamos la url de nuestro servicio
        let request = "api/personas"
        let url = environment.apipersonas + request;
        //deolvemos el primer valor del get
        return firstValueFrom(
            //hacemos una petición con http
            this._http.get<Persona[]>(url)
        )
    }

    async findPersonaAsync(id: number): Promise<Persona>{
        let request = "api/personas/" + id;
        //La url será...
        let url = environment.apipersonas + request;
        return firstValueFrom(
            this._http.get<Persona>(url)
        )
    }
}