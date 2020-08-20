let userName, score;
(function(){
    userName = localStorage.getItem('userName');
    if(!userName){
        window.open('index.html', '_self');
    }
    score = localStorage.getItem('currentScore');
})();

let container = document.createElement("div");
container.classList.add("container", 'content');

//          Title

let name = document.createElement("div");
name.classList.add("user-name");
name.innerText = score;

let textField = document.createElement("div");
textField.classList.add("md-form", "input-with-pre-icon");

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'username');
input.addEventListener('input', function(){
    setActive(input.value);
}, true)
input.classList.add('form-control');
input.setAttribute('placeholder', 'username');

let saveButton = document.createElement("button");
saveButton.classList.add("btn", "btn-primary", "button");
saveButton.setAttribute('id', 'saveScoreBtn');
saveButton.addEventListener('click', function(){
    saveScore();
}, true);
saveButton.innerText = "Save";
saveButton.disabled = true;

textField.append(input, saveButton);

//          Start Game Button

let playAgain = document.createElement("button");
playAgain.classList.add("btn", "btn-primary", "button");
playAgain.setAttribute('id', 'playAgain');
playAgain.setAttribute("onclick", "goGamePage()");
playAgain.innerText = "Play Again";

//          Show Result Button

let quitButton = document.createElement("button");
quitButton.classList.add("btn", "btn-primary", "button");
quitButton.setAttribute('id', 'goHome');
quitButton.setAttribute("onclick", "goHome()");
quitButton.innerText = "Quit";

container.append(name, textField, playAgain, quitButton);

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

function saveScore(){
    event.preventDefault();
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userName = document.querySelector('#username').value;
    let dummy = {}
    dummy[userName] = score;
    users.push(dummy);

    localStorage.setItem('users', JSON.stringify(users));
    
    let maxScore = localStorage.getItem('maxScore') || 0;
    if(maxScore < score){
        localStorage.setItem('maxScore', score);
        localStorage.setItem('maxScoreer', userName);

    }
    alert('saved sucessfully')
}

function setActive(inputValue){
    if(inputValue.trim().length){
        document.querySelector('#saveScoreBtn').disabled = false;
    }
    else{
        document.querySelector('#saveScoreBtn').disabled = true;
    }
}