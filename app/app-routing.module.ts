import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlyClubMainComponent } from './fly-club-main/fly-club-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfileComponent } from './flyClubMain/my-profile/my-profile.component';
import { MyTripsComponent } from './flyClubMain/my-trips/my-trips.component';

const routes: Routes = [{path: '', redirectTo: 'FlyClub', pathMatch: 'full'},
{path: 'FlyClub', component: FlyClubMainComponent, children:[{path: 'myprofile', component: MyProfileComponent}, {path: 'mytrips', component: MyTripsComponent}]},
{path: 'page-not-found', component: PageNotFoundComponent},
{path: '**', redirectTo: '/page-not-found', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
