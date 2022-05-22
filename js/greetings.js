

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings();
}
/*
loginButton.addEventListener("click",onLoginBtnClick);

const loginForm = document.querySelector()


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}*/

/*
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }

    h1.style.color = newColor;
}


h1.addEventListener("click", handleTitleClick);
*/
