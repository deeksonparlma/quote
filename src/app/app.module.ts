import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesNavbarComponent } from './quotes-navbar/quotes-navbar.component';
import { DateCountPipe } from './date-count.pipe';
import { VotecountComponent } from './votecount/votecount.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    QuotesNavbarComponent,
    DateCountPipe,
    VotecountComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
