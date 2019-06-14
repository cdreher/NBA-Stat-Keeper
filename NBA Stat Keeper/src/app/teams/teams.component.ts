import { Component, OnInit } from '@angular/core';
import { Team } from '../team'
import { HttpService } from '../services/http.service';
import { AppComponent } from '../app.component';

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
  _filter: string = '';


  constructor(private _httpService: HttpService, private app: AppComponent) { }

  ngOnInit() {
    // Get list of all teams.
    if (this.app.teams == null) {
      this._httpService.getTeams().subscribe(p => {
        this.teams = p["data"];
        this.app.setTeams(this.teams);
        this.filteredTeams = this.teams;
      });
    }
    else {
      this.teams = this.app.teams;
      this.filteredTeams = this.teams;
    }

  }

  // Filter teams by division/conference.
  filterTeams(filter: string): Team[] {
    this.isFiltered = true;
    return this.teams.filter((team: Team) =>
      team.division.toLocaleLowerCase().indexOf(filter) !== -1 ||
      team.conference.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  // Set filter.
  setFilter(filter: string): void {
    this._filter = filter;
    this.filteredTeams = this._filter ? this.filterTeams(this._filter) : this.teams;
  }

  // Clear filter.
  clear(): void {
    this._filter = '';
    this.isFiltered = false;
    this.setFilter('');
  }

  // Compare filters.
  compareFilters(filter: string): boolean {
    return filter == this._filter;
  }

}
