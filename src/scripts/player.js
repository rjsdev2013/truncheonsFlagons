import {getPlayers, getTeams, createPlayer} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click",clickEvent => {
    if (clickEvent.target.id === "addPlayer"){
        const newPlayerFirst = document.querySelector("input[name='firstName']").value
        const newPlayerLast = document.querySelector("input[name='lastName']").value
        const newPlayerTeam = document.querySelector("option").value

        const PlayerToAPI = {
            nameFirst: newPlayerFirst,
            nameLast: newPlayerLast,
            country: "USA",
            teamId: newPlayerTeam

        }

        createPlayer(PlayerToAPI)
    }
})

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
