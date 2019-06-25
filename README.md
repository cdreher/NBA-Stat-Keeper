# NBA-Stat-Keeper
An Angular 8 project made to keep track of NBA statistics. This application makes use of an open source API created with the intent of storing all NBA players, teams, games, and statistics. The app was built and deployed on Microsoft Azure DevOps.

&nbsp;  
## Overview
Using the HTTPClient functionality in Angular 8, I was able to scrape and parse data from an open source API. This required various API calls in different areas of the program to hit all of the endpoints that I wanted.

&nbsp;  
## Home Page
The landing page was set up using basic Angular principles, coupled with bootstrap styling. The navbar is styled with Bootstrap, and wired up with Angular routing.

<p align="center">
  <img src="NBA Stat Keeper/images/home.PNG" width="750"/>
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
  <img src="NBA Stat Keeper/images/players.gif" width="750"/>
 </p>

## Player Details
The landing page was set up using basic Angular principles, coupled with bootstrap styling. The navbar is styled with Bootstrap, and wired up with Angular routing.

<p align="center">
  <img src="NBA Stat Keeper/images/player.gif" width="750"/>
 </p>

## Teams
The landing page was set up using basic Angular principles, coupled with bootstrap styling. The navbar is styled with Bootstrap, and wired up with Angular routing.
<p align="center">
  <img src="NBA Stat Keeper/images/teams.gif" width="750"/>
 </p>

### HTTP open source API
http://www.balldontlie.io/
