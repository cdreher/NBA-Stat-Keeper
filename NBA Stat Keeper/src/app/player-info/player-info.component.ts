import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  player: Player;

  constructor(private _http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Get player id from url path
    const id = +this.route.snapshot.paramMap.get('id');

    //Get player information from id
    this._http.getPlayerById(id).subscribe(p => this.player = p);
  }

}
