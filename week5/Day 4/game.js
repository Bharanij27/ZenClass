let questionList;
let qno = 0;

async function getDataFromAPI() {
    try {
        let data = await fetch(
            "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple"
        );
        questionList = await data.json();
        questionList = questionList.results;
        console.log(questionList);
    } catch (error) {
        console.log(error);
    }
};

function createContent() {
    let content = document.createElement("div");
    content.classList.add("content", 'container');

    let head = document.createElement("div");
    head.classList.add("head");

    let questionRegion = document.createElement('div');
    questionRegion.classList.add('questionRegion');

    let questNum = document.createElement('div');
    questNum.classList.add("qnum");
    
    let progressField = document.createElement('div');
    progressField.classList.add('progress', 'progress-style')

    let progressBar = document.createElement('div');
    progressBar.setAttribute('class', 'progress-bar');
    progressBar.setAttribute('role', 'progressbar');

    progressField.append(progressBar);

    questionRegion.append(questNum, progressField);
    
    let scoreField = document.createElement("div");
    scoreField.classList.add("score");
    scoreField.innerText = 'Score : ' + score;

    head.append(questionRegion, scoreField);

    let question = document.createElement("div");
    question.classList.add("question");

    let unorderList = document.createElement("ul");

    question.append(unorderList);

    content.append(head, question);
    document.body.append(content);

}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let currentIndex = 0, score = 0;


function nextQuestion(num) {
    currentIndex = num;

    let progressBar = document.querySelector('.progress-bar')
    
    document.querySelector('.qnum').innerText = 'Question ' + (num + 1) + ' / 10';

    
    progressBar.setAttribute('aria-valuenow', '' + (num +1 ) * 10 + '');
    progressBar.setAttribute('aria-valuemin', '' + (num +1 ) * 10 + '');
    progressBar.setAttribute('aria-valuemin', '100');
    progressBar.setAttribute('style', 'width: ' + ((num +1 ) * 10) + '%');


    document.querySelector('.question').innerHTML = questionList[num].question;

    let array = [].concat(questionList[num].incorrect_answers, questionList[num].correct_answer)
    array = shuffle(array);

    let questionField = document.querySelector('.question');

    let unorderList = document.createElement("ul");

    while (questionField.children.length) {
        questionField.removeChild(questionField.firstChild)
    }
    for (let i = 0; i < 4; i++) {
        let option = document.createElement("li");
        let answer = createAnswer(array[i]);
        let numberBox = createBox(i);

        option.append(numberBox, answer);
        option.addEventListener('click', function () {
            isCorrect(option, answer.innerText);
        }, true);
        
        unorderList.append(option);
    }

    questionField.append(unorderList);
}

function createBox(num){
    let box = document.createElement('div');
    box.classList.add('box');
    box.innerText = String.fromCharCode(65 + num);
    return box;
}

function createAnswer(value){
    let ans = document.createElement('div');
    ans.classList.add('choice-text')
    ans.innerHTML = value;
    return ans;
}

function isCorrect(selected, chosen){
    let content = document.querySelector('.content');

    if(content.lastElementChild.tagName == 'BUTTON') return

    let correctAnswer = questionList[currentIndex].correct_answer;
    if(chosen == correctAnswer){
        selected.classList.add('correct-one');
        score += 10;
        let scoreField = document.querySelector('.score');
        scoreField.innerText = 'Score : '  + score;

    }
    else selected.classList.add('wrong-one') 

    let nextButton = document.createElement('button');
    nextButton.classList.add('btn', 'btn-primary');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', function(){
        content.removeChild(content.lastElementChild);
        content.removeChild(content.lastElementChild);
        if(qno == 9) endGame();
        else nextQuestion(++qno);
    }, true)

    let showAnswer = document.createElement('button');
    showAnswer.classList.add('btn', 'btn-primary', 'showAnswer');
    showAnswer.innerText = 'Show Answer';
    showAnswer.addEventListener('click', function(){
        let list = document.getElementsByTagName('ul')[0].children;
        for(let i = 0; i < 4; i++){
            let option = list[i].innerText.split('');
            option.shift();
            option.shift();
            if(option.join('') == correctAnswer){
                list[i].classList.add('correct-one');
                break;
            };
        }
    }, true)

    content.append(nextButton, showAnswer);
}

function endGame(){
    localStorage.setItem('currentScore', score);
    window.open('end.html', '_self');
}

let userName;

(async function () {
    userName = localStorage.getItem('userName');
    if(!userName){
        alert('Enter Your Name');
        window.open('index.html', '_self');
    }

    try {
        await getDataFromAPI();
        await createContent();
        await nextQuestion(0);
    } catch (error) {
        console.log(error)
    }
})();