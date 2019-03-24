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
        new Manipulate(0,'Dickson','Live to your fullest potential','12:50 AM'),
        new Manipulate(0,'Jakes','Never give up on first attempt','2:43 PM'),

    ]
    
    upvote() {
    let vote = this.userVote == 1 ? 0 : 1
    this.upvoteService.updateUserVote(this.itemId, this.userId, vote)
  }
}
