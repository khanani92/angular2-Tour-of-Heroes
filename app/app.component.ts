import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<h2>My favorite hero is {{myHero}} </h2>
				<p>Heroes</p>
				<ul>
				<li *ngFor="let hero of heroes"> 
				{{hero}}
				</li>
				</ul>`
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
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	myHero = this.heroes[0];
	
}