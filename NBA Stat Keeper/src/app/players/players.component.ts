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
  filteredPlayers: Player[];
  _filter: string ='';
  get filter(): string{
    return this._filter;
  }
  set filter(s: string){
    this._filter = s;
    this._httpService.getPlayer(this.filter).subscribe(p => this.filteredPlayers = p["data"]);
  }
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //Get a player
    //this._httpService.getPlayer("James").subscribe(p => this.player = p);

    //Get all players
    this._httpService.getPlayers().subscribe(p => this.players = p["data"]);

    //Get sorted players
    this._httpService.getPlayers().subscribe(p => this.filteredPlayers = p["data"].sort((a,b) => a.last_name.localeCompare(b.last_name)));
  }

}
