import {Component} from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<h2>My favorite hero is {{myHero.name}} </h2>
				<p>Heroes</p>
				<ul>
				<li *ngFor="let hero of heroes"> 
				{{hero.name}}
				</li>
				</ul>
				 <p *ngIf="heroes.length > 3">There are many heroes!</p>`
})

export class AppComponent{
	//simple way
	//title = 'Tour of Heroes';
	//hero = 'Windrotm';
	
	//another way for variable initialization using Constructor
	// title: string;
	// hero: string;
	
	// constructor(){
	// 	this.title = 'Tour of Heroes';
	// 	this.hero = 'Windrotm';
	// }
	
	
	//way used in tutorial
	
	title =  'Tour of Heroes';
	//heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	heroes = [
		new Hero(1, 'Windstorm'),
  		new Hero(13, 'Bombasto'),
  		new Hero(15, 'Magneta'),
  		new Hero(20, 'Tornado')
	];
	
	myHero = this.heroes[1];
	
}

//console.log(new Hero(1, 'Windstorm'))