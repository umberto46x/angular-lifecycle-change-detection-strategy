import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./shared/user-profile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <button (click)="visible = !visible">Show / Hide </button>
    <button (click)="changeId()">Change id {{id}}</button>
    <button (click)="doNothing()">do nothing </button>
    <input type="text" (keydown)="doNothing()" placeholder="doNothingByTyping" />


   
    <app-user-profile [id]="id" [visible]="visible"  />
 
    
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {


  title = 'angular-lifecycle-change-detection-strategy';
  id: number= 1;
  visible: boolean = true;

  constructor(){
    console.log("COnstructor app root");
  }

  doNothing() {
    console.log("nothing")
  }
 
  changeId() {
    console.log("changed id");
    if(this.id  == 10){
      this.id = 1;
    }else{
      this.id++;
    }
  }
}
