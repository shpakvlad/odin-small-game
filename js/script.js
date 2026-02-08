let comp = 0;
let user = 0;
let compScore = 0;
let userScore = 0;


// for (let i = 0; i < 5; i++) {
//     do {
//         user = prompt("Enter the number corresponding to your choice:\n\n1: rock\n2: scissors\n3: paper\n\nEnter here > :");
//         comp = getCompVariant();

//         if (user == comp) alert("Equal! Again!");
//     } while (user == comp);

//     if (comp == 1 || user == 2) compScore++
//     else if (comp == 1 || user == 3) userScore++ 
//     else if (comp == 2 || user == 1) userScore++ 
//     else if (comp == 2 || user == 3) compScore++ 
//     else if (comp == 3 || user == 1) compScore++ 
//     else if (comp == 3 || user ==2) userScore++  

//     if (i < 4) alert("Scores > Computer : " + compScore + " | Human : " + userScore + ")");
// }

// if (compScore > userScore) {
//     alert("You LOSE! (Computer : " + compScore + " | Human : " + userScore + ")");
// } else {
//     alert("Human WIN! (Computer : " + compScore + " | Human : " + userScore + ")");
// }

let variants = document.querySelector("#variants");
let result = document.querySelector("#result");
let errors = document.querySelector("#errors");

variants.addEventListener("click", (e) => {

    errors.textContent = ""

    let userSelect = e.target.textContent.trim().toLowerCase();
    let compSelect = getCompVariant();

    if (userSelect != compSelect) {
        if (compSelect === "rock" && userSelect === "paper") userScore++
        else if (compSelect === "rock" && userSelect === "scissors") compScore++
        else if (compSelect === "paper" && userSelect === "rock") compScore++
        else if (compSelect === "paper" && userSelect === "scissors") userScore++
        else if (compSelect === "scissors" && userSelect === "rock") userScore++
        else if (compSelect === "scissors" && userSelect === "paper") compScore++

        result.textContent = "Computer score : " + compScore + " User score : " + userScore;

    } else {
        errors.textContent = "Equal! Again!"
    }
});

function getCompVariant() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result = "";

    switch (randomNumber) {
        case 0: result = "rock";
            break;
        case 1: result = "paper";
            break;
        case 2: result = "scissors";
            break;
    }

    return result;
}