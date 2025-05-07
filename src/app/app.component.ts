import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./shared/user-profile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <button (click)="visible = !visible">Click me</button>
    <button (click)="changeId()">Change id {{id}}</button>

    <div *ngIf="visible">
    <app-user-profile [id]="id" />
    </div>
    
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

  changeId() {
    console.log("changed id");
    if(this.id  == 10){
      this.id = 1;
    }else{
      this.id++;
    }
  }
}
