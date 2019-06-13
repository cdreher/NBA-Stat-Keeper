import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';
import { SeasonStats } from '../season-stats';
import { Stats } from '../stats';
import { Team } from '../team';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  player: Player;
  season: SeasonStats;
  year: number = 2018;
  seasons: SeasonStats[];
  games: Stats[];
  team: Team;

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Get player id from url path
    const id = +this.route.snapshot.paramMap.get('id');

    //Get player information from id
    this._http.getPlayerById(id).subscribe(p => this.player = p);

    //Get player stats for 2018-2019 season
    this._http.getSeasonStats("2018", id).subscribe(s => this.season = s["data"][0]);

    //Get player averages for last decade
    this.seasons = new Array();
    for (let x = this.year; x > 2009; x--) {
      this._http.getSeasonStats(x.toString(), id).subscribe(s => {
        this.seasons = this.seasons.concat(s["data"][0]); 
        this.seasons = this.seasons.sort((a, b) => +b.season - +a.season);
      });
    }

    //Get player game statistics for current season
    this._http.getGameStats("2018", id).subscribe(s => {
      this.games = s["data"];
      this.games = this.games.sort((a,b) => b.game.date.localeCompare(a.game.date));
  });
  }

  //Get team by specified id
  getTeam(id: string): void {
    this._http.getTeamById(id).subscribe(t => this.team = t);
  }

}
