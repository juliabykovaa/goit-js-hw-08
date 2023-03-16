import throttle from 'lodash.throttle';
const formInput = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const inputData = {};


setInput();
formInput.addEventListener('submit', onFormSubmit)
 
formInput.addEventListener("input", throttle(function (e) {
    inputData[e.target.name] = e.target.value;
    onFormInput();
}), 500)
 
function onFormInput() {
    const value = JSON.stringify(inputData)
    localStorage.setItem(LOCALSTORAGE_KEY, value)
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(inputData);
    evt.target.reset();
}

function setInput(evt) {
    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    for (key in savedData) {
        if (savedData) {
            formInput[key].value = savedData[key];
        }
    }
}

