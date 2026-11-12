import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente";

@Injectable()
export class ServiceClientes {

    async getClientesAsync(): Promise<Cliente[]> {
        //Ruta del fichero a ser leido
        let path = "documents/clientesdatos.json";
        //realizamos la petición
        let response = await fetch(path);
        //convertimos los datos a json
        let datos = await response.json();
        //declaramos un array de clientes para extraer los datos
        let arrayclientes: Cliente[] = [];
        //recorremos los datos del json
        for(let elem of datos) {
            //Creamos un nuevo objeto de tipo cliente
            let cliente = new Cliente(elem.idcliente, elem.nombre
                , elem.paginaweb, elem.imagencliente);
            //añadimos al array el nuevo objeto cliente
            arrayclientes.push(cliente);
        }
        return arrayclientes;
    }
}