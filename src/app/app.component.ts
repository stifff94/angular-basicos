import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  numero: number =10;
  base: number =5;
  acomular(valor:number){
    this.numero += valor;
  }
  acomular2(){
    this.base += 5;
  }  
  acomular3(){
    this.base -= 5;
  }
}
