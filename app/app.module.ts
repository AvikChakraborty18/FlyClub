import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyClubMainComponent } from './fly-club-main/fly-club-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfileComponent } from './flyClubMain/my-profile/my-profile.component';
import { MyTripsComponent } from './flyClubMain/my-trips/my-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyClubMainComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    MyTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
