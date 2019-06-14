import { Component } from '@angular/core';
import { Player } from './player';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Stat Keeper';
  public players: Player[] = null;
  public teams: Team[] = null;

  // Store list of players in AppComponent to limit amount of requests made to API.
  setPlayers(p: Player[]): void {
    this.players = p;
  }

  // Store list of teams in AppComponent to limit amount of requests made to API.
  setTeams(t: Team[]): void {
    this.teams = t;
  }
}
