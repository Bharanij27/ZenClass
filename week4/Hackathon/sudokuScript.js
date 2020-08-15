let data = [
    "..7..82..6...3159.1..45....9.....45...2...7...74.....6....86..2.3912...5..13..9..",
    "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......",
    "52...6.........7.13...........4..8..6......5...........418.........3..2...87.....",
    "6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....",
    "48.3............71.2.......7.5....6....2..8.............1.76...3.....4......5....",
    "....14....3....2...7..........9...3.6.1.............8.2.....1.4....5.6.....7.8...",
    "......52..8.4......3...9...5.1...6..2..7........3.....6...1..........7.4.......3.",
    "6.2.5.........3.4..........43...8....1....2........7..5..27...........81...6.....",
    ".524.........7.1..............8.2...3.....6...9.5.....1.6.3...........897........",
    "6.2.5.........4.3..........43...8....1....2........7..5..27...........81...6.....",
    ".923.........8.1...........1.7.4...........658.........6.5.2...4.....7.....9.....",
    "6..3.2....5.....1..........7.26............543.........8.15........4.2........7..",
    ".6.5.1.9.1...9..539....7....4.8...7.......5.8.817.5.3.....5.2............76..8...",
    "..5...987.4..5...1..7......2...48....9.1.....6..2.....3..6..2.......9.7.......5..",
    "3.6.7...........518.........1.4.5...7.....6.....2......2.....4.....8.3.....5.....",
    "1.....3.8.7.4..............2.3.1...........958.........5.6...7.....8.2...4.......",
    "6..3.2....4.....1..........7.26............543.........8.15........4.2........7..",
    "....3..9....2....1.5.9..............1.2.8.4.6.8.5...2..75......4.1..6..3.....4.6.",
    "45.....3....8.1....9...........5..9.2..7.....8.........1..4..........7.2...6..8..",
    ".237....68...6.59.9.....7......4.97.3.7.96..2.........5..47.........2....8.......",
    "..84...3....3.....9....157479...8........7..514.....2...9.6...2.5....4......9..56",
    ".98.1....2......6.............3.2.5..84.........6.........4.8.93..5...........1..",
    "..247..58..............1.4.....2...9528.9.4....9...1.........3.3....75..685..2...",
    "4.....8.5.3..........7......2.....6.....5.4......1.......6.3.7.5..2.....1.9......",
    ".2.3......63.....58.......15....9.3....7........1....8.879..26......6.7...6..7..4",
    "1.....7.9.4...72..8.........7..1..6.3.......5.6..4..2.........8..53...7.7.2....46",
    "4.....3.....8.2......7........1...8734.......6........5...6........1.4...82......",
    ".......71.2.8........4.3...7...6..5....2..3..9........6...7.....8....4......5....",
    "6..3.2....4.....8..........7.26............543.........8.15........8.2........7..",
    ".47.8...1............6..7..6....357......5....1..6....28..4.....9.1...4.....2.69.",
    "......8.17..2........5.6......7...5..1....3...8.......5......2..4..8....6...3....",
    "38.6.......9.......2..3.51......5....3..1..6....4......17.5..8.......9.......7.32",
    "...5...........5.697.....2...48.2...25.1...3..8..3.........4.7..13.5..9..2...31..",
    ".2.......3.5.62..9.68...3...5..........64.8.2..47..9....3.....1.....6...17.43....",
    ".8..4....3......1........2...5...4.69..1..8..2...........3.9....6....5.....2.....",
    "..8.9.1...6.5...2......6....3.1.7.5.........9..4...3...5....2...7...3.8.2..7....4",
    "4.....5.8.3..........7......2.....6.....5.8......1.......6.3.7.5..2.....1.8......",
    "1.....3.8.6.4..............2.3.1...........958.........5.6...7.....8.2...4.......",
    "1....6.8..64..........4...7....9.6...7.4..5..5...7.1...5....32.3....8...4........",
    "249.6...3.3....2..8.......5.....6......2......1..4.82..9.5..7....4.....1.7...3...",
    "...8....9.873...4.6..7.......85..97...........43..75.......3....3...145.4....2..1",
    "...5.1....9....8...6.......4.1..........7..9........3.8.....1.5...2..4.....36....",
    "......8.16..2........7.5......6...2..1....3...8.......2......7..3..8....5...4....",
    ".476...5.8.3.....2.....9......8.5..6...1.....6.24......78...51...6....4..9...4..7",
    ".....7.95.....1...86..2.....2..73..85......6...3..49..3.5...41724................",
    ".4.5.....8...9..3..76.2.....146..........9..7.....36....1..4.5..6......3..71..2..",
    ".834.........7..5...........4.1.8..........27...3.....2.6.5....5.....8........1..",
    "..9.....3.....9...7.....5.6..65..4.....3......28......3..75.6..6...........12.3.8",
    ".26.39......6....19.....7.......4..9.5....2....85.....3..2..9..4....762.........4",
    "2.3.8....8..7...........1...6.5.7...4......3....1............82.5....6...1.......",
    "6..3.2....1.....5..........7.26............843.........8.15........8.2........7..",
    "1.....9...64..1.7..7..4.......3.....3.89..5....7....2.....6.7.9.....4.1....129.3.",
    ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2....3.8....9",
    ".2....5938..5..46.94..6...8..2.3.....6..8.73.7..2.........4.38..7....6..........5",
    "9.4..5...25.6..1..31......8.7...9...4..26......147....7.......2...3..8.6.4.....9.",
    "...52.....9...3..4......7...1.....4..8..453..6...1...87.2........8....32.4..8..1.",
    "53..2.9...24.3..5...9..........1.827...7.........981.............64....91.2.5.43.",
    "1....786...7..8.1.8..2....9........24...1......9..5...6.8..........5.9.......93.4",
    "....5...11......7..6.....8......4.....9.1.3.....596.2..8..62..7..7......3.5.7.2..",
    ".47.2....8....1....3....9.2.....5...6..81..5.....4.....7....3.4...9...1.4..27.8..",
    "......94.....9...53....5.7..8.4..1..463...........7.8.8..7.....7......28.5.26....",
    ".2......6....41.....78....1......7....37.....6..412....1..74..5..8.5..7......39..",
    "1.....3.8.6.4..............2.3.1...........758.........7.5...6.....8.2...4.......",
    "2....1.9..1..3.7..9..8...2.......85..6.4.........7...3.2.3...6....5.....1.9...2.5",
    "..7..8.....6.2.3...3......9.1..5..6.....1.....7.9....2........4.83..4...26....51.",
    "...36....85.......9.4..8........68.........17..9..45...1.5...6.4....9..2.....3...",
    "34.6.......7.......2..8.57......5....7..1..2....4......36.2..1.......9.......7.82",
    "......4.18..2........6.7......8...6..4....3...1.......6......2..5..1....7...3....",
    ".4..5..67...1...4....2.....1..8..3........2...6...........4..5.3.....8..2........",
    ".......4...2..4..1.7..5..9...3..7....4..6....6..1..8...2....1..85.9...6.....8...3",
    "8..7....4.5....6............3.97...8....43..5....2.9....6......2...6...7.71..83.2",
    ".8...4.5....7..3............1..85...6.....2......4....3.26............417........",
    "....7..8...6...5...2...3.61.1...7..2..8..534.2..9.......2......58...6.3.4...1....",
    "......8.16..2........7.5......6...2..1....3...8.......2......7..4..8....5...3....",
    ".2..........6....3.74.8.........3..2.8..4..1.6..5.........1.78.5....9..........4.",
    ".52..68.......7.2.......6....48..9..2..41......1.....8..61..38.....9...63..6..1.9",
    "....1.78.5....9..........4..2..........6....3.74.8.........3..2.8..4..1.6..5.....",
    "1.......3.6.3..7...7...5..121.7...9...7........8.1..2....8.64....9.2..6....4.....",
    "4...7.1....19.46.5.....1......7....2..2.3....847..6....14...8.6.2....3..6...9....",
    "......8.17..2........5.6......7...5..1....3...8.......5......2..3..8....6...4....",
    "963......1....8......2.5....4.8......1....7......3..257......3...9.2.4.7......9..",
    "15.3......7..4.2....4.72.....8.........9..1.8.1..8.79......38...........6....7423",
    "..........5724...98....947...9..3...5..9..12...3.1.9...6....25....56.....7......6",
    "....75....1..2.....4...3...5.....3.2...8...1.......6.....1..48.2........7........",
    "6.....7.3.4.8.................5.4.8.7..2.....1.3.......2.....5.....7.9......1....",
    "....6...4..6.3....1..4..5.77.....8.5...8.....6.8....9...2.9....4....32....97..1..",
    ".32.....58..3.....9.428...1...4...39...6...5.....1.....2...67.8.....4....95....6.",
    "...5.3.......6.7..5.8....1636..2.......4.1.......3...567....2.8..4.7.......2..5..",
    ".5.3.7.4.1.........3.......5.8.3.61....8..5.9.6..1........4...6...6927....2...9..",
    "..5..8..18......9.......78....4.....64....9......53..2.6.........138..5....9.714.",
    "..........72.6.1....51...82.8...13..4.........37.9..1.....238..5.4..9.........79.",
    "...658.....4......12............96.7...3..5....2.8...3..19..8..3.6.....4....473..",
    ".2.3.......6..8.9.83.5........2...8.7.9..5........6..4.......1...1...4.22..7..8.9",
    ".5..9....1.....6.....3.8.....8.4...9514.......3....2..........4.8...6..77..15..6.",
    ".....2.......7...17..3...9.8..7......2.89.6...13..6....9..5.824.....891..........",
    "3...8.......7....51..............36...2..4....7...........6.13..452...........8.."
] ;

