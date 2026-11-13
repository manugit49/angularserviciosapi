import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Hospital } from "../models/hospital";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceHospitales {
    
    //en los servicios api recuperar HttpClient
    constructor(
        private _http: HttpClient
    ) {}

    async getHospitales(): Promise<Hospital[]> {
        //Necesitamos la url de nuestro servicio
        let request = "api/hospitales";
        let url = environment.apihospitales + request;
        //Devolvemos el primer valor del get
        return firstValueFrom(
            this._http.get<Hospital[]>(url)
        )
    }

    async findHospital(id: number): Promise<Hospital>{
        let request = "api/hospitales/" + id;
        //La url de nuestro servicio junto con la request
        let url = environment.apihospitales + request;
        //Devolvemos el primer valor del get
        return firstValueFrom(
            this._http.get<Hospital>(url)
        )
    }
}