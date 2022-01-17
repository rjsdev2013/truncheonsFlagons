import { getTeams } from "./dataAccess.js"

const createLeaderboardList = (team) => {
    return `
    <p>${team.teamName}</p>
    `
}

const getTeamId = (team) => {
    return `
    ${team.id}
    `
}
export const Leaderboard = () => {
    const teams = getTeams()

    let html = `
    <table>
    <tr>
        <th>Team</th><th>Score</th><th>Players</th>
    </tr>
    <tr>
        <td> ${teams.map(createLeaderboardList).join("")}</td><td></td> <td></td> 
    </tr>
    </table>

    `
    return html


}


/* <div class="team team--#)}">
<div class="team_column team_name">
${teams.map(createLeaderboardList).join("")}
</div>
<div class="team_column team_playerCount"></div>
<div class="team_column team_score"></div>
</div> */