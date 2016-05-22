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
var KepUpComponent1 = (function () {
    function KepUpComponent1() {
        this.value = '';
    }
    //without Strong type
    KepUpComponent1.prototype.onKey = function (event) {
        console.log(event.target.value);
        this.value += event.target.value + '|';
    };
    KepUpComponent1 = __decorate([
        core_1.Component({
            selector: 'key-up1',
            template: "<input (keyup)= \"onKey($event)\" >\n    <p>{{value}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], KepUpComponent1);
    return KepUpComponent1;
}());
exports.KepUpComponent1 = KepUpComponent1;
////////////////Key-up2/////////////////////
var KepUpComponent2 = (function () {
    function KepUpComponent2() {
        this.value = '';
    }
    KepUpComponent2.prototype.onKey = function (value) {
        this.value += value + ' | ';
    };
    KepUpComponent2 = __decorate([
        core_1.Component({
            selector: 'key-up2',
            template: "<input #box (keyup)=\"onKey(box.value)\">\n    <p>{{value}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], KepUpComponent2);
    return KepUpComponent2;
}());
exports.KepUpComponent2 = KepUpComponent2;
////////////////Key-up3//////////////////
var KepUpComponent3 = (function () {
    function KepUpComponent3() {
        this.values = '';
    }
    KepUpComponent3 = __decorate([
        core_1.Component({
            selector: 'key-up3',
            template: "<input #box (keyup.enter)=\"values=box.value\">\n    <p>{{values}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], KepUpComponent3);
    return KepUpComponent3;
}());
exports.KepUpComponent3 = KepUpComponent3;
//////////////Key-up4////////////
var KepUpComponent4 = (function () {
    function KepUpComponent4() {
        this.values = '';
    }
    KepUpComponent4 = __decorate([
        core_1.Component({
            selector: 'key-up4',
            template: "<input #box (keyup.enter)= \"values = box.value\" (blur)= \"values = box.value\">\n    <p>{{values}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], KepUpComponent4);
    return KepUpComponent4;
}());
exports.KepUpComponent4 = KepUpComponent4;
//# sourceMappingURL=keyup.components.js.map