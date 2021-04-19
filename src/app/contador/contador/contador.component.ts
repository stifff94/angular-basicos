import { Component } from '@angular/core';

@Component({
    selector:   'app-contador',
    template:`
        <h1></h1>

<button (click)="acomular2()"> +1 </button>
<span> {{base}}</span>
<button (click)="acomular3()"> -1 </button> 
    
    `
})

export class ContadorComponent {
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