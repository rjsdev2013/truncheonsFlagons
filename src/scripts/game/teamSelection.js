import { getTeams } from "./dataAccess.js"
import { roundScores } from "./roundscoreinput.js"

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
        <option value="team">Select a Team</option>
        ${
            teams.map(createTeamSelectionList).join("")
         }
        </select>
        <h2> Team 3 </h2>
        <select>
        <option value="team" >Select a Team</option>
        ${
            teams.map(createTeamSelectionList).join("")
         }
        </select>
        <button id="start-round-1">START ROUND 1</button>
    `

    document.dispatchEvent(new CustomEvent("optionsSelected"))
}
 
document.addEventListener("optionsSelected", event => {
    console.log("It worked")

    if (option1 === true && option2 === true && option3 === true) {
        
        let html = `
        <h2>Round 1</h2>
        <label for="team1">Team 1</label>
        <input type-"number" name="rounds" id="team1">

        <label for="team2">Team 2</label>
        <input type-"number" name="rounds" id="team2">

        <label for="team3">Team 3</label>
        <input type-"number" name="rounds" id="team3">
        `
        return html

    }
})
