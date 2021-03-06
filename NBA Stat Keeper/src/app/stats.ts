import { Game } from './game'
import { Team } from './team';
import { Player } from './player';

export class Stats {
    id: number;
    ast: string;
    blk: string;
    dreb: string;
    fg3_pct: string;
    fg3a: string;
    fg3m: string;
    fg_pct: string;
    fga: string;
    fgm: string;
    ft_pct: string;
    fta: string;
    ftm: string;
    game: Game;
    min: string;
    oreb: string;
    pf: string;
    player: {
        id: number;
        first_name: string;
        height_feet: string;
        height_inches: string;
        last_name: string;
        position: string;
        team_id: number;
        weight_pounds: string;
    };
    pts: string;
    reb: string;
    stl: string;
    team: Team;
    turnover: string;
}
