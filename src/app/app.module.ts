import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubmissionCardsComponent } from './submission-cards/submission-cards.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubmissionCardsComponent,
    FilterBarComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
