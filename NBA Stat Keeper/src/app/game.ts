import { Team } from "./team";

export class Game {
    id: number;
    date: string;
    home_team_score: string;
    visitor_team_score: string;
    season: string;
    period: string;
    status: string;
    time: string;
    postseason: false;
    home_team: Team;
    visitor_team: Team;
}
