import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/User';

@Component({
  selector: "app-user-profile",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <p>
      user-profile works!
    </p>
<!--     gestione della changeDetectionStrategy su un oggetto  -->
    <pre>{{inputArray | json}}</pre>
    <pre>{{user | json}}</pre>
    <pre>{{visible}}</pre>

    {{ renderMe()}}
  `,
  styles: ``
})
export class UserProfileComponent implements OnInit,OnChanges,OnDestroy {

  @Input() id: number | undefined;
  @Input() visible: boolean | undefined;

  // gestione della changeDetectionStrategy su un oggetto 
  @Input() inputArray: number[] | undefined;

//  timer : ReturnType<typeof setTimeout> | undefined;
  http = inject(HttpClient);
  user: User | undefined


  constructor(public cdr: ChangeDetectorRef){
    console.log("constructor id = ",this.id);
        


    /* this.timer = setInterval(() => {
      console.log("timer");
    }, 1000); */
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges id = ",this.id);
    console.log("OnChanges visible = ",this.visible);
  
    console.log("OnChanges changes = ", changes);
  
    if (changes["id"]){
      this.http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${changes["id"].currentValue}`)
      .subscribe( res => {
        console.log("res: ",res);
        this.user = res
                // ChangeDetectorRef è utilizzato per forzare l'aggiornamento dei componenti. senza che ci siano modifiche
                this.cdr.markForCheck();
      })
    }

    if(changes["visible"]){
      console.log("OnChanges visible = ",this.visible);

    }

    if(changes["inputArray"]){
      console.log("OnChanges inputArray = ",this.inputArray);

    }

   
  }

  
  ngOnInit(): void {
    console.log("OnInit id = ",this.id);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy id = ",this.id);
    // clearInterval(this.timer);
  }

  renderMe(){
    console.log("render me");
  }
}
