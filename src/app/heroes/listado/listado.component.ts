import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

 heroes: string[] = ["Spiderman","Hulk","Ironman"];
heroeBorrado: string=''

 borrarheroe(){
  
 
  this.heroeBorrado=this.heroes.shift() || '';
 }

}
