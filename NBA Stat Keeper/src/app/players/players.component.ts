import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Player } from '../player';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  title = 'Players';
  player: Player;
  players: Player[];
  filteredPlayers: Player[];
  isFiltered: boolean = false;
  _filter: string = '';
  get filter(): string {
    return this._filter;
  }
  set filter(s: string) {
    // Check if filter is empty string or not.
    // IF EMPTY ==> return all players.
    // ELSE ==> return filtered list of players.
    if (s == "") {
      this.filteredPlayers = this.players;
    }
    else {
      this._filter = s.toLocaleLowerCase();
      this.filteredPlayers = this.players.filter(n => n.last_name.toLowerCase().indexOf(s) != -1 || n.first_name.toLowerCase().indexOf(s) != -1);
    }

  }

  url: string = 'https://www.balldontlie.io/api/v1/players?per_page=100';
  count: number = 1;
  temp: number = 0;

  constructor(private _httpService: HttpService, private app: AppComponent) { }

  ngOnInit() {
    // Get sorted list of all players.
    if (this.app.players == null) {
      this._httpService.getPlayers(this.url).subscribe(p => {
        this.players = p["data"].sort((a, b) => a.last_name.localeCompare(b.last_name));
        this.app.setPlayers(this.players);
        this.filteredPlayers = this.players;
      });
      // this.players = new Array();
      // for (let x = this.count; x <= 32; x++) {
      //   const newUrl = `${this.url}&page=${x}`;
      //   this._httpService.getPlayers(newUrl).subscribe(p => {
      //     this.temp = 0;
      //     while (this.temp < p["data"].length) {
      //       if (p["data"][this.temp].height_feet != null) {
      //         this.players = this.players.concat(p["data"][this.temp] as Player);
      //       }
      //       this.temp++;
      //     }
      //     this.players = this.players.sort((a, b) => a.last_name.localeCompare(b.last_name));
      //     this.filteredPlayers = this.players;
      //   });
      // }
    }
    else {
      this.players = this.app.players;
      this.filteredPlayers = this.players;
    }

  }

  nextPage(page: number): void {
    this._httpService.nextPage(page).subscribe(p => this.players = p["data"].sort((a, b) => a.last_name.localeCompare(b.last_name)));
  }

}