//                      RESTRICTS DIRECT URL ACCESS

(function(){
    let isVerified = JSON.parse(localStorage.getItem('isVerified'));
    if(!isVerified){
        alert('Please Enter to your name to play')
        window.open('index.html', '_self')
    };
})();


//                      Setting up the timer

let setTimer
function resetTime(){

    min = 0
    sec = 0;

    setTimer = setInterval(() => {
        +sec++;
        if(sec < 10) sec= '0' + sec;
        
        if(sec == 60){
            sec = '00';
            +min++;
        }
        
        if(min == 4){
            clearInterval(setTimer);
            gameOver(false);
            alert('Times Up... You score is 0... Better luck next time')
        }

        timer.innerText = min + ' : ' + sec;
    }, 1000);

}


let onfocusCell = null;
let miniTableValue = [1, 2, 3, 4, 5, 6, 7, 8 ,9];

let onHead = false;
window.onresize = function(){
    if(window.innerWidth <= 495 && onfocusCell != null)  getNumberBox(onfocusCell); 
    else if(onHead && onfocusCell != null){
        getNumberBox(onfocusCell);
        onHead = false;
    }  
}


//                      On Quiting

function quiting(){
    let quit = confirm('Do you want to quit?');
    if(quit){
        clearInterval(setTimer);
        gameOver(false);
        alert('You score is 0... Better luck next time')
    }
}



