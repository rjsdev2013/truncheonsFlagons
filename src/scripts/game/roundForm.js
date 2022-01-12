const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click",clickEvent => {
    if (clickEvent.target.id === "beginRound1"){
        const newPlayerFirst = document.querySelector("input[name='firstName']").value
        const newPlayerLast = document.querySelector("input[name='lastName']").value
        const newPlayerTeam = document.getElementById("team").value

        const PlayerToAPI = {
            nameFirst: newPlayerFirst,
            nameLast: newPlayerLast,
            country: "USA",
            teamId: parseInt(newPlayerTeam)

        }

        createPlayer(PlayerToAPI)
    }
})