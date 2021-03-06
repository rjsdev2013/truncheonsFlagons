import { newTeamForm } from "./team.js"
import { PlayerForm } from "./player.js"
import { createTeam } from "./dataAccess.js"
import { Leaderboard } from "./leaderboard.js"
import { gameScoreBoard } from "./roundscoreinput.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click",clickEvent => {
    if (clickEvent.target.id === "createTeam"){
        const newTeamName = document.querySelector("input[name='newTeam']").value

        const teamToAPI = {
            teamName: newTeamName
        }

        createTeam(teamToAPI)
    }
})
export const TrunchAndFlag = () => {
    let html = `
    <section class="teamForm">
        <h2>New Team</h2>
        ${newTeamForm()}
        <button class="button" id="createTeam">Create Team</button>
    </section>

    <section class="playerForm">
        <h2>New Player</h2>
        ${PlayerForm()}
        <button class="button" id="addPlayer">Add Player to Team</button>
    </section>    

    <section hidden>
        <h3>Current Game</h3>
        ${gameScoreBoard()}
    </section>

    <section>
    <h3>Leaderboard</h3>
        ${Leaderboard()}
    </section>
    `
    return html
}