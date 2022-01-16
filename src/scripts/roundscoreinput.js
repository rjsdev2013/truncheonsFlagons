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
        <input type-"number" name="rounds" id="team1">

        <label for="team2">${gameTeams.team2}</label>
        <input type-"number" name="rounds" id="team2">

        <label for="team3">${gameTeams.team3}</label>
        <input type-"number" name="rounds" id="team3">
        `
    
        return html
}
 