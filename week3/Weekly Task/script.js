var valid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '-', '+', '%'];
document.addEventListener('keyup', keyBoardInput)
function del(){
    let input = document.querySelector('.input');
    let data = input.value.split('');
    data.pop();
    input.value = data.join('');
}

function clearField(){
    let input = document.querySelector('.input');
    console.log(1)
    input.value = '';
}

function getData(inp) {
    if(valid.includes(inp.toString())){
        let input = document.querySelector('.input');
        input.value+=inp
    }
}

function compute() {
    try {
        let input = document.querySelector('.input');
        let res = eval(input.value);
        input.value = res
    } catch (error) {
        
    }
}

function keyBoardInput(event) {
    if(event.key == 'Enter') compute();
    if(event.key === "Backspace" || event.key === "Delete") del();
    else getData(event.key);
}