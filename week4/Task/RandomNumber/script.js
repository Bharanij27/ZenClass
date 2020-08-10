let container = document.createElement('div');
container.setAttribute('class', 'container text-center');
document.body.append(container);

let title = document.createElement('div');
title.setAttribute('class', 'display-3');
title.innerText = 'Random Number Generator';

let numberField = document.createElement('div');
numberField.setAttribute('id', 'numberField')
numberField.setAttribute('class', 'display-4 justify-content-center align-items-center');
numberField.setAttribute('style', 'background-color: white; border-radius:10px; margin: 10px;');


let button = document.createElement('button');
button.setAttribute('class', 'btn btn-primary mt-3');
button.setAttribute('onclick', 'generateRandom([])');
button.innerText = 'Generate';

container.append(title, numberField, button);

function generateRandom(randomNumber){
    if(randomNumber.length == 8){
        numberField.innerText = randomNumber.join('');
        return
    }
    let digit = (Math.floor(Math.random() * 10)) % 9;
    if(!randomNumber.includes(digit) && digit!=0) randomNumber.push(digit);
    generateRandom(randomNumber);
}