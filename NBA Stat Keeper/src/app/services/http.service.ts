import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../player';
import { Team } from '../team';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private player_url = 'https://www.balldontlie.io/api/v1/players?per_page=100';
  private url = 'https://www.balldontlie.io/api/v1/players';
  private team_url = 'https://www.balldontlie.io/api/v1/teams?per_page=30'

  constructor(private _http: HttpClient) { }

  //Get a player with specified name
  getPlayer(name: string): Observable<Player> {
    const newUrl = `${this.player_url}&search=${name}`;
    return this._http.get<Player>(newUrl);
  }

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

  //Get all teams
  getTeams(): Observable<Team[]> {
    return this._http.get<Team[]>(this.team_url);
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
