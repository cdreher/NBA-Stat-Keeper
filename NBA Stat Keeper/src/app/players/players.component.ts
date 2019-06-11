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
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //get a player
    //this._httpService.getPlayer("James").subscribe(p => this.player = p);

    //get players with last name Smith
    this._httpService.getPlayers().subscribe(p => this.players = p["data"]);
  }

}
