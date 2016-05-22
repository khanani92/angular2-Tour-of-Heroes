import {Component} from '@angular/core';

@Component({
    selector:'key-up1',
    template:`<input (keyup)= "onKey($event)" >
    <p>{{value}}</p>`
})

export class KepUpComponent1{
    value = '';
    
    //without Strong type
    onKey(event:any){
        console.log(event.target.value);
        this.value += event.target.value + '|'
    }
    
    //with Strong type
    //onKey(event:KeyboardEvent){
      //  this.value += (<HTMLInputElement>event.target).value + '|'
    //}
    
}

////////////////Key-up2/////////////////////

@Component({
    selector: 'key-up2',
    template: `<input #box (keyup)="onKey(box.value)">
    <p>{{value}}</p>`
})

export class KepUpComponent2{
    value = '';
    onKey(value: string){
        this.value += value + ' | ';
    }
}

////////////////Key-up3//////////////////

@Component({
    selector: 'key-up3',
    template: `<input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>`
})

export class KepUpComponent3{
    values = '';
   
}

//////////////Key-up4////////////

@Component({
    selector: 'key-up4',
    template: `<input #box (keyup.enter)= "values = box.value" (blur)= "values = box.value">
    <p>{{values}}</p>`
})

export class KepUpComponent4{
    values = '';
}