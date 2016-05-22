"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var click_me_component_1 = require('./click-me.component');
var keyup_components_1 = require('./keyup.components');
var loop_back_component_1 = require('./loop-back.component');
var keyup_components_2 = require('./keyup.components');
var keyup_components_3 = require('./keyup.components');
var keyup_components_4 = require('./keyup.components');
var little_tour_component_1 = require('./little-tour.component');
var AppComponent = (function () {
    function AppComponent() {
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
        this.title = 'Tour of Heroes';
        //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(20, 'Tornado')
        ];
        this.myHero = this.heroes[1];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [
                click_me_component_1.ClickMeComponent,
                keyup_components_1.KepUpComponent1,
                loop_back_component_1.LoopbackComponent,
                keyup_components_2.KepUpComponent2,
                keyup_components_3.KepUpComponent3,
                keyup_components_4.KepUpComponent4,
                little_tour_component_1.LittleTourComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//console.log(new Hero(1, 'Windstorm')) 
//# sourceMappingURL=app.component.js.map