let container = document.createElement('div');
container.setAttribute('class', 'container text-center');
document.body.append(container);

let title = document.createElement('div');
title.setAttribute('class', 'display-3');
title.innerText = 'Date Manipulation';

let dateHolder = document.createElement('div');
dateHolder.setAttribute('class', 'container text-center');

let dateField = document.createElement('input');
dateField.setAttribute('type', 'date')
dateField.setAttribute('id', 'datePicker');
dateField.setAttribute('name', 'datePicker');
dateField.setAttribute('style', 'margin:5px;');

dateHolder.append(dateField);

let button = document.createElement('button');
button.setAttribute('class', 'btn btn-primary mt-3');
button.setAttribute('onclick', 'calculateDiff()');
button.innerText = 'Calculate';

container.append(title, dateHolder, button);

let resultField = document.createElement('div');
resultField.setAttribute('class', 'container');

let year = document.createElement('div');
year.setAttribute('class', 'row');

let months = document.createElement('div');
months.setAttribute('class', 'row');

let day = document.createElement('div');
day.setAttribute('class', 'row');

let hour = document.createElement('div');
hour.setAttribute('class', 'row');

let minutes = document.createElement('div');
minutes.setAttribute('class', 'row');

let seconds = document.createElement('div');
seconds.setAttribute('class', 'row');

let milliseconds = document.createElement('div');
milliseconds.setAttribute('class', 'row');

resultField.append(year, months, day, hour, minutes, seconds, milliseconds);

container.append(resultField);

function calculateDiff(){
    let current = new Date();
    let birthDate = new Date(dateField.value);
    birthDate.setHours(0);

    clearDate();
    let milliSecondsCount =  current.getTime() - birthDate.getTime();
    
    if(isNaN(milliSecondsCount) || milliSecondsCount < 0) return;

    milliseconds.innerHTML = 'MilliSeconds: <div class="value">' + milliSecondsCount + '</div>';

    let yearCount = Math.floor(milliSecondsCount / (1000 * 3600 * 24 * 365));
    year.innerHTML = 'YEAR :<div class="value"> ' + yearCount + '</div>';
    
    let monthCount  = yearCount * 12;
    months.innerHTML = 'Months: <div class="value">' + monthCount + '</div>';

    let daysCount = Math.floor(milliSecondsCount / (1000 * 3600 * 24));
    day.innerHTML = 'Days: <div class="value">' + daysCount + '</div>';
    
    let hourCount = Math.floor(milliSecondsCount / (1000 * 3600));
    hour.innerHTML = 'Hours: <div class="value">' + hourCount + '</div>';
    
    let minutesCount = Math.floor(milliSecondsCount / (1000 * 60));
    minutes.innerHTML = 'Minutes: <div class="value">' + minutesCount + '</div>';

    let secondsCount =   Math.floor(milliSecondsCount / 1000)
    seconds.innerHTML = 'Seconds: <div class="value">' + secondsCount + '</div>';
}

function clearDate(){
    milliseconds.innerHTML = '';
    year.innerHTML = '';
    months.innerHTML = '';
    day.innerHTML = '';
    hour.innerHTML = '';
    minutes.innerHTML = '';
    seconds.innerHTML = '';
}