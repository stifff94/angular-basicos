import { Personaje } from './../interfaces/dbz.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class DbzService{
    private _personajes: Personaje[]=[
        {
          nombre: "goku",
          poder: 122222
        },
        {
          nombre: "vegeta",
          poder: 12222
        },
      ];
      get personajes(): Personaje[]{
          return [...this._personajes]
      }
    constructor(){
       
    }

    agregarpersonaje(personaje: Personaje){
            this._personajes.push(personaje)
    }

}