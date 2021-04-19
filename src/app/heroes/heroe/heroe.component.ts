import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: Number = 27;
    get nombreCap(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
        return this.nombre + " "+this.edad.toString();
    }
    cambiarNombre(): void {
        this.nombre = 'Spiderman';

    }
    cambiarEdad(): void {
        this.edad = 28;
    }
}