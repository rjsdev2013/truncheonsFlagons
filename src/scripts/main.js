import { fetchPlayers, fetchTeams } from "./dataAccess.js"
import {TrunchAndFlag} from "./TrunchAndFlag.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        console.log('state data has changed.regenerating html...')
        render()
    }
)

const render = () => {
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

render()