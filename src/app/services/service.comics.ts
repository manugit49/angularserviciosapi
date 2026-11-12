import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()//lo puede recibir cualquier componente pero primero ha de estar declarado en el módulo en la seccion "providers"
export class ServiceComics {
    //Para tener claros los métodos asincronos, por noma
    //deberiamos poner la palabra async al final del nombre del método
    async getComicsAsync(): Promise<Comic[]> {
        let path ="documents/comics.json";
        //Realizamos la petición
        let response = await fetch(path);
        //Convertimos los datos a json
        let datos = await response.json();
        //declaramos un array para extraer los datos
        let arraycomics: Comic[] = [];
        //recorremos los datos
        for(let elem of datos) {
            //creamos un objeto de tipo comic
            let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
            console.log(comic);
            //lo añadimos al array
            arraycomics.push(comic);
        }
        return arraycomics;
    }

    //inventamos un método para visualizar
    //como funciona
    getSaludo(): string {
        //al final del método, siempre debemos
        //devolver algo del tipo indicado
        return "Hola, soy un servicio de martes"
    }

    getComic(): Comic {
        let comic = new Comic("Spiderman", 
            "https://i.pinimg.com/1200x/ae/61/f2/ae61f26f3211941741e442e8ec54a35f.jpg",
             "Superheroe!"
            )
        return comic;
    }
}