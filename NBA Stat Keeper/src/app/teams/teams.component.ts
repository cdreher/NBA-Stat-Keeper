import { Component, OnInit } from '@angular/core';
import { Team } from '../team'
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title = 'Teams Page';
  team: Team;
  teams: Team[];
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //Get a team
    //this._httpService.getTeam("Celtics").subscribe(p => this.player = p);

    //Get all teams
    this._httpService.getTeams().subscribe(p => this.teams = p["data"]);
  }

}
