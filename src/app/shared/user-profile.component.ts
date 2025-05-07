import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/User';

@Component({
  selector: "app-user-profile",
  imports: [CommonModule],
  template: `
    <p>
      user-profile works!
    </p>
    <pre>{{user | json}}</pre>
  `,
  styles: ``
})
export class UserProfileComponent implements OnInit,OnChanges,OnDestroy {

  @Input() id: number | undefined
  timer : ReturnType<typeof setTimeout> | undefined;
  http = inject(HttpClient);
  user: User | undefined

  constructor(){
    console.log("constructor id = ",this.id);

    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges id = ",this.id);
    this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${this.id}`
    ).subscribe( res => {
      console.log("res: ",res);
      this.user = res
    })
  }

  
  ngOnInit(): void {
    console.log("OnInit id = ",this.id);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy id = ",this.id);
    clearInterval(this.timer);
  }
}
