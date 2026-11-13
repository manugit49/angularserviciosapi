import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Coche } from "../models/coche";

@Injectable()
export class ServiceCoches {
    constructor(
        private _http: HttpClient
    ) {}

    async getCochesAsync(): Promise<Coche[]> {
        //La request o eEndpoint a utilizar para llegar a los datos
        let request = "api/Coches";
        //La url para conformar la peticion de los datos al servicio
        let url = environment.apicoches + request;
        //Realizamos la petición
        return firstValueFrom(
            this._http.get<Coche[]>(url)
        )
    }
}