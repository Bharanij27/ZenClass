let container = document.createElement('div');
container.setAttribute('class', 'container align-items-center');
container.setAttribute('style', 'display:flex;');

let form = document.createElement('form');
form.setAttribute('onsubmit', 'processData()');

//          First Name
let fisrtName = document.createElement('div');
fisrtName.setAttribute('class', 'row');

let fnlabelField = document.createElement('div');
fnlabelField.setAttribute('class', 'column-left');

let fnameLabel = document.createElement('label');
fnameLabel.setAttribute('for', 'first-name');
fnameLabel.innerText = 'First Name';

fnlabelField.append(fnameLabel);

let fnameInputField = document.createElement('div');
fnameInputField.setAttribute('class', 'column-right');

fnameInput = document.createElement('input');
addAttributes(fnameInput, 'text', 'fname', 'form-control', 'first-name', 'First Name')

fnameInputField.append(fnameInput);

fisrtName.append(fnlabelField, fnameInputField)

form.append(fisrtName);



//          Last Name

let lastName = document.createElement('div');
lastName.setAttribute('class', 'row');

let lnlabelField = document.createElement('div');
lnlabelField.setAttribute('class', 'column-left');

let lnameLabel = document.createElement('label');
lnameLabel.setAttribute('for', 'last-name');
lnameLabel.innerText = 'Last Name';

lnlabelField.append(lnameLabel);

let lnameInputField = document.createElement('div');
lnameInputField.setAttribute('class', 'column-right');

lnameInput = document.createElement('input');
addAttributes(lnameInput, 'text', 'lname', 'form-control', 'last-name', 'Last Name')

lnameInputField.append(lnameInput);

lastName.append(lnlabelField, lnameInputField)

form.append(lastName);


// Address


let address = document.createElement('div');
address.setAttribute('class', 'row');

let addressField = document.createElement('div');
addressField.setAttribute('class', 'column-left');

let addressLabel = document.createElement('label');
addressLabel.setAttribute('for', 'address');
addressLabel.innerText = 'Address';

addressField.append(addressLabel);

let addressInputField = document.createElement('div');
addressInputField.setAttribute('class', 'column-right');

addressInput = document.createElement('input');
addAttributes(addressInput, 'text', 'address', 'form-control', 'address', 'Address')

addressInputField.append(addressInput);

address.append(addressField, addressInputField)

form.append(address);

//      Pincode


let pincode = document.createElement('div');
pincode.setAttribute('class', 'row');

let pincodeField = document.createElement('div');
pincodeField.setAttribute('class', 'column-left');

let pincodeLabel = document.createElement('label');
pincodeLabel.setAttribute('for', 'pincode');
pincodeLabel.innerText = 'Pincode';

pincodeField.append(pincodeLabel);

let pincodeInputField = document.createElement('div');
pincodeInputField.setAttribute('class', 'column-right');

pincodeInput = document.createElement('input');
addAttributes(pincodeInput, 'text', 'pincode', 'form-control', 'pincode', 'Pincode')

pincodeInputField.append(pincodeInput);

pincode.append(pincodeField, pincodeInputField)

form.append(pincode);

//          Food

let food = document.createElement('div');
food.setAttribute('class', 'row');

let foodField = document.createElement('div');
foodField.setAttribute('class', 'column-left');

let foodLabel = document.createElement('label');
foodLabel.setAttribute('for', 'food');
foodLabel.innerText = 'food';

foodField.append(foodLabel);

let foodInputField = document.createElement('div');
foodInputField.setAttribute('class', 'column-right');

let foodInput = document.createElement('select');
foodInput.setAttribute('class', 'custom-select ui fluid dropdown');
foodInput.setAttribute('style', 'padding:0px 15px')
foodInput.setAttribute('id', 'food');
foodInput.setAttribute('multiple', true);

let pizza = document.createElement('option');
pizza.innerText = 'Pizza';
pizza.setAttribute('value', 'pizza');

let burger = document.createElement('option');
burger.innerText = 'Burger';
burger.setAttribute('value', 'burger');

let idly = document.createElement('option');
idly.innerText = 'Idly';
idly.setAttribute('value', 'idly');

let dhosa = document.createElement('option');
dhosa.innerText = 'Dhosa';
dhosa.setAttribute('value', 'dhosa');

let parota = document.createElement('option');
parota.innerText = 'Parota';
parota.setAttribute('value', 'parota');

let chapati = document.createElement('option');
chapati.innerText = 'Chapati';
chapati.setAttribute('value', 'chapati');

foodInput.append(pizza, burger, idly, dhosa, parota, chapati)
foodInputField.append(foodInput);

food.append(foodField, foodInputField)

form.append(food);




//      Gender
let gender = document.createElement('div');
gender.setAttribute('class', 'row');

let genderField = document.createElement('div');
genderField.setAttribute('class', 'column-left');

let genderLabel = document.createElement('label');
genderLabel.setAttribute('for', 'gender');
genderLabel.innerText = 'Gender';

genderField.append(genderLabel);

let genderInputField = document.createElement('div');
genderInputField.setAttribute('class', 'column-right');

let genderInput = document.createElement('select');
genderInput.setAttribute('class', 'custom-select');
genderInput.setAttribute('style', 'padding:0px 15px')
genderInput.setAttribute('id', 'gender');

