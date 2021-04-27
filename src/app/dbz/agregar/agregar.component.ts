import { DbzService } from './../services/dbz.service';
import { Component, Input} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
 
  @Input() nuevo: Personaje={
    nombre: '',
    poder: 0
  }

  constructor(private dbzservice: DbzService) { }


  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
    console.log(this.nuevo)
      this.dbzservice.agregarpersonaje(this.nuevo)
      this.nuevo={
        nombre: '',
        poder: 0
      }
  }
  cambiarnombre(event: any){
    console.log(event)
    
  }
}
