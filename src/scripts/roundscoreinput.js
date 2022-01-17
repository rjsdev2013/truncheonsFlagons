import {saveGameTeams, getGameTeams} from "./dataAccess.js"

const gameContainer = document.getElementById("gameContainer")

gameContainer.addEventListener(
    "change",
    (event) => {
        const option1 = document.getElementById("option1").value; 
        const option2 = document.getElementById("option2").value; 
        const option3 = document.getElementById("option3").value;

        const gameTeams = {
            team1: option1,
            team2: option2,
            team3: option3
        }

        if (option1 != 0 && option2 != 0 && option3 != 0) {
            saveGameTeams(gameTeams)
            console.log("Teams have been selected")
            gameContainer.dispatchEvent(new CustomEvent("optionsChanged"))
        }
    }  
) 

export const roundScores = () => {
    const gameTeams = getGameTeams()
    let html = `
        <h2>Round 1</h2>
        <label for="team1">${gameTeams.team1}</label>
        <input type="number" name="rounds" class="scoreinputs" id="team1">

        <label for="team2">${gameTeams.team2}</label>
        <input type="number" name="rounds" class="scoreinputs" id="team2">

        <label for="team3">${gameTeams.team3}</label>
        <input type="number" name="rounds" class="scoreinputs" id="team3">

        <button id="saveRound">Save Round Scores</button>

        ${gameScoreBoard()}
        `
    
        return html
}

export const gameScoreBoard = () => {
    const mainContainer = document.querySelector("#container")
    const gameTeams = getGameTeams()
    let html = `
    <table>
    <tr>
        <th>Team</th><th>Score</th>
    </tr>
    <tr>
        <td>${gameTeams.team1}</td><td>0</td>
    </tr>
    <tr>
        <td>${gameTeams.team2} </td><td>0</td>
    </tr>
    <tr>
        <td>${gameTeams.team3} </td><td>0</td>
    </tr>
     
    </table>
    `
    
    // this custom event is heard on game.js
    mainContainer.dispatchEvent(new CustomEvent("gameScoreBoardChanged"))
    return html
}

 