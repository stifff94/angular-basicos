import { DbzService } from './../services/dbz.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
 // @Input() personajes: Personaje[]= [];

get personajes(){
  return this.dbzservice.personajes
}

  
  constructor(private dbzservice: DbzService) { }

  

}
