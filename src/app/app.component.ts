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
  upvotes:number = 0 ;
  downvotes:number = 0 ;
  quotes = [
        new Manipulate(this.voters[0],this.voters[1],'Dickson','Live to your fullest potential',Date()),
        new Manipulate(this.voters[0],this.voters[1],'Jakes','Never give up on first attempt',Date()),
        new Manipulate(this.voters[0],this.voters[1],'Mark','Keep trying',Date()),
        new Manipulate(this.voters[0],this.voters[1],'Juliet','It can be done only by your participation',Date()),
        new Manipulate(this.voters[0],this.voters[1],'Job','Always seek help from your counter-part if you feel stuck',Date()),
        new Manipulate(this.voters[0],this.voters[1],'June','Don"t be an asshole',Date()),
    ]
    upvote(){
      this.upvotes +=1 ;
}
downvote(){
  this.downvotes +=1 ;
}

addNewquote(quote){
        this.quotes.push(quote)
    }
}
