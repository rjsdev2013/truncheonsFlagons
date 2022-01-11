import { newTeamForm } from "./team.js"
import { PlayerForm } from "./player.js"
import { createTeam } from "./dataAccess.js"
import { Leaderboard } from "./leaderboard.js"

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
    <section class="leaderBoard">
    <h3>Leaderboard</h3>
    <div class="teams">
        <div class="team team_header">
            <div class="team_columnheader team_name">Team Name</div>
            <div class="team_columnheader team_playercount">Players</div>
            <div class="team_columnheader team_score">Score</div>
        </div>
        ${Leaderboard()}
    </div>
 
    </section>
    
    `
    
    
    


    return html
}