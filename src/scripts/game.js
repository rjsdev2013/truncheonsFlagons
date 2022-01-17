import { getTeams } from "./dataAccess.js"
import { roundScores, gameScoreBoard} from "./roundscoreinput.js"
import { TrunchAndFlag } from "./TrunchAndFlag.js"


import { newTeamForm } from "./team.js"
import { PlayerForm } from "./player.js"
import { createTeam } from "./dataAccess.js"
import { Leaderboard } from "./leaderboard.js"
 





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

const mainContainer = document.querySelector("#container")


// ********************* PRETTY SURE THIS RUNS AN INFINITE LOOP. CONSIDER YOURSELF WARNED ********************* 

// mainContainer.addEventListener(
//     "gameScoreBoardChanged",
//     event => {
//         console.log("made it to the scoreboard event listener")
//         mainContainer.innerHTML = `
//         <section class="teamForm">
//             <h2>New Team</h2>
//             ${newTeamForm()}
//             <button class="button" id="createTeam">Create Team</button>
//         </section>
    
//         <section class="playerForm">
//             <h2>New Player</h2>
//             ${PlayerForm()}
//             <button class="button" id="addPlayer">Add Player to Team</button>
//         </section>    
    
//         <section>
//             <h3>Current Game</h3>
//             ${gameScoreBoard()}
//         </section>
    
//         <section>
//         <h3>Leaderboard</h3>
//             ${Leaderboard()}
//         </section>
//         `
//     }
// )