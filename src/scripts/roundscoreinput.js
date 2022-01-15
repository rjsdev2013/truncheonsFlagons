

const gameContainer = document.getElementById("gameContainer")



gameContainer.addEventListener(
    "change",
    (event) => {
        // const option1 = document.getElementById("option1").value; 
        // const option2 = document.getElementById("option2").value; 
        // const option3 = document.getElementById("option3").value;

        if (event.target.id === "option1") {
            window.alert('Team has been selected')
        }
    }
)


export const roundScores = () => {
    let html = `
        <h2>Round 1</h2>
        <label for="team1">Team 1</label>
        <input type-"number" name="rounds" id="team1">

        <label for="team2">Team 2</label>
        <input type-"number" name="rounds" id="team2">

        <label for="team3">Team 3</label>
        <input type-"number" name="rounds" id="team3">
        `
    
        return html
}
// document.addEventListener (
//     "change",
//     (event) => {
//         const option1 = document.getElementById("option1").value; 
//         const option2 = document.getElementById("option2").value; 
//         const option3 = document.getElementById("option3").value;
        
//         if (option1 != 0 && option2 != 0 && option3 != 0) {
//             if event.target.value != 0

//             console.log('Three options have been selected. Regenerating html...')
//             gameContainer.innerHTML = roundScores()
//             // gameContainer.dispatchEvent(new CustomEvent("optionsChanged"))
//         }
//     }
// )

// gameContainer.addEventListener(
//     "optionsChanged",
//     customEvent => {
//         console.log('Three options have been selected.regenerating html...')
//         gameContainer.innerHTML = roundScores()
//     }
// )


