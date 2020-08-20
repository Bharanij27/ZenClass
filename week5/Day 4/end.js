let userName, score;
(function(){
    userName = localStorage.getItem('userName');
    if(!userName){
        alert('Enter Your Name');
        window.open('index.html', '_self');
    }
    score = localStorage.getItem('currentScore');
})();

let container = document.createElement("div");
container.classList.add("container");

//          Title

let name = document.createElement("div");
name.classList.add("user-name");
name.innerText = userName +'  ' +score;

//          Start Game Button

let playAgain = document.createElement("button");
playAgain.classList.add("btn", "btn-primary", "button");
playAgain.setAttribute("onclick", "goGamePage()");
playAgain.innerText = "Play Again";

//          Show Result Button

let quitButton = document.createElement("button");
quitButton.classList.add("btn", "btn-primary", "button");
quitButton.setAttribute("onclick", "goHome()");
quitButton.innerText = "Quit";

container.append(name, playAgain, quitButton);

document.body.append(container);

function goHome(){
    localStorage.setItem('userName', null);
    localStorage.setItem('currentScore', null);
    window.open('index.html', '_self');
}


function goGamePage(){
    localStorage.setItem('score', null);
    window.open('game.html', '_self');
}