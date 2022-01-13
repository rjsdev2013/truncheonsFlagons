import { getTeams } from "./dataAccess.js"

const createTeamSelectionList = (team) => {
    return `
    <option value="${team.id}">${team.teamName}</option>
    `
}

export const TeamSelection = () => {
    
    const teams = getTeams()

    let html = `
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
        </select></aside>
    `
    return html
        }

export const Button = () => {
    let html = `
        <h1>Truncheons & Flagons</h1>
        <button id="start-button">BEGIN GAME</button>
    `

    return html
}