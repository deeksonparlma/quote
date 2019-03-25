import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Manipulate } from '../manipulate';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  title = 'quotes'
  newquote=new Manipulate("","",new Date());
  @Output() addquote=new EventEmitter<Manipulate>();
  submitQuote(){
        this.addquote.emit(this.newquote);
    }
  constructor() { }

  ngOnInit() {
  }

}
