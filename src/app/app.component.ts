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
        new Manipulate('Dickson','Live to your fullest potential',new Date(2019,1,25)),
        new Manipulate('Jakes','Never give up on first attempt',new Date(2019,1,6)),
        new Manipulate('Mark','Keep trying',new Date(2019,1,24)),
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
