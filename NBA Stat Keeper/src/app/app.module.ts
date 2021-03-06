import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { HttpService } from './services/http.service';

import { RemoveWhiteSpacesPipe } from './pipes/remove-white-spaces.pipe';
import { PlayerInfoComponent } from './player-info/player-info.component'


const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'players', children: [
      { path: '', component: PlayersComponent },
      { path: ':id', component: PlayerInfoComponent }
    ] 
  },
  { path: 'teams', component: TeamsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent, 
    TeamsComponent,
    RemoveWhiteSpacesPipe,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgbDropdownModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
