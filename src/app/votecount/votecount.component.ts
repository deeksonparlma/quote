import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votecount',
  templateUrl: './votecount.component.html',
  styleUrls: ['./votecount.component.css']
})
export class VotecountComponent implements OnInit {
  upvotes:number = 0 ;
  downvotes:number = 0 ;
  upvote(){
    this.upvotes +=1 ;
}
downvote(){
this.downvotes +=1 ;
}
  constructor() { }

  ngOnInit() {
  }

}
