import { Component } from '@angular/core';
import { Manipulate } from './manipulate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quotes = [
        new Manipulate('Dickson','Live to your fullest potential','12:50 AM'),
        new Manipulate('Jakes','Never give up on first attempt','2:43 PM'),

    ]
}
