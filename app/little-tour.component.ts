import { Component } from '@angular/core';

@Component({
    selector:'little-tour',
    template:`<input #newHero (keyup.enter) = "addHero(newHero.value)"
    (blur)="addHero(newHero.value); newHero.value=''">
    <button (click)="addHero(newHero.value)">Add</button>
    <ul><li *ngFor = "let hero of heroes">{{hero}}</li></ul>`
})

export class LittleTourComponent{
     heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
     addHero(value:string){
         if(value){
             this.heroes.push(value);
         }
     }
}