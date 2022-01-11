import { getTeams } from "./dataAccess.js"

const createLeaderboardList = (team) => {
    return `
    ${team.teamName}
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
    <div class="team team--${teams.map(getTeamId)}">
        <div class="team_column team_name">
        ${teams.map(createLeaderboardList).join("")}
        </div>
        <div class="team_column team_playerCount"></div>
        <div class="team_column team_score"></div>
    </div>

    `
    return html


}