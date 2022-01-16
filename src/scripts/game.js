import { getTeams } from "./dataAccess.js"
import { roundScores, gameScoreBoard} from "./roundscoreinput.js"

const createTeamSelectionList = (team) => {
    return `
    <option value="${team.teamName}" id= "${team.id}">${team.teamName}</option>
    `
}

export const TeamSelection = () => {
    
    const teams = getTeams()

    let html = `
        <h2> Team 1 </h2>
        <select id="option1">
        <option value="0">Select a Team</option>
            ${
                teams.map(createTeamSelectionList).join("")
             }
            </select>
        <h2> Team 2 </h2>
        <select id="option2">
        <option value="0">Select a Team</option>
        ${
            teams.map(createTeamSelectionList).join("")
         }
        </select  id="option3">
        <h2> Team 3 </h2>
        <select id="option3">
        <option value="0">Select a Team</option>
        ${
            teams.map(createTeamSelectionList).join("")
         }
        </select>
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

const gameContainer = document.getElementById("gameContainer")

gameContainer.addEventListener(
    "optionsChanged", 
    event => {
        console.log("made it to the event listener")
        gameContainer.innerHTML = roundScores()
        
    }
)