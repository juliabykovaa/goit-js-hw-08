import throttle from 'lodash.throttle';
const formInput = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";
let inputData = {};

formInput.addEventListener("input", throttle(function (e) {
    inputData[e.target.name] = e.target.value;
    onFormInput();
}, 500)
)

 setInput();
formInput.addEventListener('submit', onFormSubmit)

function onFormInput() {
    const value = JSON.stringify(inputData)
    localStorage.setItem(LOCALSTORAGE_KEY, value)
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset(); 
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.removeItem(LOCALSTORAGE_KEY)
    
    
}

function setInput() {
    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    for(let key in savedData) {
        if (savedData) {
            formInput[key].value = savedData[key];
        }
    }
}

