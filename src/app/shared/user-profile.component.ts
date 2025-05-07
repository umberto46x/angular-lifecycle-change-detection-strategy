import { Component, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  template: `
    <p>
      user-profile works!
    </p>
  `,
  styles: ``
})
export class UserProfileComponent implements OnInit,OnChanges,OnDestroy {

  @Input() id: number | undefined
  timer : ReturnType<typeof setTimeout> | undefined;

  constructor(){
    console.log("constructor id = ",this.id);

    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges id = ",this.id);
  }

  
  ngOnInit(): void {
    console.log("OnInit id = ",this.id);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy id = ",this.id);
    clearInterval(this.timer);
  }
}
