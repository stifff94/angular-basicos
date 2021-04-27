import { Personaje } from './../interfaces/dbz.interface';
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { empty } from 'rxjs';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  


  nuevo: Personaje={
    nombre: '',
    poder: 0,
  }
 
  

  constructor( ){
  }

 
  
}