let male = document.createElement('option');
male.innerText = 'Male';
male.setAttribute('value', 'Male');

let female = document.createElement('option');
female.innerText = 'Female';
female.setAttribute('value', 'Female');

genderInput.append(male, female)
genderInputField.append(genderInput);

gender.append(genderField, genderInputField)

form.append(gender);

//          State

let state = document.createElement('div');
state.setAttribute('class', 'row');

let stateField = document.createElement('div');
stateField.setAttribute('class', 'column-left');

let stateLabel = document.createElement('label');
stateLabel.setAttribute('for', 'state');
stateLabel.innerText = 'State';

stateField.append(stateLabel);

let stateInputField = document.createElement('div');
stateInputField.setAttribute('class', 'column-right');

let stateInput = document.createElement('select');
stateInput.setAttribute('class', 'custom-select');
stateInput.setAttribute('style', 'padding:0px 15px')
stateInput.setAttribute('id', 'state');

let tn = document.createElement('option');
tn.innerText = 'TamilNadu';
tn.setAttribute('value', 'tn');

let kerala = document.createElement('option');
kerala.innerText = 'Kerala';
kerala.setAttribute('value', 'ke');

let mumbai = document.createElement('option');
mumbai.innerText = 'Mumbai';
mumbai.setAttribute('value', 'mu');

let karnataka = document.createElement('option');
karnataka.innerText = 'Karnataka';
karnataka.setAttribute('value', 'Ka');

stateInput.append(tn, kerala, karnataka, mumbai)
stateInputField.append(stateInput);

state.append(stateField, stateInputField)

form.append(state);

//          Country


let country = document.createElement('div');
country.setAttribute('class', 'row');

let countryField = document.createElement('div');
countryField.setAttribute('class', 'column-left');

let countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
countryLabel.innerText = 'Country';

countryField.append(countryLabel);

let countryInputField = document.createElement('div');
countryInputField.setAttribute('class', 'column-right');

let countryInput = document.createElement('select');
countryInput.setAttribute('class', 'custom-select');
countryInput.setAttribute('style', 'padding:0px 15px')
countryInput.setAttribute('id', 'country')

let india = document.createElement('option');
india.innerText = 'India';
india.setAttribute('value', 'in');

let others = document.createElement('option');
others.innerText = 'Others';
others.setAttribute('value', 'others');

countryInput.append(india, others)
countryInputField.append(countryInput);

country.append(countryField, countryInputField)

form.append(country);


//          Button
let buttonField = document.createElement('div');
buttonField.setAttribute('class', 'justify-content-center');
buttonField.setAttribute('style','display:flex')

let btn = document.createElement('button');
btn.classList.add('btn', 'btn-primary');
btn.innerText = 'Submit';
btn.setAttribute('type', 'submit')

buttonField.append(btn);
form.append(buttonField);

//      Note

let noteField = document.createElement('div');
noteField.setAttribute('class', 'justify-content-center');
noteField.setAttribute('style','display:flex')

let note = document.createElement('p');
note.innerText = 'The user has to hold down the Ctrl key (in Windows) and Command key (on Mac) to select the choices.';
note.setAttribute('class', 'note')

noteField.append(note);
form.append(noteField);

//     Append Form
container.append(form);
document.body.append(container);


if(JSON.parse(localStorage.getItem('data'))){
    createTable();
    localStorage.setItem('data',null)
}


function addAttributes(element, type, id, Class, name, placeholder){
    element.setAttribute('type', type);
    element.setAttribute('id', id);
    element.setAttribute('class', Class);
    element.setAttribute('name', name);
    element.setAttribute('required', true);
    element.setAttribute('placeholder', placeholder);
}

function getSelected(id){
    let elem = document.getElementById(id).selectedOptions;
    let selected = [];
    for(let i = 0; i < elem.length; i++){
        selected.push(elem[i].innerText)
    }
    return selected;
}

function addCell(row, data){
    let td = document.createElement('td');
    td.innerHTML = data;
    row.append(td);  
}

function createTable(){
    let tableContainer = document.createElement('div');
    tableContainer.setAttribute('class', 'container');

    let tableField = document.createElement('div');
    tableField.setAttribute('class', 'row');

    let table = document.createElement('table');
    table.setAttribute('class', 'data');

    table.setAttribute('id', 'table');
    table.setAttribute('border', 1);
    let data = JSON.parse(localStorage.getItem('data'));

    for(let i in data){
    let tr = document.createElement('tr');
        for(let j in data[i]){
            addCell(tr, j);
            addCell(tr, data[i][j])
        }
        table.append(tr);
    }
    tableContainer.append(tableField);
    tableField.append(table);
    document.body.append(tableContainer);
}

function processData(){
    let foodCount = document.getElementById('food').selectedOptions.length
    if(foodCount < 2) return;

    let firstName = fnameInput.value;
    let lastName = lnameInput.value;
    let address = addressInput.value
    let pincode = pincodeInput.value;
    let food = getSelected('food')
    let gender = getSelected('gender');
    let state = getSelected('state');
    let country = getSelected('country');

    let data = [{'First Name': firstName}, {'Last Name': lastName},{'Address': address},{'PinCode': pincode}, {'Food':food}, {'Gender': gender},{'State': state},{'Country': country}];
    localStorage.setItem('data', JSON.stringify(data))
}