//                     After time out or after valid solution

function gameOver(won){
    let users = JSON.parse(localStorage.getItem('users'));
    let name = Object.keys(users[users.length - 1]);
    if(won){
        let score = 240 - ((+min * 60) + +sec);
        users[users.length - 1][name] = score;
        alert('Congrats You have solved the puzzle.... You Score is ' + score)
    }
    else{
        users[users.length - 1][name] = 0;
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isVerified', true);
    window.open('index.html', '_self')
}


//          Is the current one is a valid solution 

function isTableValid(){
    let grid = [[0, 0], [3, 0], [6, 0], [0, 3], [3, 3], [6, 3], [0, 6], [3, 6], [6, 6]]
    for(let i = 0; i < 9; i++){
        if(!rowValidation(i, true)) return false;
    }

    for(let i = 0; i < 9; i++){
        if(!colValidation(i, true)) return false;
    }

    for(let i = 0; i < 9; i++){
        if(!gridValidation(grid[i], true)) return false;
    }

    return true;
}

let rowIndex, colIndex;


//                  Check is the number valid on entering
function isValid(id){
    [rowIndex, colIndex] = id.split('');
    return rowValidation(rowIndex) && colValidation(colIndex) && gridValidation(rowIndex, colIndex);
}


//              Checks value is valid in row manner

function rowValidation(rowIndex, isFinalCheck = false){
    let row = tableContent[rowIndex].filter(number => number!='.');
    let unique = [...new Set(row)];
    let value = tableContent[+rowIndex][+colIndex];
    let isrepeated = row.filter(number => number==value).length == 1;
    if(isFinalCheck) return 9 == unique.length || isrepeated;
    return row.length == unique.length || isrepeated;
}


//              Checks value is valid in column manner

function colValidation(colIndex, isFinalCheck = false){
    let col = [];
    for(let i = 0; i < 9; i++){
        let value= tableContent[i].filter((number, index) =>{
            if(index == +colIndex && number != '.') return number
        });
        if(value.length) col.push(value[0]);
    }
    let unique = [...new Set(col)];
    let value = tableContent[+rowIndex][+colIndex];
    let isrepeated = col.filter(number => number==value).length == 1;
    if(isFinalCheck) return 9 == unique.length || isrepeated;
    return col.length == unique.length || isrepeated;
}

//          Return which grid the number cell belongs to

function checkGrid(index){
    if(index < 3) return [0, 2];
    else if(index < 6) return [3, 5];
    return [6, 8];
}

//              Checks value is valid in grid manner

function gridValidation(rowIndex, colIndex, isFinalCheck = false){
    let rowLimit = checkGrid(rowIndex);
    let colLimit = checkGrid(colIndex);
    let grid = [];
    for(let i = rowLimit[0]; i <= rowLimit[1] ; i++){
        for(let j = colLimit[0]; j <= colLimit[1]; j++){
            tableContent[i][j] != '.' && grid.push(tableContent[i][j]);
        }
    }
    let unique = [...new Set(grid)];
    let value = tableContent[+rowIndex][+colIndex];
    let isrepeated = grid.filter(number => number==value).length == 1;
    if(isFinalCheck) return 9 == unique.length || isrepeated;
    return grid.length == unique.length || isrepeated;
}

//                          Remove the Mini Table

function removeChild(element){
    if(!element || element.lastElementChild.nodeName == 'SPAN') return
    element.removeChild(element.lastElementChild);
    element.addEventListener('click', function(){
        getNumberBox(element);
    }, true)
}


//                          Change the cell value

function changeSpan(element, number){
    let child = element.lastElementChild;
    child.innerText = number
    child.classList.add('selectedNum');
    changeTableContentArray(child.id, number);
    if(!isValid(child.id)) child.classList.add('wrong-one');
    else{
        child.classList.contains('wrong-one') && child.classList.remove('wrong-one');
        isTableValid() && gameOver(true);
    }
    onfocusCell = null
}

//                  Change TableContent on updating cell

function changeTableContentArray(id, value){
    if(value=='') value = '.'
    let [row, col] = id.split('');
    tableContent[row][col] = value;
}

//                  Remove MiniTable on header part (< 450px)

function removeChildOnHead(){
    let body = document.querySelector('.tableField');
    body.firstElementChild.nodeName == 'DIV' && body.removeChild(body.firstChild)
}

//                  Creating MiniTable on header part (< 450px)

function tableOnHead(cell){
    onHead = true;

    let div = document.createElement('div');
    div.classList.add('tablePortionOnHead');
    
    let btn = document.createElement('button');
    btn.innerText = 'clear';
    btn.classList.add('onheadBtn');
    btn.addEventListener('click', function(){
        removeChildOnHead(cell);
        onfocusCell = null;
        changeSpan(cell, '');
    }, true);
    
    let numberBox = document.createElement('table');
    numberBox.classList.add('onheadTable');
    numberBox.setAttribute('cellpadding', 0);
    numberBox.setAttribute('cellspacing', 0);

    onfocusCell = cell; 
    let row = document.createElement('tr');
    
    for(let i = 0 ; i < 9; i++){
        let content = document.createElement('td');
        content.innerText = miniTableValue[i];
        content.addEventListener('click', function(){
                removeChildOnHead(cell);
                removeChild(cell);
                changeSpan(cell, content.innerText);
            });
        row.append(content);
        numberBox.append(row);
    }

    div.append(btn, numberBox);
    let body = document.querySelector('.tableField');
    body.prepend(div)
}

//          Gnenerating Mini table Number Box

function getNumberBox(cell){
    //      If predefined number
    if(cell.classList.contains('default')) return
    
    if(onfocusCell != null){
        removeChild(onfocusCell);
        onHead && removeChildOnHead(onfocusCell);
        cell.removeEventListener('click', function(){
            removeChild(cell);
        }, true);
    }

    if(window.innerWidth <= 495){
        tableOnHead(cell);
        return
    } 
    
    let index = 0;
    let div = document.createElement('div');
    div.classList.add('tablePortion');
    
    let btn = document.createElement('button');
    btn.innerText = 'clear';
    btn.addEventListener('click', function(){
        removeChild(cell);
        onfocusCell = null;
        changeSpan(cell, '');
    }, true);
    
    let numberBox = document.createElement('table');
    onfocusCell = cell;

    numberBox.setAttribute('cellpadding', 0);
    numberBox.setAttribute('cellspacing', 0);
    numberBox.classList.add('mini-table');

    let tbody = document.createElement('tbody');

    for(let i = 0; i < 9; i+=3){
        let miniRow = document.createElement('tr')
        
        for(let j = 0; j < 3; j++){
            let td = document.createElement('td');
            td.innerText = miniTableValue[index++];
            td.addEventListener('click', function(){
                removeChild(cell);
                removeChildOnHead(cell)
                changeSpan(cell, td.innerText);
            });
            miniRow.append(td);
        }

        tbody.append(miniRow);
    }

    numberBox.append(tbody);
    div.append(btn, numberBox);
    cell.append(div);
}


let min = '0';
let sec = '0';

//              Header Part

let header = document.createElement('div');
header.setAttribute('id', 'header');

let headerContent = document.createElement('div');
headerContent.setAttribute('class', 'headerContent')
let timer = document.createElement('p');
timer.setAttribute('class', 'timer')
let title = document.createElement('h1');
title.innerText = 'SUDOKU'; 


//              Body part

let body = document.createElement('div');
body.classList.add('tableField');

let tableContent = [];

//              Table Creation

function createTable(){
    
    let dataIndex = Math.floor(Math.random() * (data.length - 1) - 1); 
    let selectedData = data[dataIndex];

    let table = document.createElement('table');
    table.setAttribute('cellpadding', 0);
    table.setAttribute('cellspacing', 0);

    let tbody = document.createElement('tbody');

    let spliiter = 0;
    tableContent = [];
    for(let i = 0; i < 9; i++){
        tableContent.push(selectedData.substring(spliiter, spliiter+9).split(''));
        spliiter += 9;
    }
    let rowCount = 0;
    let colCount = 0;
    let noBorder = 0;

    for(let rowNum = 0; rowNum < 9; rowNum++){
        let row = document.createElement('tr');
        for(let cell = 0; cell < 9; cell++){
            let td = document.createElement('td');
            td.addEventListener('click', function(){
                getNumberBox(td);
            }, true);
            td.setAttribute('class', 'desc');

            
            let cellContent = document.createElement('span');
            cellContent.setAttribute('id', rowCount + '' + colCount)
            
            
            if(rowCount == noBorder) td.classList.add('no-border');
            if((colCount + 1) % 3 == 0) td.classList.add('col-border');
            if((rowCount + 1) % 3 == 0){
                td.classList.add('row-border');
                noBorder = rowCount + 1;
            }
            
            if(tableContent[rowCount][colCount] != "."){
                td.classList.add('default')
                cellContent.innerText = tableContent[rowCount][colCount];
            }
            colCount++;

            if(colCount == 9 ){
                colCount = 0;
                rowCount++;
            }
            
            td.append(cellContent);
            row.append(td);
        }
        tbody.append(row);
    }
    
    table.append(tbody);
    if(body.firstElementChild)body.replaceChild(table ,body.firstElementChild)
    else body.append(table);

    if(setTimer){
        clearInterval(setTimer);
    }
    resetTime();
}

createTable();


//              Reset Button

let btnDiv = document.createElement('div');
btnDiv.classList.add('resetBtn');

let reset = document.createElement('button');
reset.setAttribute('type', 'button')
reset.setAttribute('class', 'reset second');
reset.innerText = 'Reset';
reset.setAttribute('onclick', 'createTable()');


let quit = document.createElement('button');
quit.setAttribute('type', 'button')
quit.setAttribute('class', 'reset');
quit.innerText = 'Exit';
quit.setAttribute('onclick', 'quiting()');

btnDiv.append(reset, quit);

headerContent.append(title, timer);
header.append(headerContent, body,  btnDiv);

//              Footer 

let footer = document.createElement('footer');
let unordelist = document.createElement('ul');

let note = document.createElement('div');
note.innerText = 'Note';

let list0 = document.createElement('li');
list0.innerText = 'The time limit to solve this puzzle is only 4 Minutes after that you will be redirected to Home Page';

let list1 = document.createElement('li');
list1.innerText = 'Click on the boxes to change the value';

let list11 = document.createElement('li');
list11.innerText = 'Click clear button on the modal to delete the cell value and to close the modal';

let list2 = document.createElement('li');
list2.innerText = 'Fill each row, grid (3 x 3), column with unique value to solve the sudoku puzzle';

let list3 = document.createElement('li');
list3.innerText = 'Try to finish the puzzle before 4 minutes';

let list4 = document.createElement('li');
list4.innerText = 'Scores will provided based on the time you take to complete. If you could not able to solve within 4 minutes you will have 0 Point';

let list5 = document.createElement('li');
list5.innerText = 'Clicking on reset will give you a new puzzle and reset the timer to 0';

let list6 = document.createElement('li');
list6.innerText = 'On quiting the game, your points will be automatically reduced to 0'

unordelist.append(list0, list1, list11, list2, list3, list4, list5, list6);
footer.append(note, unordelist);   
document.body.append(header, footer);