import {getPlayers, getTeams} from "./dataAccess.js"

const createTeamList = (team) => {
    return `
            <option value=${team.id}> ${team.teamName}</option>

            `
}

export const PlayerForm = () => {
    const teams = getTeams()
    let html = `
    <form id="playerform">
    <input name="firstName" type="text" placeholder="First Name">
    <input name="lastName" type="text" placeholder="Last Name">
    <select>
        <option value="0">Select a Team</option>
            ${
                teams.map(createTeamList).join("")
             }
    </select>
    </form>
    
    `
    
    return html
    
    


}
