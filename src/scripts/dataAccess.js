const applicationState = {
    players: [],
    teams: [],
    scores: []
}

// API Constant Variable
const API = "http://localhost:8088"

// FETCH FUNCTIONS GO HERE
export const fetchPlayers = () => {
    return fetch(`${API}/players`)
        .then(response => response.json())
        .then(
            (players) => {
                applicationState.players = players
            }
        )
}

export const fetchTeams = () => {
    return fetch(`${API}/teams`)
        .then(response => response.json())
        .then(
            (teams) => {
                applicationState.teams = teams
            }
        )
}

// POST FUNCTIONS GO HERE
export const createPlayer = (player) => {
    const postPlayer = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
    }
    const mainContainer = document.querySelector("#container")


    return fetch(`${API}/players`, postPlayer)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

export const createTeam = (team) => {
    const postTeam = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    }
    const mainContainer = document.querySelector("#container")


    return fetch(`${API}/teams`, postTeam)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

// GETTER FUNCTIONS GO HERE
export const getPlayers = () => {
    return applicationState.players.map(player =>({...player}))
}

export const getTeams = () => {
    return applicationState.teams.map(team =>({...team}))
}

export const getScores = () => {
    return applicationState.scores.map(score =>({...score}))
}
