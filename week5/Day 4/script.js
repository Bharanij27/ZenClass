function startGame(){
  let userName = prompt('Enter Your Name');
  if(userName){
    let name = userName.trim();
    localStorage.setItem('userName', name);
    window.open('game.html', '_self');
  }
}

function getHighScore(){
  let highScore = localStorage.getItem('maxScore') || 0;
  let userName = localStorage.getItem('maxScoreer') || 'Computer';
  alert(userName + ' ' + highScore);
}

let container = document.createElement("div");
container.classList.add("container");

//          Title

let gameTitle = document.createElement("div");
gameTitle.classList.add("gameTitle");
gameTitle.innerText = "Quick Quiz";

//          Start Game Button

let startButton = document.createElement("button");
startButton.classList.add("btn", "btn-primary", "button");
startButton.setAttribute("onclick", "startGame()");
startButton.innerText = "Play";

//          Show Result Button

let ShowResult = document.createElement("button");
ShowResult.classList.add("btn", "btn-primary", "button");
ShowResult.setAttribute("onclick", "getHighScore()");
ShowResult.innerText = "High Scores";

container.append(gameTitle, startButton, ShowResult);

document.body.append(container);
