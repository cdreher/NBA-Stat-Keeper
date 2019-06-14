import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Player } from '../player';
import { AppComponent } from '../app.component';
import { delay } from 'q';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  title = 'Players';
  pageButtonText = 'Players Per Page';
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
      this.pageButtonText = "All"
    }
    else {
      this._filter = s.toLocaleLowerCase();
      this.filteredPlayers = this.filteredPlayers.filter(n => n.last_name.toLowerCase().indexOf(s) != -1 || n.first_name.toLowerCase().indexOf(s) != -1);
    }

  }

  url: string = 'https://www.balldontlie.io/api/v1/players?per_page=100';
  count: number = 1;
  temp: number = 0;

  constructor(private _httpService: HttpService, private app: AppComponent) { }

  ngOnInit() {
    // Get sorted list of all players.
    if (this.app.players == null) {
      this.players = new Array();
      for (let x = this.count; x <= 32; x++) {
        const newUrl = `${this.url}&page=${x}`;
        this._httpService.getPlayers(newUrl).subscribe(p => {
          this.temp = 0;
          while (this.temp < p["data"].length) {
            if (p["data"][this.temp].height_feet != null) {
              this.players = this.players.concat(p["data"][this.temp] as Player);
            }
            this.temp++;
          }
          //this.players = this.players.sort((a, b) => a.last_name.localeCompare(b.last_name));
          this.app.setPlayers(this.players);
          this.filteredPlayers = this.players.sort((a, b) => a.last_name.localeCompare(b.last_name));
        });
      }
    }
    else {
      this.filteredPlayers = this.app.players;
    }

  }

  // Show all players.
  showAll(): void {
    this.filteredPlayers = this.app.players;
    this.pageButtonText = 'All'
  }

  // Show 40 players per page.
  showLess(): void {
    this.filteredPlayers = this.app.players.slice(0, 42);
    this.pageButtonText = '42 per page';
  }

  // Move to next page of players
  nextPage(page: number): void {
    let start = (page - 1) * 42;
    let end = page * 42;
    this.pageButtonText = '42 per page'
    this.filteredPlayers = this.app.players.slice(start, end);
  }

}
