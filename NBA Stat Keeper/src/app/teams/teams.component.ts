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
  isFiltered: boolean = false;
  filteredTeams: Team[];
  _filter: string ='';
  
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //Get a team
    //this._httpService.getTeam("Celtics").subscribe(p => this.player = p);

    //Get all teams
    this._httpService.getTeams().subscribe(p => this.teams = p["data"]);

    //Get sorted teams
    this._httpService.getTeams().subscribe(p => this.filteredTeams = p["data"]);
  }

  //Filter teams by division/conference
  filterTeams(filter: string): Team[] {
    this.isFiltered = true;
    return this.teams.filter((team: Team) =>
      team.division.toLocaleLowerCase().indexOf(filter) !== -1 ||
      team.conference.toLocaleLowerCase().indexOf(filter) !== -1 );
  }

  //Set filter
  setFilter(filter: string): void {
    this._filter = filter;
    this.filteredTeams = this._filter ? this.filterTeams(this._filter) : this.teams;
  }

  //Clear filter
  clear(): void {
    this._filter = '';
    this.isFiltered = false;
    this.setFilter('');
  }

  //Compare filters
  compareFilters(filter: string): boolean {
    return filter == this._filter;
  }

}
