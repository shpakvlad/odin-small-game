let comp = 0;
let user = 0;
let compScore = 0;
let userScore = 0;


for (let i = 0; i < 5; i++) {
    do {
        user = prompt("Enter the number corresponding to your choice:\n\n1: rock\n2: scissors\n3: paper\n\nEnter here > :");
        comp = getCompVariant();

        if (user == comp) alert("Equal! Again!");
    } while (user == comp);

    if (comp == 1 || user == 2) compScore++
    else if (comp == 1 || user == 3) userScore++ 
    else if (comp == 2 || user == 1) userScore++ 
    else if (comp == 2 || user == 3) compScore++ 
    else if (comp == 3 || user == 1) compScore++ 
    else if (comp == 3 || user ==2) userScore++  
    
    if (i < 4) alert("Scores > Computer : " + compScore + " | Human : " + userScore + ")");
}

if (compScore > userScore) {
    alert("You LOSE! (Computer : " + compScore + " | Human : " + userScore + ")");
} else {
    alert("Human WIN! (Computer : " + compScore + " | Human : " + userScore + ")");
}

function getCompVariant() {
    return Math.floor(Math.random() * 3);
}
