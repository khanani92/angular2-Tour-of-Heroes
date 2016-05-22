import {Component} from '@angular/core';
import { Hero } from './hero';
import { ClickMeComponent } from './click-me.component';
import { KepUpComponent1 } from './keyup.components';
import { LoopbackComponent } from './loop-back.component';
import { KepUpComponent2 } from './keyup.components';
import { KepUpComponent3 } from './keyup.components';
import { KepUpComponent4 } from './keyup.components';
import { LittleTourComponent } from './little-tour.component';
@Component({
	selector: 'my-app',
	templateUrl:  'app/app.component.html',
	directives: [
		ClickMeComponent, 
		KepUpComponent1, 
		LoopbackComponent, 
		KepUpComponent2,
		KepUpComponent3,
		KepUpComponent4,
		LittleTourComponent]
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