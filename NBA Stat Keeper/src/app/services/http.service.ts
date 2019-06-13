import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../player';
import { Team } from '../team';
import { SeasonStats } from '../season-stats';
import { Stats } from '../stats';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private player_url = 'https://www.balldontlie.io/api/v1/players?per_page=100';
  private url = 'https://www.balldontlie.io/api/v1/players';
  private url2 = 'https://www.balldontlie.io/api/v1/teams';
  private team_url = 'https://www.balldontlie.io/api/v1/teams?per_page=30';
  private season_url = 'https://www.balldontlie.io/api/v1/season_averages';
  private stats_url = 'https://www.balldontlie.io/api/v1/stats';

  constructor(private _http: HttpClient) { }

  //Get a player with specified name
  getPlayer(name: string): Observable<Player> {
    const newUrl = `${this.player_url}&search=${name}`;
    return this._http.get<Player>(newUrl);
  }

  //Get player be specified Id
  getPlayerById(id: number): Observable<Player> {
    const newUrl = `${this.url}/${id}`
    return this._http.get<Player>(newUrl);
  }

  //Get all players
  // getPlayers(): Observable<Player[]> {
  //   return this._http.get<Player[]>(this.player_url);
  // }
  getPlayers(url: string): Observable<Player[]> {
    return this._http.get<Player[]>(url);
  }

  nextPage(page: number): Observable<Player[]> {
    const newUrl = `${this.player_url}&page=${page}`;
    return this._http.get<Player[]>(newUrl);
  }

  //Get a team with specified name
  getTeam(name: string): Observable<Team> {
    const newUrl = `${this.team_url}&search=${name}`;
    return this._http.get<Team>(newUrl);
  }

  //Get player be specified Id
  getTeamById(id: string): Observable<Team> {
    const newUrl = `${this.url2}/${id}`
    return this._http.get<Team>(newUrl);
  }

  //Get all teams
  getTeams(): Observable<Team[]> {
    return this._http.get<Team[]>(this.team_url);
  }

  //Get season stats for given season and player
  getSeasonStats(year: string, id: number): Observable<SeasonStats> {
    const newUrl = `${this.season_url}?season=${year}&player_ids[]=${id}`;
    return this._http.get<SeasonStats>(newUrl);
  }

  //Get game statistics for all games in given season and player
  getGameStats(year: string, id: number): Observable<Stats[]> {
    const newUrl = `${this.stats_url}?seasons[]=${year}&player_ids[]=${id}`;
    return this._http.get<Stats[]>(newUrl);
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
