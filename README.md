# NBA-Stat-Keeper
An Angular 8 project made to keep track of NBA statistics. This application makes use of an open source API created with the intent of storing all NBA players, teams, games, and statistics. The app was built and deployed on Microsoft Azure DevOps.

## Overview
Using the HTTPClient functionality in Angular 8, I was able to scrape and parse data from an open source API. This required various API calls in different areas of the program to hit all of the endpoints that I wanted.

To run using Angular CLI, first install `npm` and then install `@angular/cli`:

    npm install
    npm install -g @angular/cli
    
Then simply run using:

    ng s --o

## Home Page
The landing page was set up using basic Angular principles, coupled with bootstrap styling. The navbar is styled with Bootstrap, and wired up with Angular routing.

<p align="center">
  <img src="NBA Stat Keeper/images/home.PNG" width="800"/>
 </p>

&nbsp;  
## Players Page
This endpoint returns all players from all seasons of the NBA.

* **Note:** I applied a manual filter to the JSON results, so that only the current NBA players would display (2018-2019 rostered players)
* **HTTP Request:** `GET https://www.balldontlie.io/api/v1/players`
* **Query Parameters:**

    | Parameter | Default | Description               |
    | :---------|:------- |:-------------------------|
    | page      | 0       | The page number, used for pagination. |
    | per_page  | 25      | The number of results returned per call, used for pagination. Max 100. |
    | search    |         | Used to filter players based on their name. For example, `?search=davis` will return players that have 'davis' in their first or last name. |

&nbsp;  
<p align="center">
  <img src="NBA Stat Keeper/images/players.gif" width="800"/>
 </p>

&nbsp;  

## Player Details
The details page is a combination of multiple endpoints...

#### Get a Specific Player
This endpoint returns a specific player.  
* **HTTP Request:** `GET https://www.balldontlie.io/api/v1/players/<ID>`
* **Query Parameters:**

    | Parameter | Description               |
    | :---------|:------------------------- |
    | ID      | The ID of the player to return |
    
#### Get Averages
This endpoint returns a season averages for specified players & seasons.  
* **HTTP Request:** `GET https://www.balldontlie.io/api/v1/season_averages`
* **Query Parameters:** `api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2` will return regular season averages for player_ids 1 and 2.

    | Parameter | Default | Description               |
    | :---------|:------- |:-------------------------|
    | season    | current season | A single season |
    | player_ids  |   | An array of player_ids |
    
#### Get All Stats
This endpoint returns all stats.  
* **HTTP Request:** `GET https://www.balldontlie.io/api/v1/stats`
* **Query Parameters:** You can combine query parameters. For example: `?seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true` will return stats for player_ids 1 and 2 for the 2015-2016 and 2018-2019 postseason.

    | Parameter | Default | Description               |
    | :---------|:------- |:-------------------------|
    | page    | 0  | The page number, used for pagination. |
    | per_page  | 25  | The number of results returned per call, used for pagination. Max 100. |
    | dates    |   | An array of dates formatted in 'YYYY-MM-DD' |
    | seasons  |   | An array of seasons |
    | player_ids    | | An array of player_ids |
    | game_ids  |   | An array of game_ids |
    | postseason    |  | Boolean |
    | start_date  |   | A single date in 'YYYY-MM-DD' format. This is used to select games that occur on or after this date. |
    | end_date    |  | A single date in 'YYYY-MM-DD' format. This is used to select games that occur on or before this date. |


&nbsp;  
<p align="center">
  <img src="NBA Stat Keeper/images/player.gif" width="800"/>
 </p>

&nbsp;  

## Teams Page
This endpoint returns all teams for the current season.

* **HTTP Request:** `GET https://www.balldontlie.io/api/v1/teams`
* **Query Parameters:**

    | Parameter | Default | Description               |
    | :---------|:------- |:-------------------------|
    | page      | 0       | The page number, used for pagination. |
    | per_page  | 30      | The number of results returned per call, used for pagination. |
    
&nbsp;
<p align="center">
  <img src="NBA Stat Keeper/images/teams.gif" width="800"/>
 </p>

&nbsp;

## HTTP open source API
http://www.balldontlie.io/
