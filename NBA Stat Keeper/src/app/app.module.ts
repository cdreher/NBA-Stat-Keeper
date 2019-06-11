import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { SearchComponent } from './search/search.component';
import { HttpService } from './services/http.service';


const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'search', component: SearchComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent, 
    TeamsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
