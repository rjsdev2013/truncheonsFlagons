import { fetchPlayers, fetchTeams } from "./dataAccess.js"
import { TrunchAndFlag } from "./TrunchAndFlag.js"
import { Button, TeamSelection } from "./game.js"


const mainContainer = document.querySelector("#container")
const gameContainer = document.querySelector("#gameContainer")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        console.log('state data has changed.regenerating html...')
        render()
    }
)

export const render = () => {
    fetchPlayers().then(
        () => {
            fetchTeams().then(
                ()=>{
                        mainContainer.innerHTML = TrunchAndFlag()
                }
            )
        }
    )
}

export const buttonRender = () => {
    gameContainer.innerHTML = Button()
}

export const gameRender = () => {
    gameContainer.innerHTML = TeamSelection()
}

gameContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "start-button") {
        console.log('state data has changed.regenerating html...')
        gameRender()
    }
})

render()
buttonRender()
