import { getTeams } from "./dataAccess.js"

const createTeamSelectionList = (team) => {
    return `
    ${team.teamName}
    `
}

const getTeamId = (team) => {
    return `
    ${team.id}
    `
}
export const TeamSelection = () => {
    const teams = getTeams()

    return `
        <h2> Team 1 </h2>
        <select>
        <option value="0">Select a Team</option>
            ${
                teams.map(createTeamSelectionList).join("")
             }
            </select>
        <h2> Team 2 </h2>
        <select>
        <option value="0">Select a Team</option>
        ${
            teams.map(createTeamSelectionList).join("")
         }
        </select>
        <h2> Team 3 </h2>
        <select>
        <option value="0">Select a Team</option>
        ${
            teams.map(createTeamSelectionList).join("")
         }
        </select>
        <button id="start-round-1">START ROUND 1</button>
    `
        }