import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  title = 'Players Page';
  player: Player;
  players: Player[];
  isFiltered: boolean = false;
  _filter: string = '';
  get filter(): string {
    return this._filter;
  }
  set filter(s: string) {
    this._filter = s;
    this._httpService.getPlayer(this.filter).subscribe(p => this.players = p["data"]);
  }

  url: string = 'https://www.balldontlie.io/api/v1/players?per_page=100';
  count: number = 1;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //Get a player
    //this._httpService.getPlayer("James").subscribe(p => this.player = p);

    //Get sorted players
    this._httpService.getPlayers(this.url).subscribe(p => this.players = p["data"].sort((a,b) => a.last_name.localeCompare(b.last_name)));

    // this.players = new Array();    
    // for (let x = this.count; x <= 32; x++) {
    //   const newUrl = `${this.url}&page=${x}`;
    //   this._httpService.getPlayers(newUrl).subscribe(p => {
    //     this.players = this.players.concat(p["data"] as Player[]).sort((a, b) => a.last_name.localeCompare(b.last_name));
    //   });
      
    // }
  }

  nextPage(page: number): void {
    this._httpService.nextPage(page).subscribe(p => this.players = p["data"].sort((a, b) => a.last_name.localeCompare(b.last_name)));
  }

}
