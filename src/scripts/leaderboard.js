import { getTeams } from "./dataAccess.js"

const createLeaderboardList = (team) => {
    return `
    <li>${team.teamName}</li>
    `
}

export const Leaderboard = () => {
    const teams = getTeams()

    let html = `
    <ul>
        ${teams.map(createLeaderboardList).join("")}
    </ul>

    `
    return html


}