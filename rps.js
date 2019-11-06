let userSelection = prompt("rock, paper or scissors?: ");
let compSelection = getPCSelect();
let result = rpcGame(userSelection,compSelection);
alert(result);

function rpcGame(user,comp) {
	if (user === "rock" && comp === "scissors") {
    	return "you: " + user + " him: " + comp + "  YOU WIN!";
    }
    else if (user === "paper" && comp === "rock") {
    	return "you: "+ user + " him: " + comp + "  YOU WIN!";
    }
    else if (user === "scissors" && comp === "paper") {
    	return "you: "+ user + " him: " + comp + "  YOU WIN!";
    }
    else if (user === comp) {
    	return "you: "+ user + " him: " + comp + "  tie......boring!";
    }
    else {
    	return "you: "+ user + " him: " + comp + "  you lose...dumbass" ;
    }
}

function getPCSelect() {
	ranInt = Math.floor((Math.random()*3));
    let rpors
    switch (ranInt){
    	case 0:
        	rpors = "rock";
            break;
        case 1:
        	rpors = "paper";
            break;
        case 2:
        	rpors = "scissors";
            break;
        	
    }
    return rpors
    
}
