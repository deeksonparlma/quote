import { Component } from '@angular/core';
import { Manipulate } from './manipulate';
import { update } from './manipulate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  voters:number[]=[0,0] ;
  quotes = [
        new Manipulate(this.voters[0],this.voters[1],'Dickson','Live to your fullest potential','12:50 AM'),
        new Manipulate(this.voters[0],this.voters[1],'Jakes','Never give up on first attempt','2:43 PM'),
        new Manipulate(this.voters[0],this.voters[1],'Mark','Keep trying','1:50 AM'),
        new Manipulate(this.voters[0],this.voters[1],'Juliet','It can be done only by your participation','7:39 PM'),
        new Manipulate(this.voters[0],this.voters[1],'Job','Always seek help from your counter-part if you feel stuck','12:50 AM'),
        new Manipulate(this.voters[0],this.voters[1],'June','Don"t be an asshole','7:43 PM'),
    ]
    upvote(){
   var Updates =  [
       this.voters[0]++ ,
       this.voters[1]-- ,
     ]
      }
}
